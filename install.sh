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

build_err()
{
    local ret=$1
    local res=0
    shift
    if [ $ret -ne $res ];then
            echo "==== Error: $@ error ===="
            exit $ret
    else
            echo "==== $@ finished ===="
    fi
}

build_finished()
{
    echo "build finished"
    echo "please change IP under package.json file and then using 'npm run start' to start UI"
    rm -f build.log
}


yum install -y make nodejs npm patch gcc-c++ >& build.log
build_err $? "yum install"

export NODE_TLS_REJECT_UNAUTHORIZED=0
npm ci >& build.log
build_err $? "install dependency"

cd ..
rm -rf node-sass
git clone -b v5 --recursive https://github.com/sass/node-sass.git >& build.log
build_err $? "Clone repo"

cd node-sass
cp ../A-Tune-UI/arm-support.patch .
patch -p1 < arm-support.patch >& build.log
build_err $? "apply patch"

rm -f appveyor.yml
npm i >& build.log
build_err $? "build node-sass"

node scripts/build -f >& build.log
build_err $? "compile node-sass"
rm -f build.log

cd ..
mv node-sass A-Tune-UI/node_modules/
rm -f build.log
cd A-Tune-UI
build_finished