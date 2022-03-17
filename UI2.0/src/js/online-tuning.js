import { defineComponent } from "vue";

export default defineComponent({
    methods: {

    },
    mounted() {
        var echarts = require("echarts");
        var circleChart1 = echarts.init(document.getElementById("percentage1"));
        var circleChart2 = echarts.init(document.getElementById("percentage2"));
        var circleChart3 = echarts.init(document.getElementById("percentage3"));
        var circleChart4 = echarts.init(document.getElementById("percentage4"));
        var myChart1 = echarts.init(document.getElementById("online1"));
        var myChart2 = echarts.init(document.getElementById("online2"));
        var myChart3 = echarts.init(document.getElementById("online3"));
        var myChart4 = echarts.init(document.getElementById("online4"));
        var myChart5 = echarts.init(document.getElementById("online5"));
        var myChart6 = echarts.init(document.getElementById("online6"));
        var circle1 = {
            title: {
                text: '12.24%',
                left: 'center',
                top: 75,
                subtext: 'CPU',
            },
            visualMap: {
                show: false,
            },
            series: [
                {
                    type: 'pie',
                    radius: ['50%', '70%'],
                    center: ['50%', '50%'],
                    data: [
                        //itemSyle是单项的背景颜色设置。
                        { value: 87.76, itemStyle: { color: '#f1f1f1' } },
                        { value: 12.24, itemStyle: { color: '#5ce59d' } },
                    ],
                    label: {
                        //将视觉引导图关闭
                        show: false,
                    },
                    itemStyle: {
                        //设置的是每项之间的留白
                        borderWidth: 6,
                        borderColor: '#fff'
                    },
                    // 初始化echarts的动画效果
                    animationType: 'scale',
                    animationEasing: 'elasticOut',
                    animationDelay: function (idx) {
                        return Math.random() * 200;
                    }
                }
            ],
        };
        var circle2 = {
            title: {
                text: '9.32%',
                left: 'center',
                top: 75,
                subtext: 'STORAGE',
            },
            visualMap: {
                show: false,
            },
            series: [
                {
                    type: 'pie',
                    radius: ['50%', '70%'],
                    center: ['50%', '50%'],
                    data: [
                        { value: 90.68, itemStyle: { color: '#f1f1f1' } },
                        { value: 9.32, itemStyle: { color: '#5ce59d' } },
                    ],
                    label: {
                        show: false,
                    },
                    itemStyle: {
                        borderWidth: 6,
                        borderColor: '#fff'
                    },
                    animationType: 'scale',
                    animationEasing: 'elasticOut',
                    animationDelay: function (idx) {
                        return Math.random() * 200;
                    }
                }
            ],
        };
        var circle3 = {
            title: {
                text: '20%',
                left: 'center',
                top: 75,
                subtext: 'NET',
            },
            visualMap: {
                show: false,
            },
            series: [
                {
                    type: 'pie',
                    radius: ['50%', '70%'],
                    center: ['50%', '50%'],
                    data: [
                        { value: 80, itemStyle: { color: '#f1f1f1' } },
                        { value: 20, itemStyle: { color: '#5ce59d' } },
                    ],
                    label: {
                        show: false,
                    },
                    itemStyle: {
                        borderWidth: 6,
                        borderColor: '#fff'
                    },
                    animationType: 'scale',
                    animationEasing: 'elasticOut',
                    animationDelay: function (idx) {
                        return Math.random() * 200;
                    }
                }
            ],
        };
        var circle4 = {
            title: {
                text: '10%',
                left: 'center',
                top: 75,
                subtext: 'MEM',
            },
            visualMap: {
                show: false,
            },
            series: [
                {
                    type: 'pie',
                    radius: ['50%', '70%'],
                    center: ['50%', '50%'],
                    data: [
                        { value: 90, itemStyle: { color: '#f1f1f1' } },
                        { value: 10, itemStyle: { color: '#5ce59d' } },
                    ],
                    label: {
                        show: false,
                    },
                    itemStyle: {
                        borderWidth: 6,
                        borderColor: '#fff'
                    },
                    animationType: 'scale',
                    animationEasing: 'elasticOut',
                    animationDelay: function (idx) {
                        return Math.random() * 200;
                    }
                }
            ],
        };
        var option1 = {
            color: ['#559ff8'],
            tooltip: {
                trigger: 'axis'
            },
            grid: {
                left: "32",
                right: "32",
                bottom: "32",
                top: "10",
                containLabel: true,
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13',
                    '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27',
                    '28', '29', '30'],
                axisLabel: {
                    interval: 0,
                },
            },
            yAxis: {
                type: 'value',
                min: 0,
                max: 50,
                interval: 10,
            },
            series: [
                {
                    name: 'key_parameters_select-1637120248097',
                    type: 'line',
                    symbol: 'none',
                    data: [
                        6, 2, 6, 7, 8, 12, 16, 26, 12, 35, 6, 2, 6, 7, 8, 12, 16, 26, 12, 35,
                        6, 2, 6, 7, 8, 12, 16, 26, 12, 35, 6, 2, 6, 7, 8, 12, 16, 26, 12, 35,
                    ]
                },
            ],
        };
        var option2 = {
            color: ['#559ff8'],
            tooltip: {
                trigger: 'axis'
            },
            grid: {
                left: "32",
                right: "32",
                bottom: "32",
                top: "10",
                containLabel: true,
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13',
                    '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27',
                    '28', '29', '30'],
                axisLabel: {
                    interval: 0,
                },
            },
            yAxis: {
                type: 'value',
                min: 0,
                max: 15,
                interval: 3,
            },
            series: [
                {
                    name: 'key_parameters_select-1637120248097',
                    type: 'line',
                    symbol: 'none',
                    data: [
                        6, 2, 6, 7, 8, 7, 1, 6, 7, 5, 6, 2, 3, 7, 8, 9, 1, 6, 7, 5,
                        6, 2, 9, 7, 8, 6, 1, 6, 7, 5, 6, 2, 3, 7, 8, 9, 1, 6, 7, 5,
                        6, 2, 6, 7, 8, 7, 1, 6, 5, 5, 6, 2, 3, 7, 3, 9, 1, 6, 7, 5,
                    ]
                },
            ],
        };
        var option3 = {
            color: ['#559ff8'],
            tooltip: {
                trigger: 'axis'
            },
            grid: {
                left: "32",
                right: "32",
                bottom: "32",
                top: "10",
                containLabel: true,
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13',
                    '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27',
                    '28', '29', '30'],
                axisLabel: {
                    interval: 0,
                },
            },
            yAxis: {
                type: 'value',
                min: 0,
                max: 1,
                interval: 0.2,
            },
            series: [
                {
                    name: 'key_parameters_select-1637120248097',
                    type: 'line',
                    symbol: 'none',
                    data: [
                        0.6, 0.5, 0.8, 0.7, 0.6, 0.7, 0.6, 0.6, 0.6, 0.5,
                        0.6, 0.5, 0.7, 0.6, 0.7, 0.7, 0.4, 0.6, 0.7, 0.4,
                        0.2, 0.7, 0.7, 0.6, 0.1, 0.7, 0.6, 0.5, 0.8, 0.8,
                    ]
                },
            ],
        };
        var option4 = {
            color: ['#559ff8'],
            tooltip: {
                trigger: 'axis'
            },
            grid: {
                left: "32",
                right: "32",
                bottom: "32",
                top: "10",
                containLabel: true,
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13',
                    '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27',
                    '28', '29', '30',],
                axisLabel: {
                    interval: 0,
                },
            },
            yAxis: {
                type: 'value',
                min: 0,
                max: 1,
                interval: 0.2,
            },
            series: [
                {
                    name: 'key_parameters_select-1637120248097',
                    type: 'line',
                    symbol: 'none',
                    data: [
                        0.6, 0.5, 0.8, 0.7, 0.6, 0.7, 0.6, 0.6, 0.6, 0.5,
                        0.6, 0.5, 0.7, 0.6, 0.7, 0.7, 0.4, 0.6, 0.7, 0.4,
                        0.2, 0.7, 0.7, 0.6, 0.1, 0.7, 0.6, 0.5, 0.8, 0.8,
                    ]
                },

            ],
        };
        var option5 = {
            color: ['#559ff8'],
            tooltip: {
                trigger: 'axis'
            },
            grid: {
                left: "32",
                right: "32",
                bottom: "32",
                top: "10",
                containLabel: true,
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13',
                    '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27',
                    '28', '29', '30'],
                axisLabel: {
                    interval: 0,
                },
            },
            yAxis: {
                type: 'value',
                min: 0,
                max: 1,
                interval: 0.2,
            },
            series: [
                {
                    name: 'key_parameters_select-1637120248097',
                    type: 'line',
                    symbol: 'none',
                    data: [
                        0.6, 0.5, 0.8, 0.7, 0.6, 0.7, 0.6, 0.6, 0.6, 0.5,
                        0.6, 0.5, 0.7, 0.6, 0.7, 0.7, 0.4, 0.6, 0.7, 0.4,
                        0.2, 0.7, 0.7, 0.6, 0.1, 0.7, 0.6, 0.5, 0.8, 0.8,
                    ]
                },
            ],
        };
        var option6 = {
            color: ['#559ff8'],
            tooltip: {
                trigger: 'axis'
            },
            grid: {
                left: "32",
                right: "32",
                bottom: "32",
                top: "10",
                containLabel: true,
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13',
                    '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27',
                    '28', '29', '30'],
                axisLabel: {
                    interval: 0,
                },
            },
            yAxis: {
                type: 'value',
                min: 0,
                max: 1,
                interval: 0.2,
            },
            series: [
                {
                    name: 'key_parameters_select-1637120248097',
                    type: 'line',
                    symbol: 'none',
                    data: [
                        0.6, 0.5, 0.8, 0.7, 0.6, 0.7, 0.6, 0.6, 0.6, 0.5,
                        0.6, 0.5, 0.7, 0.6, 0.7, 0.7, 0.4, 0.6, 0.7, 0.4,
                        0.2, 0.7, 0.7, 0.6, 0.1, 0.7, 0.6, 0.5, 0.8, 0.8,
                    ]
                },
            ],
        };
        circleChart1.setOption(circle1);
        circleChart2.setOption(circle2);
        circleChart3.setOption(circle3);
        circleChart4.setOption(circle4);
        myChart1.setOption(option1);
        myChart2.setOption(option2);
        myChart3.setOption(option3);
        myChart4.setOption(option4);
        myChart5.setOption(option5);
        myChart6.setOption(option6);
    },
});