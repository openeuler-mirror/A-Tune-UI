import * as utils from './utils.js';

const colorList = [
  ['#559FF8', '#6666FF', '#1D68C4', '#2929CC', '#004191', '#000099'],
  ['#5CE55C', '#A5E553', '#24B324', '#72B31F', '#008000', '#488000'],
  ['#F7A757', '#F7DA4B', '#BF6E1D', '#B39812', '#8C4500', '#806A00'],
  ['#F75757', '#F757A8', '#BF1D1D', '#BF1D6F', '#8C0000', '#8C0047'],
  ['#9966FF', '#F757F7', '#5E29CC', '#BF1DBF', '#320099', '#8C008C'],
  ['#5CE5E5', '#5CE59D', '#24B3B3', '#24B367', '#008080', '#00803C']];

function getColorGroup(colors) {
  if (colors.toLowerCase() === "cpu") {
    return colorList[0];
  }
  if (colors.toLowerCase() === "storage") {
    return colorList[1];
  }
  if (colors.toLowerCase() === "network") {
    return colorList[2];
  }
  if (colors.toLowerCase() === "memory") {
    return colorList[3];
  }
  if (colors.toLowerCase() === "perf") {
    return colorList[4];
  }
  if (colors.toLowerCase() === "system") {
    return colorList[5];
  }
  return colorList[utils.getRandomInt(0, 7)];
}

function addLegend(legend, names) {
  names.forEach(function (name) {
    legend.push({ "name": name, "icon": "circle" });
  });
  return legend;
}

function deleteLegend(legend, names) {
  let legendData = legend[0].data;
  names.forEach(function (name) {
    for (let i = 0; i < legendData.length; i++) {
      if (legendData[i]["name"] === name) {
        legendData.splice(i, 1);
        break;
      }
    }
  });
  legend[0].data = legendData;
  return legend;
}

function addLineSeries(series, names) {
  names.forEach(function (name) {
    let lineInfo = {
      "name": name,
      "data": [],
      "type": "line",
      "symbol": "none",
      //   toolbox: {
      //     show: false,
      //     feature: {
      //       dataView: { show: true, readOnly: false },
      //       magicType: { show: true, type: ["line", "bar"] },
      //       restore: { show: true },
      //       saveAsImage: { show: true },
      //     },
      //   },
    };
    series.push(lineInfo);
  });
  return series;
}

function addBarSeries(series, names) {
  names.forEach(function (name) {
    let barInfo = {
      "name": name,
      "data": [],
      "type": "bar",
      "barWidth": 10,
      "barGap": "50%",
      "itemStyle": {
        "borderRadius": [10, 10, 10, 10],
      },
    };
    series.push(barInfo);
  });
  return series;
}

function deleteSeries(series, names) {
  names.forEach(function (name) {
    for (let i = 0; i < series.length; i++) {
      if (series[i]["name"] === name) {
        series.splice(i, 1);
        break;
      }
    }
  });
  return series;
}

export function initLineChart(chart, xName, yName, lineNames, colors) {
  let lineOption = {
    color: getColorGroup(colors),
    grid: {
      left: "32",
      right: "32",
      bottom: "32",
      top: "30%",
      containLabel: true,
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      itemWidth: 10,
      itemHeight: 10,
      itemGap: 10,
      data: addLegend([], lineNames),
      right: "32",
      top: "55",
      textStyle: {
        fontSize: 14,
        color: "#999999",
      },
    },
    xAxis: {
      type: "category",
      name: xName,
      data: [],
      axisLine: {
        lineStyle: {
          color: "#999999",
        },
      },
    },
    yAxis: {
      name: yName,
      nameLocation: "end",
      nameTextStyle: {
        color: "#999999",
        padding: [0, 0, 0, -21],
      },
      nameGap: 15,
      type: "value",
      axisLine: {
        lineStyle: {
          color: "#999999",
        },
      },
    },
    series: addLineSeries([], lineNames),
  };
  chart.setOption(lineOption);
}

export function initBarChart(chart, xName, yName, barNames, colors) {
  let barOption = {
    color: getColorGroup(colors),
    grid: {
      left: "32",
      right: "32",
      bottom: "32",
      containLabel: true,
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      itemWidth: 10,
      itemHeight: 10,
      itemGap: 10,
      data: addLegend([], barNames),
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
        data: [],
        axisLine: {
          lineStyle: {
            color: "#999999",
          },
        },
      },
    ],
    yAxis: [
      {
        name: yName,
        nameLocation: "end",
        nameTextStyle: {
          color: "#999999",
          padding: [0, 0, 0, -21],
        },
        nameGap: 15,
        type: "value",
        axisLine: {
          lineStyle: {
            color: "#999999",
          },
        },
      },
    ],
    series: addBarSeries([], barNames),
  };
  chart.setOption(barOption);
}

export function initPieChart(chart, pieText, pieSubtext, seriesName, colors) {
  let colorSeries = getColorGroup(colors);
  let pieOption = {
    color: colorSeries,
    title: [
      {
        text: pieText,
        subtext: pieSubtext,
        x: "center",
        y: "center",
        top: "40%",
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
    tooltip: {
      trigger: "item",
    },
    legend: {
      left: "center",
      bottom: "32",
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
        name: seriesName,
        type: "pie",
        radius: ["40%", "46%"],
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
          show: true,
          length: 20,
          length2: 10,
        },
        data: [],
      },
    ],
  };
  chart.setOption(pieOption);
}

function appendChartData(type, chart, newXData, yName, newYData) {
  let xData = chart.getOption().xAxis[0].data;
  xData = xData.concat(newXData);
  let yData = chart.getOption().series;
  let legend = chart.getOption().legend[0].data;
  for (let i = 0; i < yName.length; i++) {
    let getY = false;
    for (let j = 0; j < yData.length; j++) {
      if (yName[i] === yData[j]["name"]) {
        yData[j]["data"] = yData[j]["data"].concat(newYData[i]);
        getY = true;
        break;
      }
    }
    if (!getY) {
      if (type.toLowerCase() === "line") {
        yData = addLineSeries(yData, [yName[i]]);
      } else if (type.toLowerCase() === "bar") {
        yData = addBarSeries(yData, [yName[i]]);
      }
      legend = addLegend(legend, [yName[i]]);
      yData[yData.length - 1]["data"] = newYData[i];
    }
  }
  chart.setOption({
    xAxis: { data: xData },
    legend: { data: legend },
    series: yData,
  });
}

export function appendLineChartData(lineChart, newXData, yName, newYData) {
  appendChartData("line", lineChart, newXData, yName, newYData);
}

export function appendBarChartData(barChart, newXData, yName, newYData) {
  appendChartData("bar", barChart, newXData, yName, newYData);
}

export function appendPieChart(pieChart, pieNames, pieValues) {
  let pieData = pieChart.getOption().series[0].data;
  for (let i = 0; i < pieNames.length; i++) {
    let getName = false;
    for (let j = 0; j < pieData.length; j++) {
      if (pieData[j]["name"] === pieNames[i]) {
        pieData[j]["value"] = pieValues[i];
        getName = true;
        break;
      }
    }
    if (!getName) {
      pieData.push({ "name": pieNames[i], "value": pieValues[i] });
    }
  }

  let newSeries = pieChart.getOption().series;
  newSeries[0].data = pieData;
  pieChart.setOption({
    series: newSeries,
  });
}

export function deleteChartData(chart, delYName) {
  let yData = deleteSeries(chart.getOption().series, delYName);
  let legend = deleteLegend(chart.getOption().legend, delYName);

  let maxLength = 0;
  yData.forEach(function (data) {
    if (data["data"].length > maxLength) {
      maxLength = data["data"].length;
    }
  });

  let xAxis = chart.getOption().xAxis;
  let xData = xAxis[0].data;
  while (xData.length > maxLength) {
    xData.splice(xData.length - 1, 1);
  }

  let options = chart.getOption();
  xAxis[0].data = xData;
  options["xAxis"] = xAxis;
  options["legend"] = legend;
  options["series"] = yData;
  chart.setOption(options, true);
}

export function deletePieChart(pieChart, pieNames) {
  let pieData = pieChart.getOption().series[0].data;
  for (let i = 0; i < pieNames.length; i++) {
    for (let j = 0; j < pieData.length; j++) {
      if (pieData[j]["name"] === pieNames[i]) {
        pieData.splice(j, 1);
        break;
      }
    }
  }

  let newSeries = pieChart.getOption().series;
  newSeries[0].data = pieData;
  pieChart.setOption({
    series: newSeries,
  });
}
