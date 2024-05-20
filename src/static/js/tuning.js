/**
 * @file help function for html Tuning page
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
import axios from 'axios';
import {engineHost, enginePort} from './utils.js';

export default {
    data() {
        return {
            listTab: 'all',
            files: [],
            optionCompare: [],
            newFileName: '',
            currFileName: ''
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
            this.currFileStat = '';
        },

        getFileList(type) {
            this.listTab = type;
            this.optionCompare = [];
            var uid = localStorage.getItem('userId');
            const path = `http://${engineHost}:${enginePort}/v1/UI/tuning/initialPage`;
            var params = {status: type, uid: uid};
            axios.get(path, {params: params}, {'Access-Control-Allow-Origin': '*'}).then((res) => {
                if (typeof(res.data) === 'string') {
                    res.data = JSON.parse(res.data);
                }
                this.files = res.data.message;
                this.optionCompare.splice();
                for (var el in this.files) {
                    if (this.files[el].status === 'finished') {
                        this.optionCompare.push(this.files[el].name);
                    }
                }
            });
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
                const path = `http://${engineHost}:${enginePort}/v1/UI/tuning/rename`;
                var params = {name: this.currFileName, newName: this.newFileName};
                axios.get(path, {params: params}, {'Access-Control-Allow-Origin': '*'}).then((res) => {
                    if (typeof(res.data) === 'string') {
                        res.data = JSON.parse(res.data);
                    }
                    if (res.data.rename) {
                        this.$q.notify('Rename success');
                        this.closeRenamePopUp();
                        this.getFileList(this.listTab);
                        document.getElementById('rename-error-duplicate').style.display = 'block';
                    } else if (res.data.reason === 'duplicate') {
                        document.getElementById('rename-error-duplicate').style.display = 'block';
                    } else {
                        this.$q.notify('Rename failed');
                        this.closeRenamePopUp();
                        this.getFileList(this.listTab);
                    }
                });
            }
        },

        initialTuningDetails(file) {
            const path = `http://${engineHost}:${enginePort}/v1/UI/tuning/chooseFile`;
            var params = {status: file.status, name: file.name};
            axios.get(path, {params: params}, {'Access-Control-Allow-Origin': '*'}).then((res) => {
                if (typeof(res.data) === 'string') {
                    res.data = JSON.parse(res.data);
                }
                if (res.data.isExist) {
                    this.optionCompare.splice(this.optionCompare.indexOf(file.name), 1);
                    this.$router.push({
                        path: '/tuning/details',
                        name: 'TuningDetails',
                        params: {
                            status: file.status,
                            name: file.name,
                            optionCompare: this.optionCompare
                        }
                    });
                } else {
                    if (file.status === 'running') {
                        console.log('file might be moved to finished/error dict');
                        this.$q.notify('This tuning might finished or interrupted');
                    } else {
                        console.log('file has been deleted');
                        this.$q.notify('This tuning data has been deleted');
                    }
                    this.getFileList('all');
                }
            });
        },
        // 从命令数据跳转到调优详情页面
        goToTuningDetails(cid) {
            const path = `http://${engineHost}:${enginePort}/v1/UI/command/getCommandDetails`;
            var params = { cid: cid };
            axios.get(path, { params: params }, { 'Access-Control-Allow-Origin': '*' }).then((res) => {
                if (typeof (res.data) === 'string') {
                    res.data = JSON.parse(res.data);
                }
                if (res.data.status === 'success') {
                    const command = res.data.data;
                    if (command.type === 'tuning') {
                        this.$router.push({
                            path: '/tuning/details',
                            name: 'TuningDetails',
                            params: {
                                name: command.name,
                                status: command.status,
                                optionCompare: this.optionCompare
                            }
                        });
                    } else {
                        this.$q.notify('Command type is not tuning');
                    }
                } else {
                    this.$q.notify('Failed to get command details');
                }
            });
        }

    },
    created() {
        if (localStorage.getItem('userId') === null && localStorage.getItem('connectDB') !== 'false') {
            this.$router.push({
                path: '/index',
                name: 'Index'
            });
        } else {
            this.getFileList('all');
        }
    },
    mounted() {
    }
};
