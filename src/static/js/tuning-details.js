/**
 * @file help function for html TuningDetails page
 *
 * Copyright (c) 2020 Huawei Technologies Co., Ltd.
 * A-Tune is licensed under the Mulan PSL v2.
 * You can use this software according to the terms and conditions of the Mulan PSL v2.
 * You may obtain a copy of Mulan PSL v2 at:
 *    http://license.coscl.org.cn/MulanPSL2
 * THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT, MERCHANTABILITY OR FIT FOR A PARTICULAR
 * PURPOSE.
 * See the Mulan PSL v2 for more details.
 * Create: 2020-11-05
*/

import echarts from 'echarts';
import axios from 'axios';
import {deleteChild, engineHost, enginePort} from './utils.js';

export default {
    data() {
        return {
            fileName: '',
            fileEngine: 'default',
            fileRound: 'totalRound',
            fileStatus: 'status',
            paramTable: [],
            columns: [],
            visibleColumns: [],
            pagination: {page: 1, rowsPerPage: 20},
            modelCompare: [],
            optionCompare: [],
            compareChartId: ['chart-evaluation', 'chart-best evaluation', 'chart-cost', 'chart-hist'],
            intervalId: ''
        };
    },
    methods: {
        addCompareFileInfo(file, line, fileNum) {
            if (line === 0) {
                for (var el in this.compareChartId) {
                    var chart = echarts.init(document.getElementById(this.compareChartId[el]));
                    var option = chart.getOption();
                    option.series.push({
                        type: chart.getOption().series[0].type,
                        name: file,
                        symbolSize: 5,
                        barGap: 0,
                        data: []
                    });
                    chart.setOption(option, true);
                }
            }
            const path = `http://${engineHost}:${enginePort}/v1/UI/tuning/compareWith`;
            var params = {name: file, line: line};
            axios.get(path, {params: params}, {'Access-Control-Allow-Origin': '*'}).then((res) => {
                if (typeof(res.data) === 'string') {
                    res.data = JSON.parse(res.data);
                }
                if (!res.data.isExist) {
                    this.optionCompare.splice(this.optionCompare.indexOf(file), 1);
                    this.modelCompare.splice(this.modelCompare.indexOf(file), 1);
                } else {
                    var lineList = [];
                    for (var i in res.data.data[0]) {
                        lineList[i] = parseInt(res.data.initial_line + 1, 10) + parseInt(i, 10);
                    }
                    updatePerformanceChart('evaluation', lineList, res.data.data[res.data.data.length - 1], file);
                    updatePerformanceChart('best evaluation', lineList, res.data.data[res.data.data.length - 1], file);
                    updatePerformanceChart('cost', lineList, res.data.cost, file);
                    if (res.data.line !== -1) {
                        this.addCompareFileInfo(file, res.data.line, fileNum);
                    }
                }
            });
        },

        onSubmit() {
            deleteOldData(this.compareChartId);
            var count = 1;
            for (var file in this.modelCompare) {
                this.addCompareFileInfo(this.modelCompare[file], 0, count);
                count++;
            }
        },

        paramSort(rows, sortBy, descending) {
            const data = [ ...rows ];
            if (sortBy) {
                data.sort((a, b) => {
                    const x = descending ? b : a;
                    const y = descending ? a : b;
                    if (sortBy === 'name') {
                        return x[sortBy] > y[sortBy] ? 1 : x[sortBy] < y[sortBy] ? -1 : 0;
                    } else {
                        return parseFloat(x[sortBy]) - parseFloat(y[sortBy]);
                    }
                });
            }
            return data;
        },

        initialPage() {
            const path = `http://${engineHost}:${enginePort}/v1/UI/tuning/initialChart`;
            var params = {status: this.fileStatus, name: this.fileName};
            axios.get(path, {params: params}, {'Access-Control-Allow-Origin': '*'}).then((res) => {
                if (typeof(res.data) === 'string') {
                    res.data = JSON.parse(res.data);
                }
                if (!res.data.isExist) {
                    this.$q.notify('Tuning has been deleted');
                    this.$router.push({
                        path: '/tuning',
                        name: 'Tuning',
                    });
                    return;
                }
                if (res.data.base !== 'ERROR' && (res.data.base === '' || res.data.parameter === '')) {
                    this.initialPage();
                } else if (res.data.isExist) {
                    deleteChild('tuning-evaluation');
                    deleteChild('tuning-details');
                    var baseline = parseInt(res.data.base, 10);
                    this.initialHistogram('tuning-evaluation', baseline);
                    this.initialPerformanceChart('tuning-evaluation', 'best evaluation', baseline);
                    this.initialCostChart('tuning-details');
                    this.initialPerformanceChart('tuning-details', 'evaluation', '');
                    this.fileEngine = res.data.engine;
                    this.fileRound = res.data.round;
                    this.visibleColumns.push('round#');
                    this.columns.push({name: 'round#', align: 'center', label: 'round#',
                                       field: 'round#', sortable: true});
                    res.data.parameter.forEach(el => this.visibleColumns.push(el));
                    res.data.parameter.forEach(el => this.columns.push({name: el, align: 'center',
                                                                        label: el, field: el, sortable: true}));
                    if (res.data.status === 'running') {
                        this.updateAllData(res, res.data.line, 'running');
                    } else {
                        this.updateAllData(res, res.data.line, 'not running');
                    }
                }
            });
        },

        initialHistogram(id, baseline) {
            var container = document.getElementById(id);
            var br = document.createElement('br');
            container.appendChild(br);
            var background = document.createElement('div');
            background.setAttribute('class', 'chart-background');
            container.appendChild(background);

            var div = document.createElement('div');
            div.id = 'chart-hist';
            div.className = 'evaluation-chart';
            div.style.padding = '10px 5px 0 5px';
            background.appendChild(div);
            var chart = this.initialChart(div.id, 'base VS best evaluation', '', '', 'bar');
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
                    barMaxWidth: 120,
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                position: 'top',
                                textStyle: {
                                    fontSize: 14,
                                    fontWeight: 700,
                                    color: '#000'
                                },
                                formatter: function (value) {
                                    return getPercentage(value.value);
                                }
                            }
                        }
                    }
                }
            });
        },

        initialPerformanceChart(id, chartId, baseline) {
            var container = document.getElementById(id);
            container.style.display = 'flex';
            var br = document.createElement('br');
            container.appendChild(br);
            var background = document.createElement('div');
            background.setAttribute('class', 'chart-background');
            container.appendChild(background);

            var div = document.createElement('div');
            div.id = 'chart-' + chartId;
            div.className = 'evaluation-chart';
            div.style.padding = '10px 5px 0 5px';
            background.appendChild(div);
            if (chartId === 'evaluation') {
                this.initialChart(div.id, chartId, 'round', 'evaluation', 'line');
            } else {
                var chart = this.initialChart(div.id, chartId, 'round', 'evaluation', 'line');
                var xAxisData = chart.getOption().xAxis[0].data;
                var yAxisData = chart.getOption().series[0].data;
                xAxisData.push(0);
                yAxisData.push(baseline.toFixed(2));
                chart.setOption({
                    xAxis: {data: xAxisData},
                    series: {data: yAxisData}
                });
            }
        },

        initialCostChart(id) {
            var container = document.getElementById(id);
            var br = document.createElement('br');
            container.appendChild(br);
            container.style.display = 'flex';
            var background = document.createElement('div');
            background.setAttribute('class', 'chart-background');
            container.appendChild(background);

            var div = document.createElement('div');
            div.id = 'chart-' + 'cost';
            div.className = 'evaluation-chart';
            div.style.padding = '10px 5px 0 5px';
            background.appendChild(div);
            this.initialChart(div.id, 'Cost', 'round', 'times(s)', 'line');
        },

        initialChart(id, titles, xName, yName, initialType) {
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
                    name: this.fileName,
                    symbol: 'circle',
                    symbolSize: 5,
                    barGap: 0,
                    data: []
                }]
            };
            chart.setOption(option);
            return chart;
        },

        updateAllData(res, line, stat) {
            if (line !== -1) {
                if (stat === 'running' && res.data.line === res.data.initial_line) {
                    setTimeout(this.updateChart, 5000, res, line, stat);
                } else {
                    this.updateChart(res, line, stat);
                }
            } else if (stat === 'running') {
                this.fileStatus = 'finished';
                this.$q.notify('Tuning finished');
            }
        },

        updateChart(res, line, stat) {
            const path = `http://${engineHost}:${enginePort}/v1/UI/tuning/getTuningData`;
            var params = {status: res.data.status, name: res.data.file_name, line: line};
            axios.get(path, {params: params}, {'Access-Control-Allow-Origin': '*'}).then((res) => {
                if (typeof(res.data) === 'string') {
                    res.data = JSON.parse(res.data);
                }
                if (res.data.isExist === true) {
                    if (res.data.data.length !== 0) {
                        for (var k = 0; k < res.data.data[0].length; k++) {
                            var newCol = {'round#': res.data.data[0][k]};
                            for (var j = 1; j < res.data.data.length; j++) {
                                newCol[res.data.parameter[j - 1]] = res.data.data[j][k];
                            }
                            this.paramTable.push(newCol);
                        }

                        var lineList = [];
                        for (var i in res.data.data[0]) {
                            lineList[i] = parseInt(res.data.initial_line + 1, 10) + parseInt(i, 10);
                        }
                        updatePerformanceChart('evaluation', lineList,
                        res.data.data[res.data.data.length - 1], res.data.file_name);
                        updatePerformanceChart('best evaluation', lineList,
                        res.data.data[res.data.data.length - 1], res.data.file_name);
                        updatePerformanceChart('cost', lineList, res.data.cost, res.data.file_name);
                        this.updateAllData(res, res.data.line, stat);
                    } else {
                        updatePerformanceChart('evaluation', lineList,
                        res.data.data[res.data.data.length - 1], res.data.file_name);
                        updatePerformanceChart('best evaluation', lineList,
                        res.data.data[res.data.data.length - 1], res.data.file_name);
                        this.updateAllData(res, res.data.line, stat);
                    }
                } else if (res.data.status === 'running') {
                    console.log('file might be moved to finished/error dict');
                    this.findFile(res.data.file_name, res, line);
                } else {
                    this.$q.notify('Tuning "', res.data.file_name, '" has been deleted');
                }
            });
        },

        findFile(filename, res, line) {
            const path = `http://${engineHost}:${enginePort}/v1/UI/tuning/getTuningStatus`;
            var params = {name: filename};
            axios.get(path, {params: params}, {'Access-Control-Allow-Origin': '*'}).then((ret) => {
                res.data = JSON.parse(res.data);
                var newStat = ret.data.status;
                if (newStat === 'running') {
                    this.$q.notify('Tuning "', res.data.file_name, '"  has been deleted');
                } else if (newStat === 'finished') {
                    this.fileStatus = newStat;
                    res.data.status = newStat;
                    this.updateAllData(res, line, newStat);
                    this.$q.notify('Tuning finished');
                } else {
                    this.fileStatus = newStat;
                    this.$q.notify('Tuning Interrupted.');
                }
            });
        }

    },
    created() {
        if (Object.keys(this.$route.params).length > 0) {
            sessionStorage.setItem('tuningParams', JSON.stringify(this.$route.params));
            this.fileName = this.$route.params.name;
            this.fileStatus = this.$route.params.status;
            this.optionCompare = this.$route.params.optionCompare;
            this.initialPage();
        } else if (sessionStorage.tuningParams === undefined) {
            this.$router.push({
                path: '/tuning',
                name: 'Tuning'
            });
        } else {
            this.fileName = JSON.parse(sessionStorage.tuningParams).name;
            this.fileStatus = JSON.parse(sessionStorage.tuningParams).status;
            this.optionCompare = JSON.parse(sessionStorage.tuningParams).optionCompare;
            this.initialPage();
        }
    }
};

function getYAxis(value) {
    var texts = value;
    if (texts >= 1000000000) {
        texts = texts / 1000000000;
        return texts + 'b';
    }
    if (texts >= 1000000) {
        texts = texts / 1000000;
        return texts + 'm';
    }
    if (texts >= 1000) {
        texts = texts / 1000;
        return texts + 'k';
    }
    return texts;
}

function updatePerformanceChart(name, times, value, fileName) {
    var id = 'chart-' + name;
    var chart = echarts.init(document.getElementById(id));
    var oldData = chart.getOption().series[0].data;
    var oldX = chart.getOption().xAxis[0].data;
    var count = 0;
    for (var currSeries in chart.getOption().series) {
        if (chart.getOption().series[currSeries].name === fileName) {
            oldData = chart.getOption().series[currSeries].data;
            break;
        }
        count++;
    }
    for (var i in times) {
        if (count === 0 || oldX.length - 1 < times[i]) {
            oldX.push(times[i]);
        }
        if (name === 'best evaluation') {
            var vsChart = echarts.init(document.getElementById('chart-hist'));
            var yData = vsChart.getOption().series[count].data;
            if (parseInt(value[i], 10) > parseInt(oldData[oldData.length - 1], 10) || oldData[0] === undefined) {
                oldData.push(value[i]);
            } else {
                oldData.push(oldData[oldData.length - 1]);
            }
            if (yData[0] === undefined) {
                yData.push(parseFloat(value[i]));
                yData.push(parseFloat(value[i]));
            } else {
                yData.pop();
                yData.push(oldData[oldData.length - 1]);
            }
            var barSeries = vsChart.getOption().series;
            barSeries[count].data = yData;
            vsChart.setOption({series: barSeries});
        } else {
            oldData.push(value[i]);
        }
    }
    if (count !== 0) {
        var oldSeries = chart.getOption().series;
        oldSeries[count].data = oldData;
        chart.setOption({
            xAxis: {data: oldX},
            series: oldSeries
        });
    } else {
        chart.setOption({
            xAxis: {data: oldX},
            series: [{data: oldData}]
        });
    }
}

function deleteOldData(compareChartId) {
    for (var el in compareChartId) {
        var chart = echarts.init(document.getElementById(compareChartId[el]));
        var oldSeries = chart.getOption().series;
        var option = chart.getOption();
        for (var i = 1; i < oldSeries.length; i++) {
            option.series[i] = undefined;
        }
        while (option.series[0] !== undefined && option.xAxis[0].data.length > option.series[0].data.length) {
            option.xAxis[0].data.pop();
        }
        chart.setOption(option, true);
    }
}

function getPercentage(value) {
    var chart = echarts.init(document.getElementById('chart-hist'));
    var series = chart.getOption().series[0];
    if (series.data === null || series.data === undefined || value === series.data[0]) {
        return 'baseline';
    }
    if (series.data[0] === 0) {
        return '+' + value + '%';
    }
    var res = (value - series.data[0]) / series.data[0] * 100;
    if (res === 0) {
        return '0%';
    }
    return '+' + res.toFixed(3) + '%';
}
