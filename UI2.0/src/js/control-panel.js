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
      historyFunc: ref(undefined),
      historyFuncOptions: ['Option1', 'Option2'],
      historyName: ref(undefined),
      historyNameOptions: ['Option1', 'Option2'],
      historyChart: ref(undefined),
      historyChartOptions: ['Option1', 'Option2'],
      // pop up -- realtime
      realtimeCategorize: ref(undefined),
      realtimeCategorizeOptions: ['Option1', 'Option2'],
      realtimeParams: ref(undefined),
      realtimeParamsOptions: ['Option1', 'Option2'],
      realtimeInterval: ref(undefined),
      realtimeIntervalOptions: ['Option1', 'Option2'],
      realtimePeriod: ref(undefined),
      realtimePeriodOptions: ['Option1', 'Option2'],
      realtimeChart: ref(undefined),
      realtimeChartOptions: ['Option1', 'Option2'],
    };
  },
  methods: {
    resetHistoryOptions() {
      this.historyFunc = undefined;
      this.historyName = undefined;
      this.historyChart = undefined;
    },
    resetRealtimeOptions() {
      this.realtimeCategorize = undefined;
      this.realtimeParams = undefined;
      this.realtimeInterval = undefined;
      this.realtimePeriod = undefined;
      this.realtimeChart = undefined;
    },
    openPopUp(chartDivId) {
      this.ctrlChartId = chartDivId;
      document.getElementById('light').style.display = 'block';
      document.getElementById('fade').style.display = 'block';
    },
    closePopUp() {
      this.ctrlChartId = undefined;
      this.resetHistoryOptions();
      this.resetRealtimeOptions();
      document.getElementById('light').style.display = 'none';
      document.getElementById('fade').style.display = 'none';
    },
    showRealtimeOptions() {
      document.getElementById('realtime').style.display = 'block';
      document.getElementById('history').style.display = 'none';
    },
    showHistoryOptions() {
      document.getElementById('realtime').style.display = 'none';
      document.getElementById('history').style.display = 'block';
    },
    confirmPopUp() {
      console.log('click confirm:', this.ctrlChartId);
      let isRealTime = document.getElementById('realtime').style.display === 'block';

    },
    deleteChart(chartDivId) {
      let div = document.getElementById(chartDivId);
    },
    addCardColumn() {
      if (document.getElementById('cards-column-2').style.display === 'block') {
        document.getElementById('cards-column-3').style.display = 'block';
        document.getElementById('add-card-column').style.display = 'none';
      } else {
        document.getElementById('cards-column-2').style.display = 'block';
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


    var echarts = require('echarts');
    var myChart1 = echarts.init(document.getElementById('main1'));
    var myChart2 = echarts.init(document.getElementById('main2'));
    var myChart3 = echarts.init(document.getElementById('main3'));

    charts.initLineChart(myChart1, '', '-', ['test1', 'test2'], 'cpu');
    charts.appendLineChartData(myChart1, [6, 7, 8, 9, 10, 11], ['test1', 'test2', 'test3'], [[10, 11, 12, 13], [1, 2, 3, 4], [5, 4, 6, 7, 1, 3]]);
    charts.deleteChartData(myChart1, ['test1']);

    charts.initBarChart(myChart2, '', '', ['test1', 'test2'], 'STORage');
    charts.appendBarChartData(myChart2, [6, 7, 8, 9, 10, 11], ['test1', 'test2', 'test3'], [[10, 11, 12, 13, 7, 5], [1, 2, 3, 4], [5, 4, 6, 7]]);
    charts.deleteChartData(myChart2, ['test3']);

    charts.initPieChart(myChart3, 'text', 'subtext', 'seriesName',  'PERF');
    charts.appendPieChart(myChart3, ['test1', 'test2', 'Test1'], [500, 100, 100]);
    charts.deletePieChart(myChart3, ['test1', 'Test2']);
  },
});
