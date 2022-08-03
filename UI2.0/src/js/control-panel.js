import { ref, defineComponent } from 'vue';
import * as charts from './utils/charts.js';

export default defineComponent({
  name: 'PageIndex',
  setup() {
    return {
    };
  },
  data() {
    return {
      // column info
      userName: '',
      ipNum: 0,
      analysisNum: 0,
      tuningNum: 0,
      taskTableLines: 0,
      taskTableData: [],
      rateTableName: ['NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA'],
      rateTableData: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      // cards column
      ctrlChartId: undefined,
      // pop up -- history
      historyGraph: {
        'func': [],
        'name': [],
        'chart': [],
      },
      historyFunc: undefined,
      historyName: undefined,
      historyChart: undefined,
      // pop up -- realtime
      realtimeGraph: {
        'categorize': [],
        'params': [],
        'interval': [],
        'period': [],
        'chart': [],
      },
      realtimeCategorize: undefined,
      realtimeParams: undefined,
      realtimeInterval: undefined,
      realtimePeriod: undefined,
      realtimeChart: undefined,
    };
  },
  methods: {
    resetValidation() {
      this.$refs.historyFunc.resetValidation();
      this.$refs.historyName.resetValidation();
      this.$refs.historyChart.resetValidation();
      this.$refs.realtimeCategorize.resetValidation();
      this.$refs.realtimeParams.resetValidation();
      this.$refs.realtimeInterval.resetValidation();
      this.$refs.realtimePeriod.resetValidation();
      this.$refs.realtimeChart.resetValidation();
    },
    resetHistoryOptions() {
      this.historyFunc = undefined;
      this.historyName = undefined;
      this.historyChart = undefined;
      this.historyGraph.func = [];
      this.historyGraph.name = [];
      this.historyGraph.chart = [];
    },
    resetRealtimeOptions() {
      this.realtimeCategorize = undefined;
      this.realtimeParams = undefined;
      this.realtimeInterval = undefined;
      this.realtimePeriod = undefined;
      this.realtimeChart = undefined;
      this.realtimeGraph.categorize = [];
      this.realtimeGraph.params = [];
      this.realtimeGraph.interval = [];
      this.realtimeGraph.period = [];
      this.realtimeGraph.chart = [];
    },
    openPopUp(chartDivId) {
      this.ctrlChartId = chartDivId;
      /* add options to select */
      this.historyGraph.func.push('func1', 'func2');
      this.historyGraph.name.push('name1', 'name2');
      this.historyGraph.chart.push('chart1', 'chart2');
      this.realtimeGraph.categorize.push('categorize1', 'categorize2');
      this.realtimeGraph.params.push('params1', 'params2');
      this.realtimeGraph.interval.push('interval1', 'interval2');
      this.realtimeGraph.period.push('period1', 'period2');
      this.realtimeGraph.chart.push('chart1', 'chart2');
      /* display pop up */
      document.getElementById('light').style.display = 'block';
      document.getElementById('fade').style.display = 'block';
    },
    showRealtimeOptions() {
      document.getElementById('realtime').style.display = 'block';
      document.getElementById('history').style.display = 'none';
      this.resetHistoryOptions();
    },
    checkRealtimeValidate() {
      let res1 = this.$refs.realtimeCategorize.validate();
      let res2 = this.$refs.realtimeParams.validate();
      let res3 = this.$refs.realtimeInterval.validate();
      let res4 = this.$refs.realtimePeriod.validate();
      let res5 = this.$refs.realtimeChart.validate();
      return res1 && res2 && res3 && res4 && res5;
    },
    showHistoryOptions() {
      document.getElementById('realtime').style.display = 'none';
      document.getElementById('history').style.display = 'block';
      this.resetRealtimeOptions();
    },
    checkHistoryValidate() {
      let res1 = this.$refs.historyFunc.validate();
      let res2 = this.$refs.historyName.validate();
      let res3 = this.$refs.historyChart.validate();
      return res1 && res2 && res3;
    },
    closePopUp() {
      this.ctrlChartId = undefined;
      document.getElementById('light').style.display = 'none';
      document.getElementById('fade').style.display = 'none';
      this.resetHistoryOptions();
      this.resetRealtimeOptions();
      this.resetValidation();
    },
    confirmPopUp() {
      let currentDiv = this.ctrlChartId;
      let isRealTime = document.getElementById('realtime').style.display === 'block';
      let val = {};
      if (isRealTime && this.checkRealtimeValidate()) {
        val['display'] = 'realtime';
        val['categorize'] = this.realtimeCategorize;
        val['params'] = this.realtimeParams;
        val['interval'] = this.realtimeInterval;
        val['period'] = this.realtimePeriod;
        val['chart'] = this.realtimeChart;
        this.closePopUp();
      } else if (!isRealTime && this.checkHistoryValidate()) {
        val['display'] = 'history';
        val['func'] = this.historyFunc;
        val['name'] = this.historyName;
        val['chart'] = this.historyChart;
        this.closePopUp();
      } else {
        return;
      }

      document.getElementById(currentDiv).innerHTML = '';
      let appendDiv = getChartDiv(currentDiv, 'title', 'circle-chart');
      document.getElementById(currentDiv).appendChild(appendDiv.titleDiv);
      document.getElementById(currentDiv).appendChild(appendDiv.chartDiv);

      let echarts = require('echarts');
      let myChart = echarts.init(document.getElementById(appendDiv.chartDiv.id));

      charts.initPieChart(myChart, 'text', 'subtext', 'seriesName',  'PERF');
      charts.appendPieChart(myChart, ['test1', 'test2', 'Test1'], [500, 100, 100]);
      charts.deletePieChart(myChart, ['test1', 'Test2']);
    },
    deleteChart(currentDiv) {
      document.getElementById(currentDiv).innerHTML = '';
      let newDiv = getRenewDiv(currentDiv);
      document.getElementById(currentDiv).appendChild(newDiv);
    },
    addCardColumn() {
      if (document.getElementById('cards-column-2').style.display === 'block') {
        document.getElementById('cards-column-3').style.display = 'block';
        document.getElementById('add-card-column').style.display = 'none';
      } else {
        document.getElementById('cards-column-2').style.display = 'block';
        document.getElementById('delete-card-column').style.display = 'flex';
      }
    },
    deleteCardColumn() {
      if (document.getElementById('cards-column-3').style.display === 'block') {
        document.getElementById('cards-column-3').style.display = 'none';
        document.getElementById('add-card-column').style.display = 'flex';
      } else {
        document.getElementById('cards-column-2').style.display = 'none';
        document.getElementById('delete-card-column').style.display = 'none';
      }
    },
    onCommandClick() {
      this.$router.push({
        path: '/command',
      });
    }
  },
  mounted() {
    this.userName = 'USERS';
    this.ipNum = 5;
    this.analysisNum = 10;
    this.tuningNum = 20;
    window.deleteChartWin = this.deleteChart;
    window.openPopUpWin = this.openPopUp;
  },
});

function getChartDiv(currentDiv, title, chartType) {
  let titleVal = document.createElement('div');
  titleVal.classList.add('text-title');
  titleVal.style.marginBottom = '0';
  titleVal.append(title);
  let delDiv = document.createElement('div');
  delDiv.classList.add('delete-pic');
  delDiv.style.zIndex = '100';
  delDiv.onclick = function () {
    deleteChartWin(currentDiv);
  };
  let titleDiv = document.createElement('div');
  titleDiv.classList.add('row');
  titleDiv.classList.add('space-btw');
  titleDiv.appendChild(titleVal);
  titleDiv.appendChild(delDiv);

  let chartDiv = document.createElement('div');
  chartDiv.id = 'chart-' + currentDiv;
  chartDiv.classList.add('col');
  chartDiv.classList.add(chartType);
  return {'titleDiv': titleDiv, 'chartDiv': chartDiv};
}

function getRenewDiv(currentDiv) {
  let childDiv = document.createElement('div');
  let iconDiv = document.createElement('div');
  iconDiv.classList.add('add-chart-icon');
  iconDiv.onclick = function () {
    openPopUpWin(currentDiv);
  }

  let addBtn = document.createElement('button');
  addBtn.classList.add('bg-white');
  addBtn.classList.add('add-chart-btn');
  addBtn.onclick = function () {
    openPopUpWin(currentDiv);
  }

  addBtn.append('新增图表');
  childDiv.appendChild(iconDiv);
  childDiv.appendChild(addBtn);
  return childDiv;
}
