[English](./README.en.md) | 简体中文

## 介绍

A-Tune-UI是作用于A-Tune的可视化web界面，需要搭配[A-Tune](https://gitee.com/openeuler/A-Tune)项目进行使用。  
仅支持openEuler20.09或更高版本的openEuler操作系统使用。



## 使用

### 方法一：本地安装并使用

#### 1、准备

请注意，UI的依赖包npm及nodejs仅存在于openeuler-everything镜像源中，在安装前请配置openeuler-everything为yum源，具体操作如下：  
  
1. 打开[openeuler.org](https://openeuler.org/zh/)，点击`下载`，找到对应版本的镜像源点击`下载`。  
2. 点击`everything`，选择需要的系统版本（`x86_64/aarch64`），此页面地址即为配置使用的url。  
3. 使用url进行yum源配置。  

#### 2、安装

#### 2-1、使用自动化脚本安装

```bash
sh install.sh
```
如果安装失败，请参考手动安装。


#### 2-2、手动安装

##### 1）安装依赖系统软件包

```bash
yum install -y npm nodejs gcc-c++ make patch
```

##### 2）安装依赖UI包

```bash
npm ci
```
##### 3）编译node-sass

```bash
git clone -b v5 --recursive https://github.com/sass/node-sass.git
cd node-sass
git am arm-support.patch
npm i
node scripts/build -f
```

##### 4）将node-sass移动到A-Tune-UI中

```bash
mv node-sass A-Tune-UI/node_modules
```


#### 3、（可选）更改IP地址

如果web页面打开地址与当前运行环境地址不同，需要将web使用IP改为大网地址，具体操作步骤如下：
```bash
hostname -I  # 查看当前运行环境ip
```
打开package.json，替换第10行中localhost为当前运行环境IP


#### 4、运行

```bash
npm run start
```
运行成功后返回web网址，用于打开界面。

**备注**   本项目目前处于开发阶段，如果在安装或运行时遇到问题，请参考[A-Tune-UI操作指南](./Documentation/A-Tune-UI操作指南.md)第4部分常见问题定位，如仍无法解决问题，请在代码仓中提Issue。

### 方法二：安装docker版本

#### 1、确保环境中已安装docker及wget工具（无需获取完整代码仓，只需要获取Dockerfile即可）：

```bash
yum install -y docker wget
wget https://gitee.com/openeuler/A-Tune-UI/Dockerfile
```

#### 2、生成atune-ui镜像：

```bash
docker build --network=host -t atune-ui:latest .
```

#### 3、运行docker：

```bash
docker run -p <local_ip>:<local_port>:8080 -e ENG_HOST=<engine-host> -e ENG_PORT=<engine-port> atune-ui
```

备注：
- local_ip和local_port为当前运行环境的ip和未占用的端口，在运行成功后可以通过http://<local_ip>:<local_port>打开网页。
- engine-host和engine-port对应A-Tune engine.cnf中配置的ip和端口信息。


> 注：如果A-Tune项目没有运行，您依然可以看到网页界面，但无法获取具体数据。



## 相关信息

##### A-Tune
A-Tune项目地址：https://gitee.com/openeuler/A-Tune

##### A-Tune-Collector
A-Tune-Collector项目地址：https://gitee.com/openeuler/A-Tune-Collector