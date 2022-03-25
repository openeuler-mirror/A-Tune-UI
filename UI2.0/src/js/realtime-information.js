import { defineComponent } from "vue";
import * as charts from './utils/charts.js';

export default defineComponent({
  name: "PageIndex",
  methods: {

  },
  mounted() {
    var echarts = require("echarts");
    var myChart1 = echarts.init(document.getElementById("main1"));
    var myChart2 = echarts.init(document.getElementById("main2"));
    var myChart3 = echarts.init(document.getElementById("main3"));
    var myChart4 = echarts.init(document.getElementById("main4"));

    charts.initLineChart(myChart1, "", "kb/s", ["test1"], "cpu");
    charts.appendLineChartData(myChart1, ["10:00", "10:10", "10:20", "10:30", "10:40", "10:50", "10:60"], ["test1"], [[25, 35, 22, 32, 50, 40, 20]]);

    charts.initBarChart(myChart2, "", "kb/s", ["Test1", "Test2"], "STORage");
    charts.appendBarChartData(myChart2, ["10:00", "10:10", "10:20", "10:30", "10:40", "10:50", "10:60"], ["Test1", "Test2"], [[40.0, 48.0, 37.0, 23.0, 25.6, 46.7, 35.6], [32.0, 40.0, 35.0, 26.4, 28.7, 30.7, 45.6]]);

    charts.initPieChart(myChart3, "2530", "总计(G)", "seriesName",  "PERF");
    charts.appendPieChart(myChart3, ["Test1", "Test2", "Test3", "Test4"], [1000, 900, 490, 140]);

    charts.initLineChart(myChart4, "", "kb/s", ["test1"], "net");
    charts.appendLineChartData(myChart4, ["10:00", "10:10", "10:20", "10:30", "10:40", "10:50", "10:60"], ["test1"], [[12, 16, 5, 15, 10, 20, 10]]);
  },
});
