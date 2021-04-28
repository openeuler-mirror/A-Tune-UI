/**
 * @file help function for html user login/singup page
 *
 * Copyright (c) 2021 Huawei Technologies Co., Ltd.
 * A-Tune is licensed under the Mulan PSL v2.
 * You can use this software according to the terms and conditions of the Mulan PSL v2.
 * You may obtain a copy of Mulan PSL v2 at:
 *    http://license.coscl.org.cn/MulanPSL2
 * THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT, MERCHANTABILITY OR FIT FOR A PARTICULAR
 * PURPOSE.
 * See the Mulan PSL v2 for more details.
 * Create: 2021-04-28
*/

import axios from 'axios';
import crypto from 'crypto';
import {engineHost, enginePort} from './utils.js';


export default {
    data() {
        return {
            userName: '',
            userId: '',
            ips: [],
            analysisList: [],
            tuningList: [],
            listIp: '',
            splitterModel: 25,
            newIp: '',
            currPasswd: '',
            newPasswd: '',
            confirmPasswd: '',
        };
    },
    components: { },
    methods: {
        showPwdPopUp() {
            document.getElementById('change-pwd-popup-window').style.display = 'block';
        },

        closePwdPopUp() {
            document.getElementById('change-pwd-popup-window').style.display = 'none';
            this.cleanErrPopUp();
            this.resetPwdPopUp();
        },

        cleanErrPopUp() {
            document.getElementById('input-pwd-error').style.display = 'none';
            document.getElementById('not-match-error').style.display = 'none';
            document.getElementById('change-pwd-error').style.display = 'none';
        },

        resetPwdPopUp() {
            this.currPasswd = '';
            this.newPasswd = '';
            this.confirmPasswd = '';
            this.$refs.currPwd.resetValidation();
            this.$refs.newPwd.resetValidation();
            this.$refs.confPwd.resetValidation();
        },

        onSubmitPwd() {
            this.cleanErrPopUp();
            if (this.newPasswd !== this.confirmPasswd) {
                document.getElementById('not-match-error').style.display = 'block';
                return;
            }
            const path = `http://${engineHost}:${enginePort}/v1/UI/user/changePasswd`;
            var oldPwd = encryption(this.currPasswd);
            var newPwd = encryption(this.newPasswd);
            var params = {userId: this.userId, password: oldPwd, newPasswd: newPwd};
            axios.get(path, {params: params}, {'Access-Control-Allow-Origin': '*'}).then((res) => {
                if (typeof(res.data) === 'string') {
                    res.data = JSON.parse(res.data);
                }
                if (!res.data.oldMatch) {
                    document.getElementById('input-pwd-error').style.display = 'block';
                } else if (!res.data.newMatch) {
                    document.getElementById('change-pwd-error').style.display = 'block';
                }
            });
        },

        getIpList() {
            const path = `http://${engineHost}:${enginePort}/v1/UI/user/ipList`;
            var params = {userId: this.userId};
            axios.get(path, {params: params}, {'Access-Control-Allow-Origin': '*'}).then((res) => {
                if (typeof(res.data) === 'string') {
                    res.data = JSON.parse(res.data);
                }
                this.ips.splice();
                this.ips = res.data.ipList;
                if (this.ips.length === 0) {
                    this.listIp = '+ new ip';
                } else {
                    this.listIp = this.ips[0];
                    this.getIpData(this.listIp);
                }
            });
        },

        addIp(value) {
            if (value === '+ new ip') {
                return true;
            }
            return false;
        },

        getIpData(ip) {
            const path = `http://${engineHost}:${enginePort}/v1/UI/user/getIpData`;
            var params = {ipAddrs: ip};
            axios.get(path, {params: params}, {'Access-Control-Allow-Origin': '*'}).then((res) => {
                if (typeof(res.data) === 'string') {
                    res.data = JSON.parse(res.data);
                }
                if (!res.data.getData) {
                    this.$route.go();
                    return;
                }
                this.analysisList.splice();
                this.tuningList.splice();
                this.analysisList = res.data.analysis;
                this.tuningList = res.data.tuning;
            });
        },

        addNewIp() {
            const path = `http://${engineHost}:${enginePort}/v1/UI/user/addNewIp`;
            var params = {ipAddrs: this.newIp, userId: this.userId};
            axios.get(path, {params: params}, {'Access-Control-Allow-Origin': '*'}).then((res) => {
                if (typeof(res.data) === 'string') {
                    res.data = JSON.parse(res.data);
                }
                if (!res.data.success) {
                    console.log('failed');
                    this.$router.push({
                        path: '/index',
                        name: 'Index'
                    });
                } else {
                    this.$q.notify('Add new IP success');
                }
            });
        },

        initialAnalysisDetails(analysis) {
            this.$router.push({
                path: '/analysisDetails',
                name: 'AnalysisDetails'
            });
        },

        initialTuningDetails(tuning) {
            this.$router.push({
                path: '/tuningDetails',
                name: 'TuningDetails'
            });
        }
    },
    created() {
        this.userName = localStorage.getItem('userName');
        this.userId = localStorage.getItem('userId');
        this.getIpList();
    }
};

function encryption(val) {
    return crypto.createHash('sha256').update(val).digest('base64');
}
