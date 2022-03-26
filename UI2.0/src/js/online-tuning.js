import {defineComponent} from "vue";
import * as charts from './utils/charts.js';

export default defineComponent({
  methods: {},
  mounted() {
    var echarts = require("echarts");
    var circleChart1 = echarts.init(document.getElementById("percentage1"));
    var circleChart2 = echarts.init(document.getElementById("percentage2"));
    var circleChart3 = echarts.init(document.getElementById("percentage3"));
    var circleChart4 = echarts.init(document.getElementById("percentage4"));
    var myChart1 = echarts.init(document.getElementById("online1"));
    var myChart2 = echarts.init(document.getElementById("online2"));
    var myChart3 = echarts.init(document.getElementById("online3"));
    var myChart4 = echarts.init(document.getElementById("online4"));
    var myChart5 = echarts.init(document.getElementById("online5"));
    var myChart6 = echarts.init(document.getElementById("online6"));

    let xValue = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13',
      '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27',
      '28', '29', '30'];
    let yValue = [[6, 2, 6, 7, 8, 7, 1, 6, 7, 5, 6, 2, 3, 7, 8, 9, 1, 6, 7, 5,
      6, 2, 9, 7, 8, 6, 1, 6, 7, 5, 6, 2, 3, 7, 8, 9, 1, 6, 7, 5,
      6, 2, 6, 7, 8, 7, 1, 6, 5, 5, 6, 2, 3, 7, 3, 9, 1, 6, 7, 5,]];
    charts.initCircleChart(circleChart1, 12.34, "cpu");
    charts.initCircleChart(circleChart2, 9.32, "storage");
    charts.initCircleChart(circleChart3, 20, "network");
    charts.initCircleChart(circleChart4, 10, "memory");

    charts.initLineChart(myChart1, "", "", ["test1"], "cpu");
    charts.appendLineChartData(myChart1, xValue, ["test1"], yValue);
    charts.addOptions(myChart1, "grid", 0, {"top": 18});
    charts.addOptions(myChart1, "legend", 0, {"top": "0"});

    charts.initLineChart(myChart2, "", "", ["test1"], "storage");
    charts.appendLineChartData(myChart2, xValue, ["test1"], yValue);
    charts.addOptions(myChart2, "grid", 0, {"top": 18});
    charts.addOptions(myChart2, "legend", 0, {"top": "0"});

    charts.initLineChart(myChart3, "", "", ["test1"], "network");
    charts.appendLineChartData(myChart3, xValue, ["test1"], yValue);
    charts.addOptions(myChart3, "grid", 0, {"top": 18});
    charts.addOptions(myChart3, "legend", 0, {"top": "0"});

    charts.initLineChart(myChart4, "", "", ["test1"], "memory");
    charts.appendLineChartData(myChart4, xValue, ["test1"], yValue);
    charts.addOptions(myChart4, "grid", 0, {"top": 18});
    charts.addOptions(myChart4, "legend", 0, {"top": "0"});

    charts.initLineChart(myChart5, "", "", ["test1"], "perf");
    charts.appendLineChartData(myChart5, xValue, ["test1"], yValue);
    charts.addOptions(myChart5, "grid", 0, {"top": 18});
    charts.addOptions(myChart5, "legend", 0, {"top": "0"});

    charts.initLineChart(myChart6, "", "", ["test1"], "system");
    charts.appendLineChartData(myChart6, xValue, ["test1"], yValue);
    charts.addOptions(myChart6, "grid", 0, {"top": 18});
    charts.addOptions(myChart6, "legend", 0, {"top": "0"});
  },
});
