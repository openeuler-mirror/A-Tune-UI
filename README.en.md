English | [简体中文](./README.md)

## Introduction

**A-Tune-UI** is a Web project relys on [A-Tune](https://gitee.com/openeuler/A-Tune), support for openEuler-20.09 or higher version.



## Installation

#### Prepare

Please remind that some required packages for UI such as nodejs and npm can only find in openeuler-everything.iso.  
Before installing, you should add openeuler-everything to your yum repo:  

1. Open [openeuler.org](https://openeuler.org/en/), click download, then go to corresponding iso.   
2. Click `everything`, then choose architecture (`x86_64/aarch64`), the page address should be yum repo url.  
3. Setting yum repo using url.  

#### Approach #1：Shell script

```bash
sh install.sh
```
> If shell end with error, please follow the install manual


#### Approach #2：Install manual

##### 1. Install dependent system software packages

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

If your web page will not open in localhost, please follow this step to change your web IP address.

```bash
hostname -I  # To get host IP
```
Then open 'package.json' file, swap 'localhost' to your host IP in line 10.

##### 2. Running
```bash
npm run start
```
This command will return url for web page.

> Note: If A-Tune is not running, you can still get the web page but has no data on your page.


## Relate Information

##### A-Tune
A-Tune project: https://gitee.com/openeuler/A-Tune

##### A-Tune-Collector
A-Tune-Collector project: https://gitee.com/openeuler/A-Tune-Collector