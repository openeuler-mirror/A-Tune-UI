English | [简体中文](./README.md)

## Introduction

**A-Tune-UI** is a web project that relies on [A-Tune](https://gitee.com/openeuler/A-Tune). It supports openEuler-20.09 or later.



## Installation & Usage

### Approach #1: Install and use locally

#### 1. Prepare

Some packages required for the UI, such as **nodejs** and **npm**, can only be found in **openeuler-everything.iso**.  
Before the installation, add **openeuler-everything** to your Yum repo:  

1. Open [openeuler.org](https://openeuler.org/en/) and choose **Download** > **Software Packages**. On the page that is displayed, locate the desired image source and click **Download**.   
2. Click **everything** and click the desired architecture (`x86_64/aarch64`). The page address is the Yum repo URL.  
3. Configure the Yum repo using the URL.  

#### 2. Install

#### 2-1. Install using the shell script

```bash
sh install.sh
```

This script will clone node-sass from Gitee by default. Users can change the URL of the node-sass package by themselves.
```bash
sh install.sh [git_url]
# For example, you can use the GitHub URL to clone code.
# sh install.sh https://github.com/sass/node-sass.git
```

If the installation fails, install it manually.


#### 2-2. Install manually

##### 1) Install dependent system software packages

```bash
yum install -y npm nodejs gcc-c++ make patch
```

##### 2) Install dependent packages for NPM

```bash
npm ci
```
##### 3) Compile the node-sass package

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

If your web page does not open in the local host, change your web IP address as follows:

```bash
hostname -I  # To get host IP
```
Open the **package.json** file and replace **localhost** with your host IP address in line 10.

#### 4. Run

```bash
npm run start
```
This command will return the URL of the web page.

Note: This project is in the development phase. If you encounter any problem during installation or running, locate the problem by referring to section 4 "FAQs" in the [A-Tune-UI Operation Guide](./Documentation/A-Tune-UI操作指南.md). If the problem persists, submit an issue in the code repository.

### Approach #2: Install and use the docker image

#### 1. Prepare

Before installation, make sure Docker and wget tools have already been installed: (You do not need to get all code. Just get the Dockerfile.)
```bash
yum install -y docker wget
wget https://gitee.com/openeuler/A-Tune-UI/Dockerfile
```

#### 2. Generate the Docker image

```bash
docker build --network=host -t atune-ui:latest .
```

#### 3. Run

```bash
docker run -p <local_ip>:<local_port>:8080 -e ENG_HOST=<engine-host> -e ENG_PORT=<engine-port> atune-ui
```

Note:
- **local_ip** should be your IP address and **local_port** should be a port that has not been used. After running, you can open the web page by using the URL: http://<local_ip>:<local_port>.
- **engine-host** and **engine-port** are the same as the IP address and port information you set in the A-Tune engine.cnf file.

> Note: If A-Tune is not running, you can still get the web page but there is no data on your page.


## Related Information

##### A-Tune
A-Tune project: https://gitee.com/openeuler/A-Tune

##### A-Tune-Collector
A-Tune-Collector project: https://gitee.com/openeuler/A-Tune-Collector