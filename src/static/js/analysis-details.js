/**
 * @file help function for html AnalysisDetails page
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
import {host, port} from './utils.js';

export default {
    data() {
        return {
            fileName: '',
            fileWorkLoad: '',
            avgCPU: 0,
            avgMEM: 0,
            avgNET: 0,
            avgSTR: 0,
            paramData: [],
            paramColumns: [],
            paramPagination: {page: 1, rowsPerPage: 20},
            modelDim: [],
            optionDim: [],
            modelCompare: [],
            optionCompare: [],
            fileChartId: [],
            compareChartId: []
        };
    },
    components: { },
    methods: {
        closePopUp() {
            console.log('close popup');
            document.getElementById('popup-window').style.display = 'none';
        },

        onSubmit() {
            for (var el in this.optionDim) {
                var container = document.getElementById('div-' + this.optionDim[el]);
                if (this.modelDim.indexOf(this.optionDim[el]) > -1) {
                    container.style.display = 'block';
                } else {
                    container.style.display = 'none';
                }
            }
            deleteOldData(this.fileChartId, this.compareChartId);
            this.compareChartId.splice();
            var count = 1;
            for (var file in this.modelCompare) {
                this.addCompareFileInfo(this.modelCompare[file], 0, count);
                count++;
            }
        },

        addCompareFileInfo(file, line, fileNum) {
            const path = `http://${host}:${port}/analysis/${file}/${line}`;
            axios.get(path).then((res) => {
                if (res.data.file_exist === false) {
                    this.optionCompare.splice(this.optionCompare.indexOf(file), 1);
                    if (this.modelCompare.indexOf(file) > -1) {
                        this.modelCompare.splice(this.modelCompare.indexOf(file), 1);
                    }
                } else {
                    if (line === 0) {
                        for (var el in res.data.table_header) {
                            if (document.getElementById('chart-' + res.data.table_header[el]) === undefined) {
                                var divId = res.data.table_header[el].split('.')[0];
                                if (document.getElementById('div-' + divId) === undefined) {
                                    var outer = document.getElementById('analysis-chart');
                                    var div = document.createElement('div');
                                    div.id = 'div-' + divId;
                                    outer.appendChild(div);
                                    this.compareChartId.push(divId);
                                    this.optionDim.push(div);
                                    this.modelDim.push(div);
                                }
                                initialParamChart('div-' + divId, res.data.table_header[el], file);
                                this.compareChartId.push('chart-' + res.data.table_header[el]);
                            } else {
                                addSeriesForChart('chart-' + res.data.table_header[el], file);
                            }
                        }
                    }
                    if (res.data.csv_lines > 0) {
                        updateParamChart(res.data.table_header, res.data.csv_data, fileNum, file);
                    }
                    if (res.data.csv_lines === 20) {
                        this.addCompareFileInfo(file, res.data.line, fileNum);
                    }
                }
            });
        },

        initialDetailInfo(file, line) {
            const path = `http://${host}:${port}/analysis/${this.fileName}/${line}`;
            axios.get(path).then((res) => {
                if (!res.data.file_exist) {
                    this.$q.notify('Data has been deleted');
                    this.$router.push({
                        path: '/analysis',
                        name: 'Analysis',
                    });
                }
                if (line === 0) {
                    this.initialChart(res.data.table_header, this.fileName);
                    if (res.data.log_lines === 0) {
                        document.getElementById('analysis-param-form').style.display = 'none';
                        document.getElementById('workload-type').style.display = 'none';
                    }
                }
                if (res.data.csv_data.length > 0) {
                    updateParamChart(res.data.table_header, res.data.csv_data, 0, this.fileName);
                    this.avgCPU = parseFloat(getAvgById('chart-CPU.STAT.util').toFixed(3));
                    this.avgMEM = parseFloat(getAvgById('chart-MEM.BANDWIDTH.Total_Util').toFixed(3));
                    this.avgNET = parseFloat((getAvgById('chart-NET.STAT.rxkBs')
                        + getAvgById('chart-NET.STAT.txkBs')).toFixed(3));
                    this.avgSTR = parseFloat((getAvgById('chart-STORAGE.STAT.rMBs')
                        + getAvgById('chart-STORAGE.STAT.wMBs')).toFixed(3));
                }
                if (res.data.log_lines !== 0) {
                    if (line === 0) {
                        this.paramColumns.push({colName: 'Section', align: 'center',
                                                label: 'Section', field: 'Section'});
                        this.paramColumns.push({colName: 'Status', align: 'center',
                                                label: 'Status', field: 'Status'});
                        this.paramColumns.push({colName: 'Key', align: 'center', label: 'Key', field: 'Key'});
                        this.paramColumns.push({colName: 'Value', align: 'center', label: 'Value', field: 'Value'});
                        this.paramColumns.push({colName: 'Note', align: 'center', label: 'Note', field: 'Note'});
                        this.fileWorkLoad = res.data.workload;
                    }
                    for (var m = 0; m < res.data.log_data.length; m++) {
                        var newParam = {Section: res.data.log_data[m][0], Status: res.data.log_data[m][1]};
                        newParam[this.paramColumns[0].colName] = res.data.log_data[m][0];
                        newParam[this.paramColumns[1].colName] = res.data.log_data[m][1];
                        newParam[this.paramColumns[2].colName] = res.data.log_data[m][2];
                        newParam[this.paramColumns[3].colName] = res.data.log_data[m][3];
                        newParam[this.paramColumns[4].colName] = res.data.log_data[m][4];
                        this.paramData.push(newParam);
                    }
                }
                if (res.data.csv_lines === 20 || res.data.log_lines === 20) {
                    this.initialDetailInfo(file, res.data.line);
                }
            });
        },

        initialChart(header, fileName) {
            var container = document.getElementById('analysis-chart');
            for (var el in header) {
                var dim = header[el].split('.')[0];
                if (this.optionDim.indexOf(dim) <= -1) {
                    var div = document.createElement('div');
                    div.id = 'div-' + dim;
                    container.appendChild(div);
                    this.optionDim.push(dim);
                    this.modelDim.push(dim);
                }
                initialParamChart('div-' + dim, header[el], fileName);
                this.fileChartId.push('chart-' + header[el]);
            }
            this.onSubmit();
        }
    },
    created() {
        if (Object.keys(this.$route.params).length > 0) {
            sessionStorage.setItem('analysisParams', JSON.stringify(this.$route.params));
            this.fileName = this.$route.params.name;
            this.optionCompare = this.$route.params.optionCompare;
        } else {
            this.fileName = JSON.parse(sessionStorage.analysisParams).name;
            this.optionCompare = JSON.parse(sessionStorage.analysisParams).optionCompare;
        }
        this.initialDetailInfo(this.fileName, 0);
    }
};

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
            name: '',
            data: []
        }],
        yAxis: [{
            name: '',
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
    }
    chartPopUp.setOption({
        title: {text: chartSmall.getOption().title[0].text},
        xAxis: {data: chartSmall.getOption().xAxis[0].data},
        series: chartSmall.getOption().series
    });
    document.getElementById('popup-window').style.display = 'block';
}

function getAvgById(id) {
    var chart = echarts.init(document.getElementById(id));
    if (chart === undefined) {
        return 0;
    }
    var data = chart.getOption().series[0].data;
    var total = 0;
    var count = 0;
    for (var el in data) {
        total += parseFloat(data[el]);
        count++;
    }
    total /= count;
    return total;
}

