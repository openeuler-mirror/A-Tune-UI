# Copyright (c) 2021 Huawei Technologies Co., Ltd.
#
# A-Tune is licensed under the Mulan PSL v2.
# You can use this software according to the terms and conditions of the Mulan PSL v2.
# You may obtain a copy of Mulan PSL v2 at:
#     http://license.coscl.org.cn/MulanPSL2
# THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT, MERCHANTABILITY OR FIT FOR A PARTICULAR
# PURPOSE.
# See the Mulan PSL v2 for more details.
# Create: 2021-01-15

FROM node:10-alpine

ENV ENG_HOST=localhost
ENV ENG_PORT=3838

RUN apk add --no-cache git && \
    git -c http.sslVerify=false clone https://gitee.com/openeuler/A-Tune-UI.git && \
    apk del git && \
    rm -rf A-Tune-UI/.git A-Tune-UI/package-lock.json

RUN cd A-Tune-UI && \
    npm i

RUN sed -i 's/quasar dev -H localhost/quasar dev -H 0.0.0.0/g' A-Tune-UI/package.json

CMD sed -i "s/ENGINE_HOST/$ENG_HOST/g" A-Tune-UI/src/static/js/utils.js && \
    sed -i "s/ENGINE_PORT/$ENG_PORT/g" A-Tune-UI/src/static/js/utils.js && \
    cd A-Tune-UI && npm run start