import { defineComponent } from "vue";

export default defineComponent({
    methods: {

    },
    mounted() {
        var echarts = require("echarts");
        var myChart1 = echarts.init(document.getElementById("offline1"));
        var myChart2 = echarts.init(document.getElementById("offline2"));
        var myChart3 = echarts.init(document.getElementById("offline3"));
        var myChart4 = echarts.init(document.getElementById("offline4"));
        var option1 = {
            tooltip: {
                trigger: 'axis'
            },
            grid: {
                left: "32",
                right: "32",
                bottom: "32",
                top: "30",
                containLabel: true,
            },
            xAxis: {
                type: 'category',
                data: ['before', 'after'],
                axisLine: {
                    lineStyle: {
                        color: "#999999",
                    },
                },
            },
            yAxis: {
                type: 'value',
                max: 50,
                min: 0,
                minInterval: 10,
                interval: 10, //每次增加几个
                axisLine: {
                    lineStyle: {
                        color: "#999999",
                    },
                },
            },
            series: [
                {
                    data: [
                        {
                            value: 28,
                            itemStyle: {
                                color: '#559ff8'
                            }
                        },
                        {
                            value: 19,
                            itemStyle: {
                                color: '#5ce59d'
                            }
                        }
                    ],
                    type: 'bar',
                    barWidth: 10,
                    itemStyle: {
                        normal: {
                            barBorderRadius: [10, 10, 10, 10] //柱形图圆角，初始化效果
                        }
                    }
                }
            ],
        };
        var option2 = {
            color: ['#5ce59d', '#559ff8'],
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: [
                    { name: 'key_parameters_select-1637120248097', icon: 'circle' },
                    { name: 'compress-1627891392963', icon: 'circle' }
                ],
                right: "32",
                top: "0",
            },
            grid: {
                left: "32",
                right: "32",
                bottom: "32",
                top: "30",
                containLabel: true,
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13',
                    '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27',
                    '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40'],
            },
            yAxis: {
                type: 'value',
                min: 0,
                max: 125000,
                interval: 25000,
                axisLabel: {
                    formatter: '{value}b'
                }
            },
            series: [
                {
                    name: 'key_parameters_select-1637120248097',
                    type: 'line',
                    symbol: 'none',
                    data: [
                        60000, 62000, 60000, 70000, 68000, 72000, 61000, 60000, 66000, 58000,
                        60000, 58000, 70000, 64000, 70000, 73000, 74000, 68000, 75000, 74000,
                        120000, 75000, 74500, 68000, 110000, 75000, 68000, 59000, 83000, 88000,
                        75000, 60000, 80000, 80000, 60000, 58000, 110000, 80000, 120000, 65000,
                    ]
                },
                {
                    name: 'compress-1627891392963',
                    type: 'line',
                    symbol: 'none',
                    data: [
                        50000, 40000, 75000, 50000, 52000, 70000, 40000, 45000, 40000, 51000,
                        35000, 60000, 43000, 60000, 66000, 58000, 60000, 58000, 70000, 38000,
                        37000, 43000, 60000, 66000, 58000, 60000, 58000, 70000, 42000, 43000,
                        53000, 45000, 43000, 54000, 47000, 45000, 58000, 55000, 38000, 40000
                    ]
                }
            ],
        };
        var option3 = {
            color: ['#5ce59d', '#559ff8'],
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: [
                    { name: 'key_parameters_select-1637120248097', icon: 'circle' },
                    { name: 'compress-1627891392963', icon: 'circle' }
                ],
                right: "32",
                top: "0",
            },
            grid: {
                left: "32",
                right: "32",
                bottom: "32",
                top: "30",
                containLabel: true,
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13',
                    '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27',
                    '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40'],
            },
            yAxis: {
                type: 'value',
                min: 0,
                max: 0.1,
                interval: 0.02,
            },
            series: [
                {
                    name: 'key_parameters_select-1637120248097',
                    type: 'line',
                    symbol: 'none',
                    data: [
                        0.060, 0.062, 0.060, 0.070, 0.068, 0.072, 0.061, 0.060, 0.066, 0.058,
                        0.060, 0.058, 0.070, 0.064, 0.070, 0.073, 0.040, 0.068, 0.075, 0.049,
                        0.020, 0.075, 0.074, 0.068, 0.011, 0.075, 0.068, 0.059, 0.083, 0.088,
                        0.075, 0.080, 0.080, 0.078, 0.060, 0.058, 0.011, 0.080, 0.012, 0.065,
                    ]
                },
                {
                    name: 'compress-1627891392963',
                    type: 'line',
                    symbol: 'none',
                    data: [
                        0.050, 0.040, 0.075, 0.050, 0.052, 0.070, 0.040, 0.045, 0.040, 0.051,
                        0.035, 0.060, 0.043, 0.060, 0.066, 0.058, 0.060, 0.058, 0.070, 0.038,
                        0.037, 0.043, 0.060, 0.066, 0.058, 0.060, 0.058, 0.070, 0.042, 0.043,
                        0.053, 0.045, 0.043, 0.054, 0.047, 0.045, 0.058, 0.055, 0.038, 0.040
                    ]
                }
            ],
        };
        var option4 = {
            color: ['#5ce59d', '#559ff8'],
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: [
                    { name: 'key_parameters_select-1637120248097', icon: 'circle' },
                    { name: 'compress-1627891392963', icon: 'circle' }
                ],
                right: "32",
                top: "0",
            },
            grid: {
                left: "32",
                right: "32",
                bottom: "32",
                top: "30",
                containLabel: true,
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13',
                    '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27',
                    '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40'],
            },
            yAxis: {
                type: 'value',
                min: 0,
                max: 125000,
                interval: 25000,
                axisLabel: {
                    formatter: '{value}b'
                }
            },
            series: [
                {
                    name: 'key_parameters_select-1637120248097',
                    type: 'line',
                    symbol: 'none',
                    data: [
                        60000, 62000, 60000, 70000, 68000, 72000, 61000, 60000, 66000, 58000,
                        60000, 58000, 70000, 64000, 70000, 73000, 74000, 68000, 75000, 74000,
                        120000, 75000, 74500, 68000, 110000, 75000, 68000, 59000, 83000, 88000,
                        75000, 60000, 80000, 80000, 60000, 58000, 110000, 80000, 120000, 65000,
                    ]
                },
                {
                    name: 'compress-1627891392963',
                    type: 'line',
                    symbol: 'none',
                    data: [
                        50000, 40000, 75000, 50000, 52000, 70000, 40000, 45000, 40000, 51000,
                        35000, 60000, 43000, 60000, 66000, 58000, 60000, 58000, 70000, 38000,
                        37000, 43000, 60000, 66000, 58000, 60000, 58000, 70000, 42000, 43000,
                        53000, 45000, 43000, 54000, 47000, 45000, 58000, 55000, 38000, 40000
                    ]
                }
            ],
        };
        myChart1.setOption(option1);
        myChart2.setOption(option2);
        myChart3.setOption(option3);
        myChart4.setOption(option4);
    },
});