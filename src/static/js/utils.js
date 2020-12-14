/**
 * @file help function for html
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
var host = 'HOST';
var port = 'PORT';
var engineHost = 'ENGINE_HOST';
var enginePort = 'ENGINE_PORT';

function deleteChild(id) {
    var container = document.getElementById(id);
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
}

export {
    deleteChild,
    host,
    port,
    engineHost,
    enginePort
};
