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
  },
});
