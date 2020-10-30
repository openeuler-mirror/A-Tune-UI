<template>
  <q-page class="q-py-xl q-mx-auto bg-grey-4" style="overflow: auto">
    <div id="analysis-list-form" style="display: block">
      <q-card class="q-mx-auto page-middle" style="">
        <q-tab-panel name="analysis" class="q-mx-auto page-middle">
            <div class="text-h6 q-px-lg q-pb-lg q-pt-sm" style="min-height: 800px">
              <q-list bordered class="rounded-borders q-my-md" v-for="(file, index) in analysis" :key="index">

                <q-item clickable v-ripple class="q-px-lg" @click="initialDetailInfo(file, 0)">
                  <q-item-section>
                    <q-item-label lines="1" >{{ file.name }}</q-item-label>
                    <q-item-label caption lines="2">
                      <span class="text-weight-bold"></span>
                      {{ file.info }}
                    </q-item-label>
                  </q-item-section>

                  <q-item-section side class="q-mx-xl text-subtitle1 text-weight-medium">
                    {{ file.status }}
                  </q-item-section>

                  <q-item-section side class="text-subtitle1 text-weight-medium">
                    {{ file.date }}
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
          </q-tab-panel>
      </q-card>
    </div>

    <div id="analysis-main" class="text-center" style="display: none">
      <div class="text-h5" style="">{{ fileName }}</div>
      <div id="workload-type" class="text-subtitle1">workload:&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-body1">{{ fileWorkLoad }}</span></div>

      <div id="analysis-param-form" class="q-pa-md q-mx-auto page-middle">
        <q-table
          title="Parameter"
          :data="paramData"
          :columns="paramColumns"
          row-key="colName"
          :pagination.sync="paramPagination"
          style="max-height: 1154px"
        >
          <template v-slot:top>
            <span class="text-h5">&nbsp;&nbsp;&nbsp;&nbsp;Parameters</span>
            <q-space />
          </template>
        </q-table>
      </div>

      <div class="q-pa-lg q-mx-auto page-middle bg-white graph-bg" id="analysis-chart">
        <q-form @submit="onSubmit" class="q-gutter-md" style="width: 100%; display: flow-root;">
          <q-btn label="Submit" type="submit" class="vertical-middle" style="float: right; margin-right: 30px" color="primary"/>
          <q-select
            filled
            v-model="modelCompare"
            multiple
            :options="optionCompare"
            label="Compare With"
            max-values="5"
            counter
            hint="Select up to 5 files to compare"
            style="width: 300px; float: right"
          />
          <q-select
            filled
            v-model="modelDim"
            multiple
            :options="optionDim"
            label="Dimensions"
            style="width: 300px; float: right"
          />
        </q-form>
      </div>

    </div>

    <div id="popup-window" style="height: 500px; width: 750px; z-index: 1; display: none" class="bg-grey-3 fixed-center">
      <q-btn flat round color="primary" icon="close" class="absolute-top-right" @click="closePopUp"/>
      <div id="chart-container" style="height: 450px; width: 750px;"></div>
    </div>
  </q-page>
</template>

<script>
import axios from 'axios'
import { host, port } from '../static/js/utils.js'
import { initialParamChart, updateParamChart, deleteOldData, addSeriesForChart } from '../static/js/analysis.js'

export default {
  data () {
    return {
      analysis: [],
      fileName: '',
      fileWorkLoad: '',
      paramData: [],
      paramColumns: [],
      paramPagination: { page: 1, rowsPerPage: 20 },
      modelDim: [],
      optionDim: [],
      modelCompare: [],
      optionCompare: [],
      fileChartId: [],
      compareChartId: []
    }
  },
  components: { },
  methods: {

    closePopUp () {
      console.log('close popup')
      document.getElementById('popup-window').style.display = 'none'
    },

    onSubmit () {
      for (var el in this.optionDim) {
        var container = document.getElementById('div-' + this.optionDim[el])
        if (this.modelDim.indexOf(this.optionDim[el]) > -1) {
          container.style.display = 'block'
        } else {
          container.style.display = 'none'
        }
      }
      deleteOldData(this.fileChartId, this.compareChartId)
      this.compareChartId.splice()
      var count = 1
      for (var file in this.modelCompare) {
        this.addCompareFileInfo(this.modelCompare[file], 0, count)
        count++
      }
    },

    getAnalysisList () {
      const path = `http://${host}:${port}/analysis`
      axios.get(path).then((res) => {
        this.analysis = res.data.analysis
        this.optionCompare.splice()
        for (var el in this.analysis) {
          this.optionCompare.push(this.analysis[el].name)
        }
      })
    },

    addCompareFileInfo (file, line, fileNum) {
      const path = `http://${host}:${port}/analysis/${file}/${line}`
      axios.get(path).then((res) => {
        if (res.data.file_exist === false) {
          this.optionCompare.splice(this.optionCompare.indexOf(file), 1)
        } else {
          if (line === 0) {
            for (var el in res.data.table_header) {
              if (document.getElementById('chart-' + res.data.table_header[el]) === undefined) {
                var divId = res.data.table_header[el].split('.')[0]
                if (document.getElementById('div-' + divId) === undefined) {
                  var outer = document.getElementById('analysis-chart')
                  var div = document.createElement('div')
                  div.id = 'div-' + divId
                  outer.appendChild(div)
                  this.compareChartId.push(divId)
                  this.optionDim.push(div)
                  this.modelDim.push(div)
                }
                initialParamChart('div-' + divId, res.data.table_header[el], file)
                this.compareChartId.push('chart-' + res.data.table_header[el])
              } else {
                addSeriesForChart('chart-' + res.data.table_header[el], file)
              }
            }
          }
          if (res.data.csv_lines > 0) {
            updateParamChart(res.data.table_header, res.data.csv_data, fileNum, file)
          }
          if (res.data.csv_lines === 20) {
            this.addCompareFileInfo(file, res.data.line, fileNum)
          }
        }
      })
    },

    initialDetailInfo (file, line) {
      this.fileName = file.name
      if (this.optionCompare.indexOf(file.name) > -1) {
        this.optionCompare.splice(this.optionCompare.indexOf(file.name), 1)
      }
      const path = `http://${host}:${port}/analysis/${file.name}/${line}`
      axios.get(path).then((res) => {
        if (res.data.file_exist === false) {
          this.$q.notify('File does not exist')
          document.getElementById('analysis-list-form').style.display = 'none'
          document.getElementById('analysis-main').style.display = 'grid'
          this.analysis.clear()
          this.getAnalysisList()
        } else {
          if (line === 0) {
            document.getElementById('analysis-list-form').style.display = 'none'
            document.getElementById('analysis-main').style.display = 'grid'
            this.initialChart(res.data.table_header, file.name)
            if (res.data.log_lines === 0) {
              document.getElementById('analysis-param-form').style.display = 'none'
              document.getElementById('workload-type').style.display = 'none'
            }
          }
          if (res.data.csv_data.length > 0) {
            updateParamChart(res.data.table_header, res.data.csv_data, 0, file.name)
          }
          if (res.data.log_lines !== 0) {
            if (line === 0) {
              this.paramColumns.push({ colName: 'Section', align: 'center', label: 'Section', field: 'Section' })
              this.paramColumns.push({ colName: 'Status', align: 'center', label: 'Status', field: 'Status' })
              this.paramColumns.push({ colName: 'Key', align: 'center', label: 'Key', field: 'Key' })
              this.paramColumns.push({ colName: 'Value', align: 'center', label: 'Value', field: 'Value' })
              this.paramColumns.push({ colName: 'Note', align: 'center', label: 'Note', field: 'Note' })
              this.fileWorkLoad = res.data.workload
            }
            for (var m = 0; m < res.data.log_data.length; m++) {
              var newParam = { Section: res.data.log_data[m][0], Status: res.data.log_data[m][1] }
              newParam[this.paramColumns[0].colName] = res.data.log_data[m][0]
              newParam[this.paramColumns[1].colName] = res.data.log_data[m][1]
              newParam[this.paramColumns[2].colName] = res.data.log_data[m][2]
              newParam[this.paramColumns[3].colName] = res.data.log_data[m][3]
              newParam[this.paramColumns[4].colName] = res.data.log_data[m][4]
              this.paramData.push(newParam)
            }
          }
          if (res.data.csv_lines === 20 || res.data.log_lines === 20) {
            this.initialDetailInfo(file, res.data.line)
          }
        }
      })
    },

    initialChart (header, fileName) {
      var container = document.getElementById('analysis-chart')
      for (var el in header) {
        var dim = header[el].split('.')[0]
        if (this.optionDim.indexOf(dim) <= -1) {
          var div = document.createElement('div')
          div.id = 'div-' + dim
          container.appendChild(div)
          this.optionDim.push(dim)
          this.modelDim.push(dim)
        }
        initialParamChart('div-' + dim, header[el], fileName)
        this.fileChartId.push('chart-' + header[el])
      }
      this.onSubmit()
    }
  },
  created () {
    this.getAnalysisList()
  }
}
</script>

<style>
@import '../css/analysis.css'
</style>
