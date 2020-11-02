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
            optionCompare: []
        };
    },
    components: { },
    methods: {
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
    //    document.getElementById('tuning-list-form').style.display = 'block';
    //    var container = document.getElementById('tuning-evaluation');
    //    deleteChild('tuning-evaluation');
    //    container.style.display = 'none';
    }
};
