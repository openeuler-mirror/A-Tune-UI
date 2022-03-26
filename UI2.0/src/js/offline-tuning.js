import {defineComponent} from "vue";
import * as charts from './utils/charts.js';
import {updateTuningEvalData} from "./utils/charts.js";

export default defineComponent({
  methods: {},
  mounted() {
    var echarts = require("echarts");
    var myChart1 = echarts.init(document.getElementById("offline1"));
    var myChart2 = echarts.init(document.getElementById("offline2"));
    var myChart3 = echarts.init(document.getElementById("offline3"));
    var myChart4 = echarts.init(document.getElementById("offline4"));

    let xValue = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13',
      '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27',
      '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40'];
    let yValue = [[
      60000, 62000, 60000, 70000, 68000, 72000, 61000, 60000, 66000, 58000,
      60000, 58000, 70000, 64000, 70000, 73000, 74000, 68000, 75000, 74000,
      120000, 75000, 74500, 68000, 110000, 75000, 68000, 59000, 83000, 88000,
      75000, 60000, 80000, 80000, 60000, 58000, 110000, 80000, 120000, 65000,
    ], [
      50000, 40000, 75000, 50000, 52000, 70000, 40000, 45000, 40000, 51000,
      35000, 60000, 43000, 60000, 66000, 58000, 60000, 58000, 70000, 38000,
      37000, 43000, 60000, 66000, 58000, 60000, 58000, 70000, 42000, 43000,
      53000, 45000, 43000, 54000, 47000, 45000, 58000, 55000, 38000, 40000
    ]];
    charts.initBarChart(myChart1, "", "", [], "tuning");
    charts.appendBarChartData(myChart1, ["before", "after"], ["test1"], [[0,5]]);
    charts.updateTuningEvalData(myChart1, ["test1", "test2", "test3"], [[10], [1,7], [4]]);
    charts.addOptions(myChart1, "grid", 0,{"top": "30"});
    charts.addOptions(myChart1, "legend", 0,{"top": "0"});

    charts.initLineChart(myChart2, "", "", ["test1", "test2"], "tuning");
    charts.appendLineChartData(myChart2, xValue, ["test1", "test2"], yValue);
    charts.addOptions(myChart2, "grid", 0,{"top": "30"});
    charts.addOptions(myChart2, "legend", 0,{"top": "0"});

    charts.initLineChart(myChart3, "", "", ["test1", "test2"], "tuning");
    charts.appendLineChartData(myChart3, xValue, ["test1", "test2"], yValue);
    charts.addOptions(myChart3, "grid", 0,{"top": "30"});
    charts.addOptions(myChart3, "legend", 0,{"top": "0"});

    charts.initLineChart(myChart4, "", "", ["test1", "test2"], "tuning");
    charts.appendLineChartData(myChart4, xValue, ["test1", "test2"], yValue);
    charts.addOptions(myChart4, "grid", 0,{"top": "30"});
    charts.addOptions(myChart4, "legend", 0,{"top": "0"});
  },
});
