<template>
	  <q-page class="q-py-xl q-mx-auto bg-grey-4" style="overflow: auto">
    <div id="tuning-main" class="text-center" style="display: none">
      <div class="text-h5" style="">{{ fileName }}</div>
      <div class="text-subtitle1">engine:&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-body1">{{ fileEngine }}</span></div>
      <div class="text-subtitle1">round:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-body1">{{ fileRound }}</span></div>
      <div class="text-subtitle1">status:&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-body1">{{ fileStatus }}</span></div>
      <div id="tuning-performance" class="q-mx-auto tuning-middle"></div>
      <div id="tuning-details" class="q-py-xl q-mx-auto tuning-middle"></div>
      <div id="tuning-param-form" class="q-mx-auto tuning-middle" style="min-width: 1550px">

        <div class="q-pa-md">
          <q-table
            title="Parameters"
            :data="paramTable"
            :columns="columns"
            row-key="name"
            :visible-columns="visibleColumns"
            :pagination.sync="pagination"
            style="max-height: 1154px"
          >
            <template v-slot:top>
              <span class="text-h5">&nbsp;&nbsp;&nbsp;&nbsp;Parameters</span>

              <q-space />

              <q-select
                v-model="visibleColumns"
                multiple
                outlined
                dense
                options-dense
                :display-value="$q.lang.table.columns"
                emit-value
                map-options
                :options="columns"
                option-value="name"
                options-cover
                style="min-width: 50px"
              />
            </template>

          </q-table>
        </div>

      </div>
    </div>

    <div id="tuning-list-form" style="display: block">
      <q-card class="q-mx-auto tuning-middle">
        <q-tabs
          v-model="listTab"
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
        >
          <q-tab name="all" label="all" @click="getFileList('all')" default />
          <q-tab name="running" label="running" @click="getFileList('running')" />
          <q-tab name="finished" label="finished" @click="getFileList('finished')" />
          <q-tab name="error" label="error" @click="getFileList('error')" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="listTab" animated>
          <q-tab-panel name="all">
            <div class="text-h6 q-px-lg q-pb-lg q-pt-sm" style="min-height: 800px">

              <q-list bordered class="rounded-borders q-my-md" v-for="(file, index) in files" :key="index">

                <q-item clickable v-ripple class="q-px-lg" @click="initialChart(file)">
                  <q-item-section>
                    <q-item-label lines="1">{{ file.name }}</q-item-label>
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

          <q-tab-panel name="running">
            <div class="text-h6 q-px-lg q-pb-lg q-pt-sm" style="min-height: 800px">
              <q-list bordered class="rounded-borders q-my-md" v-for="(file, index) in files" :key="index">

                <q-item clickable v-ripple class="q-px-lg" @click="initialChart(file)">
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

          <q-tab-panel name="finished">
            <div class="text-h6 q-px-lg q-pb-lg q-pt-sm" style="min-height: 800px">
              <q-list bordered class="rounded-borders q-my-md" v-for="(file, index) in files" :key="index">

                <q-item clickable v-ripple class="q-px-lg" @click="initialChart(file)">
                  <q-item-section>
                    <q-item-label lines="1">{{ file.name }}</q-item-label>
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

          <q-tab-panel name="error">
            <div class="text-h6 q-px-lg q-pb-lg q-pt-sm" style="min-height: 800px">
              <q-list bordered class="rounded-borders q-my-md" v-for="(file, index) in files" :key="index">

                <q-item clickable v-ripple class="q-px-lg" @click="initialChart(file)">
                  <q-item-section>
                    <q-item-label lines="1">{{ file.name }}</q-item-label>
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
        </q-tab-panels>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import axios from 'axios'
import { deleteChild, host, port } from '../static/js/utils.js'
import { initialAllGraph, updatePerformanceChart } from '../static/js/tuning.js'

export default {
  data () {
    return {
      listTab: 'all',
      files: [],
      fileName: '',
      fileEngine: 'default',
      fileRound: 'totalRound',
      fileStatus: 'status',
      paramTable: [],
      columns: [],
      visibleColumns: [],
      pagination: { page: 1, rowsPerPage: 20 }
    }
  },
  components: { },
  methods: {
    getFileList (type) {
      const path = `http://${host}:${port}/tuning/${type}`
      axios.get(path).then((res) => {
        this.files = res.data.message
      })
    },

    initialChart (file) {
      this.fileName = file.name
      this.fileStatus = file.status
      const path = `http://${host}:${port}/tuning/${file.status}/${file.name}`
      axios.get(path).then((res) => {
        if (res.data.base !== 'ERROR' && (res.data.base === '' || res.data.parameter === '')) {
          this.initialChart(file)
        } else if (res.data.find_file === true) {
          document.getElementById('tuning-list-form').style.display = 'none'
          document.getElementById('tuning-main').style.display = 'grid'
          deleteChild('tuning-performance')
          deleteChild('tuning-details')
          initialAllGraph(res.data.base)
          this.fileEngine = res.data.engine
          this.fileRound = res.data.round
          this.visibleColumns.push('round#')
          this.columns.push({ name: 'round#', align: 'center', label: 'round#', field: 'round#', sortable: true })
          res.data.parameter.forEach(el => this.visibleColumns.push(el))
          res.data.parameter.forEach(el => this.columns.push({ name: el, align: 'center', label: el, field: el, sortable: true }))
          if (res.data.status === 'running') {
            this.updateAllData(res, res.data.line, 'running')
          } else {
            this.updateAllData(res, res.data.line, 'not running')
          }
        } else {
          if (res.data.status === 'running') {
            console.log('file might be moved to finished/error dict')
          } else {
            console.log('file has been deleted')
          }
        }
      })
    },

    updateAllData (res, line, stat) {
      if (line !== -1) {
        this.updateChart(res, line, stat)
      } else if (stat === 'running') {
        this.fileStatus = 'finished'
        this.$q.notify('Tuning finished')
      }
    },

    updateChart (res, line, stat) {
      const path = `http://${host}:${port}/tuning/${res.data.status}/${res.data.file_name}/` + line
      axios.get(path).then((res) => {
        if (res.data.find_file === true) {
          if (res.data.data.length !== 0) {
            for (var k = 0; k < res.data.data[0].length; k++) {
              var newCol = { 'round#': line + k + 1 }
              for (var j = 0; j < res.data.data.length - 1; j++) {
                newCol[res.data.parameter[j]] = res.data.data[j][k]
              }
              this.paramTable.push(newCol)
            }

            var lineList = []
            for (var i in res.data.data[0]) {
              lineList[i] = parseInt(res.data.initial_line + 1, 10) + parseInt(i, 10)
            }
            updatePerformanceChart('performance', lineList, res.data.data[res.data.data.length - 1])
            updatePerformanceChart('best performance', lineList, res.data.data[res.data.data.length - 1])
            updatePerformanceChart('cost', lineList, res.data.cost)
            this.updateAllData(res, res.data.line, stat)
          } else {
            updatePerformanceChart('performance', lineList, res.data.data[res.data.data.length - 1])
            updatePerformanceChart('best performance', lineList, res.data.data[res.data.data.length - 1])
            this.updateAllData(res, res.data.line, stat)
          }
        } else {
          if (res.data.status === 'running') {
            console.log('file might be moved to finished/error dict')
            this.findFile(res.data.file_name, res, line)
          } else {
            this.$q.notify('Tuning "', res.data.file_name, '" has been deleted')
          }
        }
      })
    },

    findFile (filename, res, line) {
      const path = `http://${host}:${port}/tuning/findFile/${filename}`
      axios.get(path).then((ret) => {
        console.log('return', ret.data.status)
        var newStat = ret.data.status
        if (newStat === 'running') {
          this.$q.notify('Tuning "', res.data.file_name, '"  has been deleted')
        } else if (newStat === 'finished') {
          this.$q.notify('Tuning finished')
          this.fileStatus = newStat
          res.data.status = newStat
          this.updateAllData(res, line, newStat)
        } else {
          this.$q.notify('Tuning Interrupted.')
          this.fileStatus = newStat
        }
      })
    }

  },
  created () {
    this.getFileList('all')
  },
  mounted () {
    document.getElementById('tuning-list-form').style.display = 'block'
    var container = document.getElementById('tuning-performance')
    deleteChild('tuning-performance')
    container.style.display = 'none'
  }

}
</script>

<style>
@import '../css/tuning.css'
</style>

<style lang="sass">
.thead-sticky tr > *,
.tfoot-sticky tr > *
  position: sticky
  opacity: 1
  z-index: 1
  background: black
  color: white

.thead-sticky tr:last-child > *
  top: 0

.tfoot-sticky tr:first-child > *
  bottom: 0
</style>
