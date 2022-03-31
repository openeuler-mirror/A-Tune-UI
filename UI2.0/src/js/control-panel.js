import { defineComponent } from "vue";
import * as charts from './utils/charts.js';

export default defineComponent({
  name: "PageIndex",
  methods: {
    popWin() {
      document.getElementById("light").style.display = "block";
      document.getElementById("fade").style.display = "block";
    },
    closeWin() {
      document.getElementById("light").style.display = "none";
      document.getElementById("fade").style.display = "none";
    },
    showRealtime() {
      document.getElementById("realtime").style.display = "block";
      document.getElementById("history").style.display = "none";
    },
    showHistory() {
      document.getElementById("realtime").style.display = "none";
      document.getElementById("history").style.display = "block";
    },
    addCardColumn() {
      if (document.getElementById("cards-column-1").style.display === "block") {
        document.getElementById("cards-column-2").style.display = "block";
        document.getElementById("add-card-column").style.display = "none";
      } else {
        document.getElementById("cards-column-1").style.display = "block";
      }
    },
    onCommandClick() {
      this.$router.push({
        path: "/command",
      });
    }
  },
  mounted() {
    var echarts = require("echarts");
    var myChart1 = echarts.init(document.getElementById("main1"));
    var myChart2 = echarts.init(document.getElementById("main2"));
    var myChart3 = echarts.init(document.getElementById("main3"));

    charts.initLineChart(myChart1, "", "-", ["test1", "test2"], "cpu");
    charts.appendLineChartData(myChart1, [6, 7, 8, 9, 10, 11], ["test1", "test2", "test3"], [[10, 11, 12, 13], [1, 2, 3, 4], [5, 4, 6, 7, 1, 3]]);
    charts.deleteChartData(myChart1, ["test1"]);

    charts.initBarChart(myChart2, "", "", ["test1", "test2"], "STORage");
    charts.appendBarChartData(myChart2, [6, 7, 8, 9, 10 ,11], ["test1", "test2", "test3"], [[10, 11, 12, 13, 7, 5], [1, 2, 3, 4], [5, 4, 6, 7]]);
    charts.deleteChartData(myChart2, ["test3"]);

    charts.initPieChart(myChart3, "text", "subtext", "seriesName",  "PERF");
    charts.appendPieChart(myChart3, ["test1", "test2", "Test1"], [500, 100, 100]);
    charts.deletePieChart(myChart3, ["test1", "Test2"]);
  },
});
