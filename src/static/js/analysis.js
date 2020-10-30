/**
 * @file help function for html Analysis page
 *
 * Copyright (c) 2019 Huawei Technologies Co., Ltd.
 * A-Tune is licensed under the Mulan PSL v2.
 * You can use this software according to the terms and conditions of the Mulan PSL v2.
 * You may obtain a copy of Mulan PSL v2 at:
 *    http://license.coscl.org.cn/MulanPSL2
 * THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT, MERCHANTABILITY OR FIT FOR A PARTICULAR
 * PURPOSE.
 * See the Mulan PSL v2 for more details.
 * Create: 2020-10-29
*/
import echarts from 'echarts';

function initialParamChart(divId, param, fileName) {
    var container = document.getElementById(divId);
    container.style.display = 'block';
    var div = document.createElement('div');
    div.id = 'chart-' + param;
    div.onclick = function () {
        setPopUp(div.id);
    };
    div.className = 'io-chart';
    container.appendChild(div);
    var chart = initialEchart(div, param, fileName);
    return chart;
}

function initialEchart(div, param, fileName) {
    var chart = echarts.init(document.getElementById(div.id));
    var option = {
        title: {
            text: param,
            textStyle: {
                color: '#036',
                fontSize: 10
            },
            left: 'center',
            padding: [20, 0, 5, 0]
        },
        color: ['#003366', '#006699', '#4cabce', '#e5323e'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
                mark: {show: true}
            }
        },
        xAxis: [{
            name: 'times',
            data: []
        }],
        yAxis: [{
            name: 'io.wait',
            type: 'value'
        }],
        axisLabel: {
            show: true,
            formatter: function (value) {
                return getYAxis(value);
            }
        },
        series: [{
            name: fileName,
            type: 'line',
            symbolSize: 5,
            barGap: 0,
            data: []
        }]
    };
    chart.setOption(option);
    return chart;
}

function updateParamChart(header, data, fileNum, fileName) {
    for (var el in header) {
        var chart = echarts.init(document.getElementById('chart-' + header[el]));
        if (fileNum === 0) {
            var oldData = chart.getOption().series[0].data;
            var oldX = chart.getOption().xAxis[0].data;
            var val = 1;
            if (oldData.length !== 0) {
                val = oldX[oldX.length - 1] + 1;
            }
            for (var i in data[el]) {
                oldX.push(val);
                oldData.push(data[el][i]);
                val++;
            }
            chart.setOption({
                xAxis: {data: oldX},
                series: [{data: oldData}]
            });
        } else {
            var sery = 1;
            var currSeries = chart.getOption().series;
            for (i = 1; i < currSeries.length; i++) {
                if (currSeries[i].name === fileName) {
                    sery = i;
                    break;
                }
            }
            oldX = chart.getOption().xAxis[0].data;
            oldData = chart.getOption().series[sery].data;
            for (i in data[el]) {
                if (oldX.length === oldData.length) {
                    oldX.push(oldX.length + 1);
                }
                oldData.push(data[el][i]);
            }
            var newData = chart.getOption().series;
            newData[sery].data = oldData;
            chart.setOption({
                xAxis: {data: oldX},
                series: newData
            });
        }
    }
}

function deleteOldData(fileChartId, compareChartId) {
    for (var el in fileChartId) {
        var chart = echarts.init(document.getElementById(fileChartId[el]));
        var oldSeries = chart.getOption().series;
        for (var i = 1; i < oldSeries.length; i++) {
            oldSeries[i].data = [];
        }
        chart.setOption({
            series: oldSeries
        });
    }
    for (var e in compareChartId) {
        var element = document.getElementById(compareChartId[e]);
        if (element !== undefined) {
            element.remove();
        }
    }
}

function addSeriesForChart(id, fileName) {
    var chart = echarts.init(document.getElementById(id));
    var newSeries = [];
    for (var ser in chart.getOption().series) {
        newSeries.push(chart.getOption().series[ser]);
    }
    newSeries.push({
        name: fileName,
        type: 'line',
        symbolSize: 5,
        barGap: 0,
        data: []
    });
    chart.setOption({
        series: newSeries
    });
}

function getYAxis(value) {
    var texts = value;
    if (texts > 1000000000) {
        texts = texts / 1000000000;
        return texts + 'b';
    }
    if (texts > 1000000) {
        texts = texts / 1000000;
        return texts + 'm';
    }
    if (texts > 1000) {
        texts = texts / 1000;
        return texts + 'k';
    }
    return texts;
}

function initialPopUp() {
    var container = document.getElementById('chart-container');
    container.className = 'popup-chart';
    var ret = initialEchart(container, '', '');
    ret.setOption({
        title: {textStyle: {fontSize: 25}, padding: [10, 0, 10, 0]}
    });
}

function setPopUp(id) {
    var chartSmall = echarts.init(document.getElementById(id));
    var chartPopUp = echarts.init(document.getElementById('chart-container'));
    if (chartPopUp.getOption() !== undefined) {
        var oldSeries = chartPopUp.getOption().series;
        for (var i = 0; i < oldSeries.length; i++) {
            oldSeries[i].data = [];
            oldSeries[i].name = '';
            oldSeries[i] = {};
        }
        chartPopUp.setOption({
            xAxis: {data: []},
            series: oldSeries
        });
    } else {
        initialPopUp();
        chartPopUp = echarts.init(document.getElementById('chart-container'));
        console.log(chartPopUp.getOption());
    }
    chartPopUp.setOption({
        title: {text: chartSmall.getOption().title[0].text},
        xAxis: {data: chartSmall.getOption().xAxis[0].data},
        series: chartSmall.getOption().series
    });
    document.getElementById('popup-window').style.display = 'block';
}

export {
    initialParamChart,
    updateParamChart,
    deleteOldData,
    addSeriesForChart,
    initialEchart,
    initialPopUp
};
