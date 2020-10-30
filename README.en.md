English | [简体中文](./README-zh.md)

## Introduction

**A-Tune-UI** is a Web project relys on [A-Tune](https://gitee.com/openeuler/A-Tune).



## Installation

#### Approach #1：Shell script

```bash
sh install.sh
```
> If shell end with error, please follow the install manual


#### Approach #2：Install manual

##### 1. Install dependent system softwar packages

```bash
yum install -y npm nodejs gcc-c++ make patch
```

##### 2. Install dependent packages for NPM

```bash
npm ci
```
##### 3. Compile node-sass package

```bash
git clone -b v5 --recursive https://github.com/sass/node-sass.git
cd node-sass
git am arm-support.patch
npm i
node scripts/build -f
```

##### 4. Move node-sass into A-Tune-UI

```bash
mv node-sass A-Tune-UI/node_modules
```



## Running

##### 1. (Optional) Change the IP address

If your web page will not open in localhost, please follow this step to change your web IP address

```bash
hostname -I  # To get host IP
```
Then open 'package.json' file, swap 'localhost' to your host IP in line 10.
##### 2. Running
```bash
npm run start
```
This command will return url for web page

> Note: If A-Tune is not running, you can still get the web page but has no data on your page



## Relate Information

##### A-Tune
A-Tune project：https://gitee.com/openeuler/A-Tune
