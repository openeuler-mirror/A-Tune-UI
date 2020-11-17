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
import {host, port} from './utils.js';

export default {
    data() {
        return {
            listTab: 'all',
            files: [],
            optionCompare: [],
            newFileName: '',
            currFileName: '',
            currFileStat: ''
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
            const path = `http://${host}:${port}/tuning/${type}`;
            axios.get(path).then((res) => {
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
            this.currFileStat = file.status;
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
                const path = `http://${host}:${port}/tuning/${this.currFileStat}/${this.currFileName}/new_file/${this.newFileName}`;
                axios.get(path).then((res) => {
                    if (res.data.duplicate) {
                        document.getElementById('rename-error-duplicate').style.display = 'block';
                    } else if (res.data.rename) {
                        this.$q.notify('Rename success');
                        this.closeRenamePopUp();
                        this.getFileList(res.data.status);
                    } else {
                        this.$q.notify('Rename error');
                        this.closeRenamePopUp();
                        this.getFileList(res.data.status);
                    }
                });
            }
        },

        initialTuningDetails(file) {
            const path = `http://${host}:${port}/tuning/${file.status}/${file.name}`;
            axios.get(path).then((res) => {
                if (res.data.find_file) {
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
                    if (res.data.status === 'running') {
                        console.log('file might be moved to finished/error dict');
                        this.$q.notify('This tuning might finished or interrupted');
                    } else {
                        console.log('file has been deleted');
                        this.$q.notify('This tuning data has been deleted');
                    }
                    this.getFileList('all');
                }
            });
        }

    },
    created() {
        this.getFileList('all');
    },
    mounted() {
    }
};
