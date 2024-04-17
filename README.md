[![Build Status](https://travis-ci.org/Baidu-AIP/nodejs-sdk.svg?branch=master)](https://travis-ci.org/Baidu-AIP/nodejs-sdk)
[![npm](https://img.shields.io/npm/v/baidu-aip-sdk.svg)](https://www.npmjs.com/package/baidu-aip-sdk)

# 安装百度 AI 开放平台 Node.js SDK

**Node.js SDK 目录结构**

        ├── src
        │  ├── auth                                //授权相关类
        │  ├── http                                //Http通信相关类
        │  ├── client                              //公用类
        │  ├── util                                //工具类
        │  └── const                               //常量类
        ├── AipOcr.js                              //文字识别交互类
        ├── AipFace.js                             //人脸识别交互类
        ├── AipNlp.js                              //语言处理基础技术交互类
        ├── AipContentCensor.js                    //内容审核交互类
        ├── AipImageClassify.js                    //图像识别交互类
        ├── AipImageSearch.js                      //图像搜索交互类
        ├── AipKg.js                               //知识图谱交互类
        ├── AipSpeech.js                           //语音合成&语音识别交互类
        ├── index.js                               //入口文件
        └── package.json                           //npm包描述文件

**支持 node 版本 4.0+**

**直接使用 Node.js 开发包步骤如下：**

1.在[官方网站](http://ai.baidu.com/sdk)下载 Node.js SDK 压缩包。

2.将下载的`aip-node-sdk-version.zip`解压后，复制到工程文件夹中。

3.进入目录，运行 npm install 安装 sdk 依赖库

4.把目录当做模块依赖

其中，`version`为版本号，添加完成后，用户就可以在工程中使用百度 AI 开放平台 Node.js SDK。

**直接使用 npm 安装依赖：**

```
npm install @h7ml/baidu-aip-sdk
```

# 详细使用文档

参考[百度 AI 开放平台官方文档](http://ai.baidu.com/docs)
