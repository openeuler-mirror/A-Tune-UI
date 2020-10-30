[English](./README.md) | 简体中文

## 介绍

A-Tune-UI是作用于A-Tune的可视化web界面。需要搭配[A-Tune](https://gitee.com/openeuler/A-Tune)项目进行使用



## 安装

#### 方法一：使用自带脚本安装

```bash
sh install.sh
```
如果安装失败，请参考手动安装



#### 方法二：手动安装

##### 1、安装依赖系统软件包

```bash
yum install -y npm nodejs gcc-c++ make patch
```

##### 2、安装依赖UI包

```bash
npm ci
```
##### 3、编译node-sass

```bash
git clone -b v5 --recursive https://github.com/sass/node-sass.git
cd node-sass
git am arm-support.patch
npm i
node scripts/build -f
```

##### 4、将node-sass移动到A-Tune-UI中

```bash
mv node-sass A-Tune-UI/node_modules
```

至此，安装完成。



## 运行

##### 1、（可选）更改IP地址

如果web页面打开地址与当前运行环境地址不同，需要将web使用IP改为大网地址，具体操作步骤如下：
```bash
hostname -I  # 查看当前运行环境ip
打开package.json，替换第10行中localhost为当前运行环境IP
```
##### 2、运行
```bash
npm run start
```
运行成功后返回web网址，用于打开界面

> 注：如果A-Tune项目没有运行，您依然可以看到网页界面，但无法获取具体数据



## 相关信息

##### A-Tune
A-Tune项目地址：https://gitee.com/openeuler/A-Tune
