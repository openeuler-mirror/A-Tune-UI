import { defineComponent } from "vue";
import * as charts from "./utils/charts.js";
import { updateTuningEvalData } from "./utils/charts.js";

export default defineComponent({
  data() {
    return {
      a: [],
      b: [],
      myChart1: null,
      myChart2: null,
      myChart3: null,
      myChart4: null,
      shift: false,
      timer: null,
      ind: 2,
      xValue: [],
      yNames: ["test1", "test2"],
      yValue: [],
      yValue1: [],
      yValue2: [],
      yValue3: []
    };
  },
  methods: {
    initialData() {
      for (let i = 0; i < this.yNames.length; i++) {
        this.xValue = [1, 2];
        this.yValue[i] = [];
        this.yValue1[i] = [];
        this.yValue2[i] = [];
        this.yValue3[i] = [];
        var randomValue = Math.floor(
          Math.random() * 10000 + Math.random() * 1000
        );
        this.yValue[i].push(randomValue);
        this.yValue1[i].push(randomValue);
        this.yValue1[i].push(randomValue);
        this.yValue2[i].push(randomValue);
        this.yValue3[i].push(randomValue);
        var randomValue = Math.floor(
          Math.random() * 10000 + Math.random() * 1000
        );
        this.yValue[i].push(randomValue);
        this.yValue1[i][1] = Math.max(
          this.yValue1[i][1],
          this.yValue[i][this.yValue[i].length - 1]
        );
        console.log(this.yValue1);
        this.yValue3[i].push(randomValue);
        this.yValue2[i].push(Math.max(this.yValue[i][0], this.yValue[i][1]));
      }
    },
    start() {
      this.timer = setInterval(() => {
        this.ind += 1;
        for (var i = 0; i < this.yNames.length; i++) {
          this.a[i] = Math.floor(Math.random() * 10000 + Math.random() * 1000);
          this.b[i] = Math.floor(Math.random() * 10000 + Math.random() * 1000);
        }
      }, 1000);
    },
    end() {
      clearInterval(this.timer);
      this.timer = null;
    }
  },
  created() {
    this.start();
    this.initialData();
  },
  mounted() {
    var echarts = require("echarts");
    this.myChart1 = echarts.init(document.getElementById("offline1"));
    this.myChart2 = echarts.init(document.getElementById("offline2"));
    this.myChart3 = echarts.init(document.getElementById("offline3"));
    this.myChart4 = echarts.init(document.getElementById("offline4"));
    // chart1
    charts.initBarChart(this.myChart1, "", "", [], "tuning");
    charts.appendBarChartData(
      this.myChart1,
      ["before", "after"],
      this.yNames,
      this.yValue1
    );
    charts.addOptions(this.myChart1, "grid", 0, { top: "30" });
    charts.addOptions(this.myChart1, "legend", 0, { top: "0" });

    // chart2
    charts.initLineChart(this.myChart2, "", "", [], "tuning");
    charts.addOptions(this.myChart2, "grid", 0, { top: "30" });
    charts.addOptions(this.myChart2, "legend", 0, { top: "0" });
    charts.appendLineChartData(
      this.myChart2,
      this.xValue,
      this.yNames,
      this.yValue2
    );

    // chart3
    charts.initLineChart(this.myChart3, "", "", [], "tuning");
    charts.addOptions(this.myChart3, "grid", 0, { top: "30" });
    charts.addOptions(this.myChart3, "legend", 0, { top: "0" });
    charts.appendLineChartData(
      this.myChart3,
      this.xValue,
      this.yNames,
      this.yValue3
    );

    // chart4
    charts.initLineChart(this.myChart4, "", "", [], "tuning");
    charts.addOptions(this.myChart4, "grid", 0, { top: "30" });
    charts.addOptions(this.myChart4, "legend", 0, { top: "0" });
    charts.appendLineChartData(
      this.myChart4,
      this.xValue,
      this.yNames,
      this.yValue
    );
  },
  watch: {
    ind: function(newVal, oldVal) {
      // if (this.ind >= 10) {
      //   this.shift = true;
      // }
      this.xValue.push(this.ind.toString());
      if (this.ind == 20) {
        this.end();
      }
    },
    a: {
      handler: function(newVal, oldVal) {
        if (this.a !== null) {
          for (var i = 0; i < this.yNames.length; i++) {
            this.yValue[i].push(this.a[i]);
            this.yValue2[i].push(
              Math.max(
                this.yValue2[i][this.yValue2[i].length - 1],
                this.yValue[i][this.yValue[i].length - 1]
              )
            );
            this.yValue1[i][1] = Math.max(
              this.yValue1[i][1],
              this.yValue[i][this.yValue[i].length - 1]
            );
          }
          charts.deleteChartData(this.myChart2, this.yNames);
          charts.deleteChartData(this.myChart4, this.yNames);
          charts.updateTuningEvalData(this.myChart1, this.yNames, this.yValue1);
          charts.appendLineChartData(
            this.myChart2,
            this.xValue,
            this.yNames,
            this.yValue2
          );
          charts.appendLineChartData(
            this.myChart4,
            this.xValue,
            this.yNames,
            this.yValue
          );
        }
      },
      deep: true
    },
    b: {
      handler: function(newVal, oldVal) {
        if (this.b !== null) {
          for (var i = 0; i < this.yNames.length; i++) {
            this.yValue3[i].push(this.b[i]);
          }
          charts.deleteChartData(this.myChart3, this.yNames);

          charts.appendLineChartData(
            this.myChart3,
            this.xValue,
            this.yNames,
            this.yValue3
          );
        }
      },
      deep: true
    }
  },
  beforeDestroy() {
    // js提供的clearInterval方法用来清除定时器
    clearInterval(this.timer);
  }
});
