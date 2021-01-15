<template>
  <q-page class="q-py-xl q-mx-auto bg-grey-4" style="overflow: auto">
    <div id="analysis-main" class="text-center" style="display: grid">
      <div class="text-h5" style="">{{ fileName }}</div>
      <div id="workload-type" class="text-subtitle1" style="display: none">
        workload:&nbsp;&nbsp;&nbsp;&nbsp;
        <span class="text-body1">{{ fileWorkLoad }}&nbsp;&nbsp;</span>
        <q-btn rounded outline color="primary" label="Detect" @click="showDetectPopUp()">
          <q-tooltip content-class="bg-grey-1 text-black">Not what you expect? Detect it!</q-tooltip>
        </q-btn>
      </div>

      <div id="avg-value-circular-progress" class="q-pa-lg q-my-md q-mx-auto page-middle bg-white graph-bg" style="width: 1540px">
        <q-circular-progress
          show-value
          font-size="12px"
          :value="avgCPU"
          size="180px"
          :thickness="0.22"
          color="primary"
          track-color="grey-3"
          class="q-ma-md q-mx-xl"
        >
          <div class="text-subtitle1">CPU: {{ avgCPU }}%</div>
        </q-circular-progress>

        <q-circular-progress
          show-value
          font-size="12px"
          :value="avgSTR"
          size="180px"
          :thickness="0.22"
          color="primary"
          track-color="grey-3"
          class="q-ma-md q-mx-xl"
        >
          <div class="text-subtitle1">STORAGE: {{ avgSTR }}%</div>
        </q-circular-progress>

        <q-circular-progress
          show-value
          font-size="12px"
          :value="avgNET"
          size="180px"
          :thickness="0.22"
          color="primary"
          track-color="grey-3"
          class="q-ma-md q-mx-xl"
        >
          <div class="text-subtitle1">NET: {{ avgNET }}%</div>
        </q-circular-progress>

        <q-circular-progress
          show-value
          font-size="12px"
          :value="avgMEM"
          size="180px"
          :thickness="0.22"
          color="primary"
          track-color="grey-3"
          class="q-ma-md q-mx-xl"
        >
          <div class="text-subtitle1">MEM: {{ avgMEM }}%</div>
        </q-circular-progress>
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

      <div id="analysis-param-form" class="q-mx-auto q-my-md page-middle" style="display: none">
        <q-table
          title="Parameter"
          :data="paramData"
          :columns="paramColumns"
          row-key="colName"
          :pagination.sync="paramPagination"
          :hide-pagination="true"
          style="max-height: 1154px"
        >
          <template v-slot:top>
            <span class="text-h5">&nbsp;&nbsp;&nbsp;&nbsp;Parameters</span>
            <q-space />
          </template>
        </q-table>
      </div>
    </div>

    <div id="popup-window" style="z-index: 1; display: none; max-height: calc(100% - 200px); overflow: auto" class="bg-grey-3
 fixed-center">
      <q-btn flat round color="primary" icon="close" class="absolute-top-right" @click="closePopUp"/>
      <div id="chart-container" style="height: 450px; width: 750px;"></div>
      <div id="value-form" class="q-ma-md">
        <q-table
          :data="statisticData"
          :columns="statisticColumns"
          row-key="colName"
          :pagination.sync="statisticPagination"
          style="max-height: 1154px"
        >
        </q-table>
      </div>
    </div>

    <div id="detect-popup-window" style="z-index: 1; display: none" class="bg-grey-3 fixed-center">
      <q-btn flat round color="primary" icon="close" class="absolute-top-right" @click="closeDetectPopUp"/>
      <div id="chart-container" style="margin: 30px">
        <q-form
          @submit="onSubmitDetect"
          class="q-ma-lg q-py-lg"
        >

          <h6 style="margin: 0">App Name: </h6>
          <q-input
            filled
            v-model="appName"
            label="Desire app name *"
          /><br>
          <div id="detect-error-empty" class="text-caption" style="color: red; display: none">App name cannot be empty</div>
          <div id="detect-error-nonexist" class="text-caption" style="color: red; display: none">Does not support this app</div>
          <div id="detect-error" class="text-caption" style="color: red; display: none">Detect error</div>
          <div id="detect-result-form" style="display: none">
            <q-table
              :data="detectResData"
              :columns="detectResColumns"
              row-key="colName"
              :pagination.sync="detectResPagination"
              style="max-height: 1154px"
            >
          </q-table>
          </div>
          <div>
            <q-btn label="Submit" style="float:right; margin: 15px 0 20px 0" type="submit" color="primary" id="detect-btn"/>
          </div>
        </q-form>
      </div>
    </div>
  </q-page>
</template>

<script>
import AnalysisDetails from '../static/js/analysis-details.js'

export default {
  ...AnalysisDetails
}
</script>

<style>
@import '../css/analysis.css'
</style>

