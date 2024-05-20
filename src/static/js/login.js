/**
 * @file help function for html user login/singup page
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
 * Create: 2020-12-21
*/
import {engineHost, enginePort} from './utils.js';
import axios from 'axios';
import crypto from 'crypto';

export default{
    name: 'login',
    components: { },
    data() {
        return {
            email: '',
            username: '',
            password: '',
            test: '',
            signUp: false
        };
    },
    methods: {
        clearAll() {
            document.getElementById('login-incorrect-error').style.display = 'none';
            document.getElementById('signup-email-error').style.display = 'none';
            document.getElementById('signup-email-dup-error').style.display = 'none';
            document.getElementById('signup-create-error').style.display = 'none';
        },
        displayRegist() {
            this.clearAll();
            this.resetLogin();
            this.signUp = !this.signUp;
            document.getElementById('initial').style.display = 'none';
            if (this.signUp) {
                document.getElementById('login').style.display = 'none';
                document.getElementById('signup').style.display = 'block';
            } else {
                document.getElementById('login').style.display = 'block';
                document.getElementById('signup').style.display = 'none';
            }
        },
        resetLogin() {
            this.email = '';
            this.username = '';
            this.password = '';
            this.$refs.emailInput.resetValidation();
            this.$refs.nameInput.resetValidation();
            this.$refs.pwdInput.resetValidation();
        },
        initialLoginPage() {
            const path = `http://${engineHost}:${enginePort}/v1/UI/user/initialPage`;
            axios.get(path, {'Access-Control-Allow-Origin': '*'}).then((res) => {
                if (typeof(res.data) === 'string') {
                    res.data = JSON.parse(res.data);
                }
                localStorage.setItem('connectDB', res.data.connectDB);
                if (res.data.connectDB) {
                    document.getElementById('signup').style.display = 'none';
                    if (!res.data.hasUser) {
                        document.getElementById('admin-create-error').style.display = 'none';
                        document.getElementById('initial').style.display = 'block';
                        document.getElementById('login').style.display = 'none';
                    } else {
                        document.getElementById('login').style.display = 'block';
                        document.getElementById('initial').style.display = 'none';
                    }
                } else {
                    this.$router.push({
                        path: '/index',
                        name: 'Index'
                    });
                }
            });
        },
        createAdmin() {
            document.getElementById('admin-create-error').style.display = 'none';
            const path = `http://${engineHost}:${enginePort}/v1/UI/user/createAdmin`;
            var params = {password: crypto.createHash('sha256').update(this.password).digest('base64')};
            axios.get(path, {params: params}, {'Access-Control-Allow-Origin': '*'}).then((res) => {
                if (typeof(res.data) === 'string') {
                    res.data = JSON.parse(res.data);
                }
                if (res.data.success) {
                    this.$q.notify('Create Admin Account Successfully!');
                    this.signUp = true;
                    this.displayRegist();
                } else if (res.data.reason === 'duplicate') {
                    this.$q.notify('Admin Account Already Exists');
                    this.signUp = true;
                    this.displayRegist();
                } else if (res.data.reason === 'failed') {
                    document.getElementById('admin-create-error').style.display = 'block';
                }
            });
        },
        fetchSevenDayData() {
            const path = `http://${engineHost}:${enginePort}/v1/UI/user/sevenDays`;
            axios.get(path, {'Access-Control-Allow-Origin': '*'}).then((res) => {
                const data = res.data;
                let output = '';
                for (const [key, value] of Object.entries(data)) {
                    output += `${key}: ${value}\n`;
                }
                document.getElementById('seven-day-data').innerText = output;
            }).catch((error) => {
                console.error('Error fetching seven day data:', error);
            });
        },
        checkLogin() {
            this.clearAll();
            const path = `http://${engineHost}:${enginePort}/v1/UI/user/login`;
            var pwd = crypto.createHash('sha256').update(this.password).digest('base64');
            var params = {email: this.email, password: pwd};
            axios.get(path, {params: params}, {'Access-Control-Allow-Origin': '*'}).then((res) => {
                if (typeof(res.data) === 'string') {
                    res.data = JSON.parse(res.data);
                }
                if (res.data.login) {
                    localStorage.setItem('userId', res.data.user_id);
                    localStorage.setItem('userName', res.data.user_name);
                    this.$router.push({
                        path: '/index',
                        name: 'Index'
                    });
                } else {
                    localStorage.clear();
                    document.getElementById('login-incorrect-error').style.display = 'block';
                }
            });
            this.fetchSevenDayData();
        },
        checkSignup() {
            this.clearAll();
            const path = `http://${engineHost}:${enginePort}/v1/UI/user/signup`;
            var pwd = crypto.createHash('sha256').update(this.password).digest('base64');
            var params = {email: this.email, password: pwd, name: this.username};
            axios.get(path, {params: params}, {'Access-Control-Allow-Origin': '*'}).then((res) => {
                if (typeof(res.data) === 'string') {
                    res.data = JSON.parse(res.data);
                }
                if (res.data.signup) {
                    this.$q.notify('Create Account Successfully');
                    this.displayRegist();
                } else if (res.data.duplicate) {
                    document.getElementById('signup-email-dup-error').style.display = 'block';
                } else {
                    document.getElementById('signup-create-error').style.display = 'block';
                }
            });
        }
    },
    created() {
        if (localStorage.getItem('userName') !== null && localStorage.getItem('userId') !== null) {
            this.$router.push({
                path: '/index',
                name: 'Index'
            });
        } else {
            this.initialLoginPage();
        }
    }
};
