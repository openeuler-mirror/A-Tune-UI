#!/bin/sh

# Copyright (c) 2020 Huawei Technologies Co., Ltd.
#
# A-Tune is licensed under the Mulan PSL v2.
# You can use this software according to the terms and conditions of the Mulan PSL v2.
# You may obtain a copy of Mulan PSL v2 at:
#     http://license.coscl.org.cn/MulanPSL2
# THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT, MERCHANTABILITY OR FIT FOR A PARTICULAR
# PURPOSE.
# See the Mulan PSL v2 for more details.
# Create: 2020-11-05

INSTALL_FOLDER=$(cd "$(dirname "$0")"; pwd)
LOG_FILE=$INSTALL_FOLDER/build.log

build_err()
{
    local ret=$1
    local res=0
    shift
    if [ $ret -ne $res ];then
            echo "==== Error: $@ error ===="
            echo "==== Please check the $LOG_FILE for detail. ===="
            exit $ret
    else
            echo "==== $@ finished ===="
    fi
}

build_finished()
{
    echo "build finished"
    val=`hostname -I|awk -F ' ' '{print $1}'`
    echo "If $val is your current ip, build finished"
    echo "Otherwise, please change IP under package.json file line 10 to current ip."
    echo "============="
    echo "You can use command 'npm run start' to start UI"
    rm -f $LOG_FILE
}

url=$1

yum install -y make nodejs npm patch gcc-c++ >& $LOG_FILE
build_err $? "yum install"

export NODE_TLS_REJECT_UNAUTHORIZED=0
npm ci >& $LOG_FILE
build_err $? "install dependency"

cd ..
rm -rf node-sass
if [ -z "$url" ]; then
    url=https://gitee.com/mirrors/node-sass.git
fi
git clone -b v5 --recursive $url >& $LOG_FILE
build_err $? "clone repo"

cd node-sass
cp ../A-Tune-UI/arm-support.patch .
patch -p1 < arm-support.patch >& $LOG_FILE
build_err $? "apply patch"

rm -f appveyor.yml
npm i >& $LOG_FILE
build_err $? "build node-sass"

node scripts/build -f >& $LOG_FILE
build_err $? "compile node-sass"
rm -f $LOG_FILE

cd ..
mv node-sass A-Tune-UI/node_modules/
rm -f $LOG_FILE
cd A-Tune-UI

val=`hostname -I|awk -F ' ' '{print $1}'`
sed -i "10s/localhost/$val/" package.json
build_finished
