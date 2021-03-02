English | [简体中文](./README.md)

## Introduction

**A-Tune-UI** is a Web project relys on [A-Tune](https://gitee.com/openeuler/A-Tune), support for openEuler-20.09 or higher version.



## Installation & Usage

### Approach #1: Install and use locally

#### 1. Prepare

Please remind that some required packages for UI such as nodejs and npm can only find in openeuler-everything.iso.  
Before installing, you should add openeuler-everything to your yum repo:  

1. Open [openeuler.org](https://openeuler.org/en/), click download, then go to corresponding iso.   
2. Click `everything`, then choose architecture (`x86_64/aarch64`), the page address should be yum repo url.  
3. Setting yum repo using url.  

#### 2. Installation

#### 2-1. Install using shell script

```bash
sh install.sh
```

This script will clone node-sass from gitee by default, user can change the url of node-sass package by themselves:
```bash
sh install.sh [git_url]
# for example, you can use github url to clone code
# sh install.sh https://github.com/sass/node-sass.git
```

> If shell end with error, please follow the install manual


#### 2-2. Install using manual 

##### 1) Install dependent system software packages

```bash
yum install -y npm nodejs gcc-c++ make patch
```

##### 2) Install dependent packages for NPM

```bash
npm ci
```
##### 3) Compile node-sass package

```bash
git clone -b v5 --recursive https://github.com/sass/node-sass.git
cd node-sass
git am arm-support.patch
npm i
node scripts/build -f
```

##### 4) Move node-sass into A-Tune-UI

```bash
mv node-sass A-Tune-UI/node_modules
```

#### 3. (Optional) Change the IP address

If your web page will not open in localhost, please follow this step to change your web IP address.

```bash
hostname -I  # To get host IP
```
Then open 'package.json' file, swap 'localhost' to your host IP in line 10.

#### 4. Running

```bash
npm run start
```
This command will return url for web page.


### Approach #2: Installing and using docker image

#### 1. Prepare

Before installing, make sure docker and wget tools have already been installed (no need to get all code, just get the Dockerfile):
```bash
yum install -y docker wget
wget https://gitee.com/openeuler/A-Tune-UI/Dockerfile
```

#### 2. Generate docker image

```bash
docker build --network=host -t atune-ui:latest .
```

#### 3. Running

```bash
docker run -p <local_ip>:<local_port>:8080 -e ENG_HOST=<engine-host> -e ENG_PORT=<engine-port> atune-ui
```

Notes:
- 'local_ip' should be your ip address and 'local_port' should be port that not been used. After running, you can open web page by using url: http://<local_ip>:<local_port>.
- 'engine-host' and 'engine-port' are same as ip and port info you set in A-Tune engine.cnf file.

> Note: If A-Tune is not running, you can still get the web page but has no data on your page.


## Relate Information

##### A-Tune
A-Tune project: https://gitee.com/openeuler/A-Tune

##### A-Tune-Collector
A-Tune-Collector project: https://gitee.com/openeuler/A-Tune-Collector