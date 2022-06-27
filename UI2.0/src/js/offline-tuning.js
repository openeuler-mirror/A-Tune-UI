import { defineComponent } from "vue";
import * as charts from "./utils/charts.js";
import { getRandomInt } from "./utils/utils.js";

export default defineComponent({
  data() {
    return {
      a: [],
      b: [],
      myChart1: null,
      myChart2: null,
      myChart3: null,
      myChart4: null,
      timer: null,
      ind: 2,
      xValue: [],
      yNames: ["test1", "test2", "test3"],
      yValue: [],
      yValue1: [],
      yValue2: [],
      yValue3: []
    };
  },
  methods: {
    updateChart1Data() {
      charts.updateTuningEvalData(this.myChart1, this.yNames, this.yValue1);
    },
    updateChart2Data(newData) {
      charts.appendLineChartData(
        this.myChart2,
        [this.ind],
        this.yNames,
        newData
      );
    },
    updateChart3Data() {
      charts.appendLineChartData(
        this.myChart3,
        [this.ind],
        this.yNames,
        this.b
      );
    },
    updateChart4Data() {
      charts.appendLineChartData(
        this.myChart4,
        [this.ind],
        this.yNames,
        this.a
      );
    },
    initialData() {
      for (let i = 0; i < this.yNames.length; i++) {
        this.xValue = [1, 2];
        this.yValue[i] = [];
        this.yValue1[i] = [];
        this.yValue2[i] = [];
        this.yValue3[i] = [];
        var randomValue = getRandomInt(100, 1000);
        this.yValue[i].push(randomValue);
        this.yValue1[i].push(randomValue);
        this.yValue1[i].push(randomValue);
        this.yValue2[i].push(randomValue);
        this.yValue3[i].push(randomValue);
        var randomValue = getRandomInt(100, 1000);
        this.yValue[i].push(randomValue);
        this.yValue1[i][1] = Math.max(
          this.yValue1[i][1],
          this.yValue[i][this.yValue[i].length - 1]
        );
        this.yValue3[i].push(randomValue);
        this.yValue2[i].push(Math.max(this.yValue[i][0], this.yValue[i][1]));
      }
    },
    start() {
      this.timer = setInterval(() => {
        this.ind += 1;
        for (var i = 0; i < this.yNames.length; i++) {
          this.a[i] = getRandomInt(100, 1000);
          this.b[i] = getRandomInt(100, 1000);
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
      this.xValue.push(this.ind.toString());
      if (this.ind == 20) {
        this.end();
      }
    },
    a: {
      handler: function(newVal, oldVal) {
        let newData = [];
        if (this.a !== null) {
          for (var i = 0; i < this.yNames.length; i++) {
            newData[i] = [];
            this.yValue[i].push(this.a[i]);
            this.yValue2[i].push(
              Math.max(
                this.yValue2[i][this.yValue2[i].length - 1],
                this.yValue[i][this.yValue[i].length - 1]
              )
            );
            newData.push(this.yValue2[i][this.yValue2[i].length - 1]);
            newData[i][0] = this.yValue2[i][this.yValue2[i].length - 1];
            this.yValue1[i][1] = Math.max(
              this.yValue1[i][1],
              this.yValue[i][this.yValue[i].length - 1]
            );
          }
          this.updateChart1Data();
          this.updateChart2Data(newData);
          this.updateChart4Data();
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
          this.updateChart3Data();
        }
      },
      deep: true
    }
  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
});
