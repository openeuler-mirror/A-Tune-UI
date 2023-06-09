import {capitalize, defineComponent} from "vue";
import * as charts from './utils/charts.js';
import axios from "./utils/AxiosConfig";
import { getAvgFromArray } from "./utils/utils.js";

export default defineComponent({
  data() {
    return {
      analysisData: {
        workload: "",
        round: [],
        header: [],
        csvData: [],
        logData: [],
      },
      circleChartData: {
        cpu: 0.0,
        storage: 0.0,
        network: 0.0,
        memory: 0.0,
      },
      tableData: {
        Rows: [],
        Columns: [],
      },
      configuration: {
        lists: [],
        current: "",
      },
    }
  },
  methods: {
    getAnalysisData(csvLine, logLine) {
      axios('/v1/UI/analysis/getAnalysisData', {
        cid: this.$route.query.id,
        csvLine: csvLine,
        logLine, logLine,
      }, 'get').then(res => {
        if (typeof(res) === 'string') {
          res = JSON.parse(res);
        }
        if (!res.isExist) {
          this.$router.push({
            path: '/record',
          });
          return;
        }
        if (csvLine === 0) {
          this.analysisData.round = res.round;
          this.analysisData.header = res.table_header;
          this.analysisData.csvData = res.csv_data;
          this.analysisData.logData= res.log_data;
          this.initTableColumns();
          this.initConfiguration();
        } else {
          this.analysisData.round.push(...res.round);
          for (var i = 0; i < this.analysisData.header.length; i++) {
            this.analysisData.csvData[i].push(...res.csv_data[i]);
          }
          this.analysisData.logData.push(...res.log_data);
        }
        this.insertTableRows();
        if (res.workload !== undefined) {
          this.analysisData.workload = res.workload;
        }
        this.calCircleChartData();
        this.updateCircleChart();
        if (res.hasNext) {
          setTimeout(this.getAnalysisData, res.interval, res.nextCsv, res.nextLog);
        }
      })
    },
    calCircleChartData() {
      var cpuIndex = this.analysisData.header.findIndex(elem => elem === 'CPU.STAT.util');
      var storageIndex = this.analysisData.header.findIndex(elem => elem === 'STORAGE.STAT.util');
      var netIndex = this.analysisData.header.findIndex(elem => elem === 'NET.STAT.ifutil');
      var memIndex = this.analysisData.header.findIndex(elem => elem === 'MEM.BANDWIDTH.Total_Util');
      this.circleChartData.cpu = parseFloat(getAvgFromArray(this.analysisData.csvData[cpuIndex]).toFixed(2));
      this.circleChartData.storage = parseFloat(getAvgFromArray(this.analysisData.csvData[storageIndex]).toFixed(2));
      this.circleChartData.network = parseFloat(getAvgFromArray(this.analysisData.csvData[netIndex]).toFixed(2));
      this.circleChartData.storage = parseFloat(getAvgFromArray(this.analysisData.csvData[memIndex]).toFixed(2));
    },
    updateCircleChart() {
      var echarts = require("echarts");
      for (var i = 1; i < 5; i++) {
        var chartName = "percentage" + i;
        var chartInstance = echarts.getInstanceByDom(document.getElementById(chartName));
        if (chartInstance != "" && chartInstance != null && chartInstance != undefined) {
          chartInstance.dispose();
        }
      }
      var circleChart1 = echarts.init(document.getElementById("percentage1"));
      var circleChart2 = echarts.init(document.getElementById("percentage2"));
      var circleChart3 = echarts.init(document.getElementById("percentage3"));
      var circleChart4 = echarts.init(document.getElementById("percentage4"));
      charts.initCircleChart(circleChart1, this.circleChartData.cpu, "cpu");
      charts.initCircleChart(circleChart2, this.circleChartData.storage, "storage");
      charts.initCircleChart(circleChart3, this.circleChartData.network, "network");
      charts.initCircleChart(circleChart4, this.circleChartData.memory, "memory");
    },
    updateLineChart() {
      var echarts = require("echarts");
      for (var i = 1; i < this.analysisData.header.length; i++) {
        var chartName = "online" + i;
        var chartInstance = echarts.getInstanceByDom(document.getElementById(chartName));
        if (chartInstance != "" && chartInstance != null && chartInstance != undefined) {
          chartInstance.dispose();
        }
        var chart = echarts.init(document.getElementById(chartName));
        charts.initLineChart(chart, "", "", ["test1"], this.analysisData.header[i]);
        charts.appendLineChartData(chart, this.analysisData.round, ["test1"], [this.analysisData.csvData[i]]);
        charts.addOptions(chart, "grid", 0, {"top": 18});
        charts.addOptions(chart, "legend", 0, {"top": "0"});
      }
    },
    initConfiguration() {
      for (var i = 1; i < this.analysisData.header.length; i++) {
        var category = this.analysisData.header[i].split(".")[0];
        var index = this.configuration.lists.indexOf(category)
        if (index === -1) {
          this.configuration.lists.push(category)
        }
      }
      console.log(this.configuration.lists)
    },
    initTableColumns() {
      this.tableData.Columns.push({
        name: 'round',
        require: true,
        label: 'ROUND',
        align: 'left',
        sortable: true,
        field: row => row.name,
      })
      for (var i = 0; i < this.analysisData.header.length; i++) {
        this.tableData.Columns.push({
          name: this.analysisData.header[i].toLowerCase(),
          require: true,
          label: this.analysisData.header[i].toUpperCase(),
          align: 'center',
          field: this.analysisData.header[i].toLowerCase(),
        })
      }
    },
    insertTableRows() {
      for (var i = this.tableData.Rows.length + 1; i <= this.analysisData.round.length; i++) {
        var obj = new Object();
        obj["name"] = i;
        for (var j = 0; j < this.analysisData.header.length;j++) {
          obj[this.analysisData.header[j].toLowerCase()] = this.analysisData.csvData[j][i-1];
        }
        this.tableData.Rows.push(obj);
      }
    },
  },
  watch: {
    "analysisData.round": {
      deep: true,
      handler:function(newVal) {
        this.$nextTick(()=>{
          this.updateLineChart();
        })
      } 
    }
  },
  mounted() {
    this.getAnalysisData(0, 0);
  },
});
