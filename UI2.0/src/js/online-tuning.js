import {capitalize, defineComponent} from "vue";
import * as charts from "./utils/charts.js";
import axios from "./utils/AxiosConfig";
import { getAvgFromArray } from "./utils/utils.js";

export default defineComponent({
  data() {
    return {
      analysisData: {
        workload: [],
        name: [],
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
      tableLog: {
        Rows: [],
        Columns: [],
      },
      configuration: {
        lists: ["全部"],
        current: "全部",
      },
      commands: {
        recordList: [],
        curPage: 1,
        recordNum: 0,
        selected: 0,
      }
    }
  },
  methods: {
    getAnalysisData(csvLine, logLine) {
      axios('/v1/UI/analysis/getAnalysisData', {
        cid: this.$route.query.id,
        csvLine: csvLine,
        logLine: logLine,
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
          this.analysisData.csvData[0] = res.csv_data;
          this.analysisData.logData = res.log_data;
          if (res.workload !== undefined) {
            this.analysisData.workload[0] = res.workload;
          }
          if (res.name !== undefined) {
            this.analysisData.name[0] = res.name;
          }
          this.initTableColumns();
          this.initConfiguration();
        } else {
          this.analysisData.round.push(...res.round);
          for (var i = 0; i < this.analysisData.header.length; i++) {
            this.analysisData.csvData[0][i].push(...res.csv_data[i]);
          }
          this.analysisData.logData.push(...res.log_data);
        }
        this.insertTableRows();
        
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
      this.circleChartData.cpu = parseFloat(getAvgFromArray(this.analysisData.csvData[0][cpuIndex]).toFixed(2));
      this.circleChartData.storage = parseFloat(getAvgFromArray(this.analysisData.csvData[0][storageIndex]).toFixed(2));
      this.circleChartData.network = parseFloat(getAvgFromArray(this.analysisData.csvData[0][netIndex]).toFixed(2));
      this.circleChartData.storage = parseFloat(getAvgFromArray(this.analysisData.csvData[0][memIndex]).toFixed(2));
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
        var data = []
        for (var j = 0; j <= this.commands.selected; j++) {
          data[j] = this.analysisData.csvData[j][i]; 
        }
        charts.initLineChart(chart, "", "", [], this.analysisData.header[i]);
        charts.appendLineChartData(chart, this.analysisData.round, this.analysisData.name, data);
        charts.addOptions(chart, "grid", 0, {"top": 18});
        charts.addOptions(chart, "legend", 0, {"top": "0"});
      }

    },
    initConfiguration() {
      for (var i = 1; i < this.analysisData.header.length; i++) {
        var category = this.analysisData.header[i].split(".")[0];
        var index = this.configuration.lists.indexOf(category);
        if (index === -1) {
          this.configuration.lists.push(category);
        }
      }
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
      this.tableLog.Columns.push({
        name: 'round',
        require: true,
        label: 'ROUND',
        align: 'left',
        sortable: true,
        field: row => row.name,
      })
      var logKeys = Object.keys(this.analysisData.logData[0])
      for (var i=0; i < logKeys.length; i++) {
        this.tableLog.Columns.push({
          name: logKeys[i].toLowerCase(),
          require: true,
          label: logKeys[i].toUpperCase(),
          align: 'center',
          field: logKeys[i].toLowerCase(),
        })
      }
    },
    insertTableRows() {
      for (var i = this.tableData.Rows.length + 1; i <= this.analysisData.round.length; i++) {
        var obj = new Object();
        obj["name"] = i;
        for (var j = 0; j < this.analysisData.header.length; j++) {
          obj[this.analysisData.header[j].toLowerCase()] = this.analysisData.csvData[0][j][i-1];
        }
        this.tableData.Rows.push(obj);
      }
      var logKeys = Object.keys(this.analysisData.logData[0])
      for (var i = this.tableLog.Rows.length + 1; i <= this.analysisData.logData.length; i++) {
        var obj = new Object();
        obj["name"] = i;
        for (var j = 0; j < logKeys.length; j++) {
          obj[logKeys[j].toLowerCase()] = this.analysisData.logData[i-1][logKeys[j]];
        }
        this.tableLog.Rows.push(obj);
      }
    },
    getRecordNum() {
      axios('/v1/UI/analysis/initialPage', {
        uid: this.$store.state.User.userInfo.userId,
      }, 'get').then(res => {
        res = JSON.parse(res);
        this.commands.recordNum = res.count;
      })
    },
    getRecordList() {
      axios('/v1/UI/analysis/getList', {
        uid: this.$store.state.User.userInfo.userId,
        pageNum: this.commands.curPage,
        pageSize: 10,
      }, 'get').then(res => {
        res = JSON.parse(res);
        this.commands.recordList = res.data;
      })
    },
    async getSelectedCommandData(cid, csvLine) {
      var hasNext = false;
      var nextCsv = 0;
      await axios('/v1/UI/analysis/getAnalysisData', {
        cid: cid,
        csvLine: csvLine,
        logLine: Number.MAX_SAFE_INTEGER,
      }, 'get').then(res => {
        res = JSON.parse(res);
        if (!res.isExist) {
          return;
        }
        if (csvLine === 0) {
          this.analysisData.csvData[this.commands.selected] = res.csv_data;
          this.analysisData.name[this.commands.selected] = res.name;
        } else {
          for (var i = 0; i < this.analysisData.header.length; i++) {
            this.analysisData.csvData[this.commands.selected][i].push(...res.csv_data[i]);
          }
        }
        hasNext = res.hasNext;
        nextCsv = res.nextCsv;
      })
      if (hasNext && this.analysisData.csvData[0][0].length > 
        this.analysisData.csvData[this.commands.selected][0].length) {
        await this.getSelectedCommandData(cid, nextCsv);   
      }
      this.updateLineChart();
    },
    selectCommand(event) {
      if (event.target.value === 'next') {
        this.commands.curPage += 1;
        this.getRecordList();
      } else if (event.target.value === 'prev') {
        this.commands.curPage -= 1;
        this.getRecordList();
      } else {
        if (this.commands.selected >= 2) {
          return;
        } else {
          this.commands.selected += 1;
          this.getSelectedCommandData(parseInt(event.target.value), 0);
        }
      }
    },
    IsShowCommandItem(name) {
      return !this.analysisData.name.includes(name) && this.commands.selected < 2;
    }
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
    this.getRecordNum();
    this.getRecordList();
  },
});
