/**
 * @file help function for html Tuning page
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

function initialAllGraph(baseline) {
    baseline = parseInt(baseline, 10);
    initialHistogram('tuning-performance', baseline);
    initialPerformanceChart('tuning-performance', 'best performance', baseline);
    initialCostChart('tuning-details');
    initialPerformanceChart('tuning-details', 'performance', '');
}

function initialPerformanceChart(id, chartId, baseline) {
    var container = document.getElementById(id);
    container.style.display = 'flex';
    var br = document.createElement('br');
    container.appendChild(br);
    var background = document.createElement('div');
    background.setAttribute('class', 'chart-background');
    container.appendChild(background);

    var div = document.createElement('div');
    div.id = 'chart-' + chartId;
    div.className = 'performance-chart';
    div.style.padding = '10px 5px 0 5px';
    background.appendChild(div);
    if (chartId === 'performance') {
        initialChart(div.id, chartId, 'round', 'performance', 'line');
    } else {
        var chart = initialChart(div.id, chartId, 'round', 'performance', 'line');
        var xAxisData = chart.getOption().xAxis[0].data;
        var yAxisData = chart.getOption().series[0].data;
        xAxisData.push(0);
        yAxisData.push(baseline);
        chart.setOption({
            xAxis: {data: xAxisData},
            series: {data: yAxisData}
        });
    }
}

function initialCostChart(id) {
    var container = document.getElementById(id);
    var br = document.createElement('br');
    container.appendChild(br);
    container.style.display = 'flex';
    var background = document.createElement('div');
    background.setAttribute('class', 'chart-background');
    container.appendChild(background);

    var div = document.createElement('div');
    div.id = 'chart-' + 'cost';
    div.className = 'performance-chart';
    div.style.padding = '10px 5px 0 5px';
    background.appendChild(div);
    initialChart(div.id, 'Cost', 'round', 'times(s)', 'line');
}

function initialHistogram(id, baseline) {
    var container = document.getElementById(id);
    var br = document.createElement('br');
    container.appendChild(br);
    var background = document.createElement('div');
    background.setAttribute('class', 'chart-background');
    container.appendChild(background);

    var div = document.createElement('div');
    div.id = 'chart-hist';
    div.className = 'performance-chart';
    div.style.padding = '10px 5px 0 5px';
    background.appendChild(div);
    var chart = initialChart(div.id, 'base VS best performance', '', '', 'bar');
    var xAxisData = chart.getOption().xAxis[0].data;
    var yAxisData = chart.getOption().series[0].data;
    xAxisData.push('before');
    xAxisData.push('after');
    yAxisData.push(baseline);
    yAxisData.push(baseline);
    chart.setOption({
        xAxis: {data: xAxisData},
        series: {
            data: yAxisData,
            itemStyle: {
                normal: {
                    color: function (params) {
                        var colorList = ['#003366', '#006699'];
                        return colorList[params.dataIndex];
                    }
                }
            }
        }
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

function initialChart(id, titles, xName, yName, initialType) {
    var chart = echarts.init(document.getElementById(id));
    var option = {
        title: {
            text: titles,
            textStyle: {
                color: '#036',
                fontSize: 20
            },
            left: 'center',
            padding: [25, 10, 0, 0]
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
                mark: {show: true},
                magicType: {show: true, type: ['line', 'bar', 'tiled']},
                restore: {show: true}
            }
        },
        xAxis: [{
            name: xName,
            data: []
        }],
        yAxis: [{
            name: yName,
            type: 'value'
        }],
        axisLabel: {
            show: true,
            formatter: function (value) {
                return getYAxis(value);
            }
        },
        series: [{
            type: initialType,
            symbolSize: 5,
            barGap: 0,
            data: []
        }]
    };
    chart.setOption(option);
    return chart;
}

function updatePerformanceChart(name, times, value) {
    var id = 'chart-' + name;
    var chart = echarts.init(document.getElementById(id));
    var oldData = chart.getOption().series[0].data;
    var oldX = chart.getOption().xAxis[0].data;
    for (var i in times) {
        oldX.push(times[i]);
        if (name === 'best performance') {
            var vsChart = echarts.init(document.getElementById('chart-hist'));
            var yData = vsChart.getOption().series[0].data;
            if (parseInt(value[i], 10) > parseInt(oldData[oldData.length - 1], 10) || oldData[0] === undefined) {
                oldData.push(value[i]);
            } else {
                oldData.push(oldData[oldData.length - 1]);
            }
            if (yData[0] === undefined) {
                yData.push(value[i]);
                yData.push(value[i]);
            } else {
                yData.pop();
                yData.push(oldData[oldData.length - 1]);
            }
            vsChart.setOption({series: [{data: yData}]});
        } else {
            oldData.push(value[i]);
        }
    }
    chart.setOption({
        xAxis: {data: oldX},
        series: [{data: oldData}]
    });
    window.onresize = function () {
        chart.resize();
    };
}

export {
    updatePerformanceChart,
    initialAllGraph
};
