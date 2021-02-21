/**
 * @file help function for html Analysis page
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
 * Create: 2020-10-29
*/
import echarts from 'echarts';
import axios from 'axios';
import {engineHost, enginePort} from './utils.js';

export default {
    data() {
        return {
            analysis: [],
            optionCompare: [],
            currFileName: '',
            newFileName: ''
        };
    },
    components: { },
    methods: {
        closeRenamePopUp() {
            console.log('close popup');
            document.getElementById('rename-popup-window').style.display = 'none';
            document.getElementById('rename-error-duplicate').style.display = 'none';
            document.getElementById('rename-error-same').style.display = 'none';
            document.getElementById('rename-error-empty').style.display = 'none';
            this.newFileName = '';
            this.currFileName = '';
        },

        rename(file) {
            document.getElementById('rename-popup-window').style.display = 'block';
            document.getElementById('rename-error-duplicate').style.display = 'none';
            document.getElementById('rename-error-same').style.display = 'none';
            document.getElementById('rename-error-empty').style.display = 'none';
            this.currFileName = file.name;
        },

        onSubmitRename() {
            document.getElementById('rename-error-duplicate').style.display = 'none';
            document.getElementById('rename-error-same').style.display = 'none';
            document.getElementById('rename-error-empty').style.display = 'none';
            if (this.newFileName === undefined || this.newFileName === '') {
                document.getElementById('rename-error-empty').style.display = 'block';
            } else if (this.newFileName === this.currFileName) {
                document.getElementById('rename-error-same').style.display = 'block';
            } else {
                const path = `http://${engineHost}:${enginePort}/v1/UI/analysis/rename`;
                var params = {name: this.currFileName, newName: this.newFileName};
                axios.get(path, {params: params}, {'Access-Control-Allow-Origin': '*'}).then((res) => {
                    if (typeof(res.data) === 'string') {
                        res.data = JSON.parse(res.data);
                    }
                    if (res.data.rename) {
                        this.$q.notify('Rename success');
                        this.closeRenamePopUp();
                        this.getAnalysisList();
                    } else if (res.data.reason === 'duplicate') {
                        document.getElementById('rename-error-duplicate').style.display = 'block';
                    } else {
                        this.$q.notify('Rename error');
                        this.closeRenamePopUp();
                        this.getAnalysisList();
                    }
                });
            }
        },

        getAnalysisList() {
            this.optionCompare = [];
            var uid = localStorage.getItem('userId');
            const path = `http://${engineHost}:${enginePort}/v1/UI/analysis/initialPage`;
            var params = {uid, uid};
            axios.get(path, {params: params}, {'Access-Control-Allow-Origin': '*'}).then((res) => {
                if (typeof(res.data) === 'string') {
                    res.data = JSON.parse(res.data);
                }
                this.analysis = res.data.analysis;
                this.optionCompare.splice();
                for (var el in this.analysis) {
                    if (this.analysis[el].status === 'finished') {
                        this.optionCompare.push(this.analysis[el].name);
                    }
                }
            });
        },

        initialAnalysisDetails(file) {
            this.fileName = file.name;
            if (this.optionCompare.indexOf(file.name) > -1) {
                this.optionCompare.splice(this.optionCompare.indexOf(file.name), 1);
            }
            const path = `http://${engineHost}:${enginePort}/v1/UI/analysis/chooseFile`;
            var params = {name: file.name};
            axios.get(path, {params: params}, {'Access-Control-Allow-Origin': '*'}).then((res) => {
                if (typeof(res.data) === 'string') {
                    res.data = JSON.parse(res.data);
                }
                if (!res.data.isExist) {
                    this.$q.notify('Data has been deleted');
                    this.getAnalysisList();
                } else {
                    this.$router.push({
                        path: '/analysis/details',
                        name: 'AnalysisDetails',
                        params: {
                            name: file.name,
                            status: file.status,
                            optionCompare: this.optionCompare
                        }
                    });
                }
            });
        },
    },
    created() {
        if (localStorage.getItem('userId') === null && localStorage.getItem('connectDB') !== 'false') {
            this.$router.push({
                path: '/index',
                name: 'Index'
            });
        } else {
            this.getAnalysisList();
        }
    }
};
