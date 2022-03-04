import { defineComponent } from "vue";

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
    // 指定图表的配置项和数据
    var option1 = {
      grid: {
        left: "30",
        right: "30",
        bottom: "30",
        top: "22%",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        data: ["10:00", "10:10", "10:20", "10:30", "10:40", "10:50", "10:60"],
        axisLine: {
          lineStyle: {
            color: "#999999",
          },
        },
      },
      yAxis: {
        name: "kb/s",
        nameLocation: "end",
        nameTextStyle: {
          color: "#999999",
          padding: [0, 0, 0, -21],
        },
        nameGap: 15, //"kb/s"与坐标轴的距离
        type: "value",
        max: 60,
        min: 0,
        minInterval: 15,
        interval: 15, //每次增加几个
        axisLine: {
          lineStyle: {
            color: "#999999",
          },
        },
      },
      series: [
        {
          data: [25, 35, 22, 32, 50, 40, 20],
          type: "line",
          symbol: "none", //拐点样式
          // symbolSize: 8,//拐点大小
          itemStyle: {
            normal: {
              lineStyle: {
                // width:3,//折线宽度
                color: "#559ff8", //折线颜色
              },
            },
          },
        },
      ],
    };
    var option2 = {
      color: ["#5ce59d", "#559ff8"],
      grid: {
        left: "30",
        right: "30",
        bottom: "30",
        // top: "30%",
        containLabel: true,
      },
      tooltip: {
        trigger: "axis",
      },
      legend: {
        itemWidth: 10,
        itemHeight: 10,
        itemGap: 10,
        data: [
          { name: "Test1", icon: "circle" },
          { name: "Test2", icon: "circle" },
        ],
        right: "32",
        top: "25",
        textStyle: {
          fontSize: 14,
          color: "#999999",
        },
      },
      toolbox: {
        show: false,
        feature: {
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ["line", "bar"] },
          restore: { show: true },
          saveAsImage: { show: true },
        },
      },
      calculable: true,
      xAxis: [
        {
          type: "category",
          data: ["10:00", "10:10", "10:20", "10:30", "10:40", "10:50", "10:60"],
          axisLine: {
            lineStyle: {
              color: "#999999",
            },
          },
        },
      ],
      yAxis: [
        {
          name: "kb/s",
          nameLocation: "end",
          nameTextStyle: {
            color: "#999999",
            padding: [0, 0, 0, -21],
          },
          nameGap: 15,
          type: "value",
          max: 60,
          min: 0,
          minInterval: 15,
          interval: 15, //每次增加几个
          axisLine: {
            lineStyle: {
              color: "#999999",
            },
          },
        },
      ],
      series: [
        {
          name: "Test1",
          type: "bar",
          data: [40.0, 48.0, 37.0, 23.0, 25.6, 46.7, 35.6],
          barWidth: 10, // 柱图宽度
          barGap: "50%",// 多个并排柱子设置柱子之间的间距
          itemStyle: {
            normal: {
              barBorderRadius: [10, 10, 10, 10], //柱形图圆角，初始化效果
            },
          },
        },
        {
          name: "Test2",
          type: "bar",
          data: [32.0, 40.0, 35.0, 26.4, 28.7, 30.7, 45.6],
          barWidth: 10,
          barGap: "50%",
          itemStyle: {
            normal: {
              barBorderRadius: [10, 10, 10, 10],
            },
          },
        },
      ],
    };
    var option3 = {
      title: [
        {
          text: "2530",
          subtext: "总计(G)",
          x: "center",
          y: "center",
          top: "35%",
          itemGap: 8,
          textStyle: {
            fontSize: 30,
            color: "#222222",
            align: "center",
          },
          subtextStyle: {
            fontFamily: "微软雅黑",
            fontSize: 14,
            color: "#222222",
          },
        },
      ],
      color: ["#6766ff", "#559ff8", "#5ce59d", "#f8a758"],
      tooltip: {
        trigger: "item",
      },
      legend: {
        left: "center",
        bottom: "30",
        itemWidth: 10,
        itemHeight: 10,
        itemGap: 20,
        icon: "circle",
        textStyle: {
          fontSize: 14,
          color: "#999999",
        },
      },
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: ["40%", "45%"],
          center: ["50%", "45%"],
          itemStyle: {
            borderColor: "#ffffff",
            borderWidth: 2,
            borderType: "solid",
          },

          avoidLabelOverlap: false,
          label: {
            show: true,
            position: "outside",
            formatter: " {@name}({d}%) ",
            fontSize: 14,
            color: "#222222",
          },
          labelLine: {
            show: false, //数据显示地方的引线
            length: 1,
            length2: 3,
          },
          data: [
            { value: 1000, name: "Test1" },
            { value: 900, name: "Test2" },
            { value: 490, name: "Test3" },
            { value: 140, name: "Test4" },
          ],
        },
      ],
    };
    var option4 = {
      grid: {
        left: "32",
        right: "32",
        bottom: "32",
        top: "22%",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        data: ["10:00", "10:10", "10:20", "10:30", "10:40", "10:50", "10:60"],
        axisLine: {
          lineStyle: {
            color: "#999999",
          },
        },
      },
      yAxis: {
        name: "kb/s",
        nameLocation: "end",
        nameTextStyle: {
          color: "#999999",
          padding: [0, 0, 0, -21],
        },
        nameGap: 15,
        type: "value",
        max: 60,
        min: 0,
        minInterval: 15,
        interval: 15,
        axisLine: {
          lineStyle: {
            color: "#999999",
          },
        },
      },
      series: [
        {
          data: [12, 16, 5, 15, 10, 20, 10],
          type: "line",
          symbol: "none",
          areaStyle: {
            normal: {
              color: '#FAEFE5' //改变区域颜色
            }
          },
          itemStyle: {
            normal: {
              lineStyle: {
                color: "#f8a758",
              },
            },
          },
        },
      ],
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart1.setOption(option1);
    myChart2.setOption(option2);
    myChart3.setOption(option3);
    myChart4.setOption(option4);
  },
});