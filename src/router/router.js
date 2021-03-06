/**
 * @file initial all routers
 *
 * Copyright (c) 2019 Huawei Technologies Co., Ltd.
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
import Layout from 'layouts/Layout';

const routes = [
    {
        path: '/',
        component: Layout,
        children: [{path: 'index', name: 'Index', component: () => import('pages/Index.vue')}]
    },
    {
        path: '/login',
        component: () => import('layouts/Login.vue'),
        children: [{path: '', name: 'Login', component: () => import('pages/Login.vue')}]
    },
    {
        path: '/tuning',
        component: Layout,
        children: [{path: '', name: 'Tuning', component: () => import('pages/Tuning.vue')}]
    },
    {
        path: '/analysis',
        component: Layout,
        children: [{path: '', name: 'Analysis', component: () => import('pages/Analysis.vue')}]
    },
    {
        path: '/tuning/details',
        component: Layout,
        children: [{path: '', name: 'TuningDetails', component: () => import('pages/TuningDetails.vue')}]
    },
    {
        path: '/analysis/details',
        component: Layout,
        children: [{path: '', name: 'AnalysisDetails', component: () => import('pages/AnalysisDetails.vue')}]
    },
    {
        path: '*',
        component: () => import('pages/Error404.vue')
    }
];

export default routes;
