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
import {deleteChild, host, port} from './utils.js';

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
            compareChartId: ['chart-evaluation', 'chart-best evaluation', 'chart-cost', 'chart-hist']
        };
    },
    methods: {
        addCompareFileInfo(file, line, fileNum) {
            const path = `http://${host}:${port}/analysis/${file}/${line}`;
            console.log('add compare file', path);
        },

        onSubmit() {
            deleteOldData(this.compareChartId);
            var count = 1;
            console.log(this.modelCompare, this.optionCompare);
            for (var file in this.modelCompare) {
                console.log(this.modelCompare[file]);
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
            const path = `http://${host}:${port}/tuning/${this.fileStatus}/${this.fileName}`;
            axios.get(path).then((res) => {
                if (!res.data.find_file) {
                    this.$q.notify('Tuning has been deleted');
                    this.$router.push({
                        path: '/tuning',
                        name: 'Tuning',
                    });
                }
                if (res.data.base !== 'ERROR' && (res.data.base === '' || res.data.parameter === '')) {
                    this.initialPage();
                } else if (res.data.find_file) {
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
                    barWidth: 120,
                    itemStyle: {
                        normal: {
                            color: function (params) {
                                var colorList = ['#003366', '#EE7942'];
                                return colorList[params.dataIndex];
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
                this.updateChart(res, line, stat);
            } else if (stat === 'running') {
                this.fileStatus = 'finished';
                this.$q.notify('Tuning finished');
            }
        },

        updateChart(res, line, stat) {
            const path = `http://${host}:${port}/tuning/${res.data.status}/${res.data.file_name}/` + line;
            axios.get(path).then((res) => {
                if (res.data.find_file === true) {
                    if (res.data.data.length !== 0) {
                        for (var k = 0; k < res.data.data[0].length; k++) {
                            var newCol = {'round#': line + k + 1};
                            for (var j = 0; j < res.data.data.length; j++) {
                                newCol[res.data.parameter[j]] = res.data.data[j][k];
                            }
                            this.paramTable.push(newCol);
                        }

                        var lineList = [];
                        for (var i in res.data.data[0]) {
                            lineList[i] = parseInt(res.data.initial_line + 1, 10) + parseInt(i, 10);
                        }
                        updatePerformanceChart('evaluation', lineList, res.data.data[res.data.data.length - 1]);
                        updatePerformanceChart('best evaluation', lineList, res.data.data[res.data.data.length - 1]);
                        updatePerformanceChart('cost', lineList, res.data.cost);
                        this.updateAllData(res, res.data.line, stat);
                    } else {
                        updatePerformanceChart('evaluation', lineList, res.data.data[res.data.data.length - 1]);
                        updatePerformanceChart('best evaluation', lineList, res.data.data[res.data.data.length - 1]);
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
            const path = `http://${host}:${port}/tuning/findFile/${filename}`;
            axios.get(path).then((ret) => {
                console.log('return', ret.data.status);
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
        } else {
            this.fileName = JSON.parse(sessionStorage.tuningParams).name;
            this.fileStatus = JSON.parse(sessionStorage.tuningParams).status;
            this.optionCompare = JSON.parse(sessionStorage.tuningParams).optionCompare;
        }
        this.initialPage();
    }
};

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

function updatePerformanceChart(name, times, value) {
    var id = 'chart-' + name;
    var chart = echarts.init(document.getElementById(id));
    var oldData = chart.getOption().series[0].data;
    var oldX = chart.getOption().xAxis[0].data;
    for (var i in times) {
        oldX.push(times[i]);
        if (name === 'best evaluation') {
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
}

function deleteOldData(compareChartId) {
    for (var el in compareChartId) {
        var chart = echarts.init(document.getElementById(compareChartId[el]));
        var oldSeries = chart.getOption().series;
        for (var i = 1; i < oldSeries.length; i++) {
            if (i === 1 && compareChartId[el] === 'chart-cost') {
                continue;
            }
            oldSeries[i].data = [];
        }
        chart.setOption({
            series: oldSeries
        });
    }
}
