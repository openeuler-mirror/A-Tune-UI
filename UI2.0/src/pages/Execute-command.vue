<template>
  <q-page>
    <div
      class="row"
      style="
        justify-content: flex-start;
        width: 1920px;
        background-color: #f1f2f6;
      "
    >
      <a
        style="
          color: #222222;
          font-size: 20px;
          margin: 24px 0px 16px 32px;
          font-weight: bold;
        "
        >执行命令</a
      >
      <div
        class="col-12"
        style="
          width: 1856px;
          margin: 0px 32px 32px 32px;
          background-color: #ffffff;
        "
      >
        <div style="margin-top: 32px">
          <!-- 第一行 -->
          <div class="row">
            <a
              style="
                color: #222222;
                font-size: 16px;
                margin-left: 32px;
                margin-top: 4px;
                margin-bottom: 24px;
                float: left;
                font-weight: bold;
              "
            >
              选择运行模式
            </a>
            <img
              style="
                height: 16px;
                width: 16px;
                margin-top: 8px;
                margin-left: 8px;
              "
              src="../assets/execute-command/help-default.png"
            />
            <div class="btn-group">
              <button
                style="
                  border-top-left-radius: 4px;
                  border-bottom-left-radius: 4px;
                  margin-left: 96px;
                "
                @click="showClickmode"
              >
                单机模式
              </button>
              <button style="width: 95px" @click="showNodemode">
                分节点模式
              </button>
              <button
                style="
                  border-top-right-radius: 4px;
                  border-bottom-right-radius: 4px;
                "
                @click="showClustermode"
              >
                集群模式
              </button>
            </div>
          </div>

          <!-- 第二行 -->
          <div id="click-mode" style="display: block">
            <div class="row" style="margin-left: 248px">
              <div>
                <a>Client IP</a>
                <select class="select-first">
                  <option disabled selected hidden>--请选择--</option>
                  <option>选项1</option>
                  <option>选项2</option>
                  <option>选项3</option>
                </select>
              </div>
            </div>
          </div>
          <div id="node-mode" style="display: none">
            <div class="row" style="margin-left: 248px">
              <div>
                <a>Client IP</a>
                <select class="select-first">
                  <option disabled selected hidden>--请选择--</option>
                  <option>选项1</option>
                  <option>选项2</option>
                  <option>选项3</option>
                </select>
              </div>
              <div>
                <a>atuned IP</a>
                <select class="select-first">
                  <option disabled selected hidden>--请选择--</option>
                  <option>选项1</option>
                  <option>选项2</option>
                  <option>选项3</option>
                </select>
              </div>
            </div>
          </div>
          <div id="cluster-mode" style="display: none">
            <div class="row" style="margin-left: 248px">
              <div>
                <a>Client IP</a>
                <select class="select-first">
                  <option disabled selected hidden>--请选择--</option>
                  <option>选项1</option>
                  <option>选项2</option>
                  <option>选项3</option>
                </select>
              </div>
              <div>
                <a>atuned IP</a>
                <select class="select-first">
                  <option disabled selected hidden>--请选择--</option>
                  <option>选项1</option>
                  <option>选项2</option>
                  <option>选项3</option>
                </select>
              </div>
              <div>
                <a>atuned IP</a>
                <select class="select-first">
                  <option disabled selected hidden>--请选择--</option>
                  <option>选项1</option>
                  <option>选项2</option>
                  <option>选项3</option>
                </select>
              </div>
            </div>
          </div>

          <!-- 第三行 -->
          <div class="row">
            <a
              style="
                color: #222222;
                font-size: 16px;
                margin-left: 32px;
                margin-bottom: 24px;
                float: left;
                font-weight: bold;
              "
            >
              发起命令
            </a>
            <img
              style="
                height: 16px;
                width: 16px;
                margin-top: 5px;
                margin-left: 8px;
              "
              src="../assets/execute-command/help-default.png"
            />
            <button class="btn-atune-adm" @click="closeAddparameter">
              atune-adm
            </button>
            <button class="btn-add-parameter" @click="showAddparameter">
              <q-icon
                name="add"
                style="font-size: 22px; padding-right: 6px"
              ></q-icon
              >添加参数
            </button>
            <select
              id="select-tunning"
              class="select-first"
              style="width: 120px; margin-bottom: 24px"
              @click="showTunningselect"
            >
              <option hidden>Tunning</option>
              <option grade="1" value="a">选项1</option>
              <option grade="2" value="b">选项2</option>
              <option grade="3" value="c">选项3</option>
            </select>
          </div>
          <div id="add-parameter-1" style="display: none">
            <!-- 第四行  -->
            <div class="row">
              <input
                style="margin: 4px 8px 0px 248px; padding-top: 5px"
                type="checkbox"
                value=""
              /><a style="margin-right: 8px">--address</a>
              <input class="please-input" type="text" placeholder="请输入" />
              <input
                style="margin: 4px 8px 0px 0px; padding-top: 5px"
                type="checkbox"
                value=""
              /><a style="margin-right: 8px">--port</a>
              <input class="please-input" type="text" placeholder="请输入" />
              <input
                style="margin: 4px 8px 0px 0px; padding-top: 5px"
                type="checkbox"
                value=""
              /><a style="margin-right: 32px">--help</a>
              <input
                style="margin: 4px 8px 0px 0px; padding-top: 5px"
                type="checkbox"
                value=""
              /><a style="margin-right: 8px">--Version</a>
            </div>
          </div>
          <div id="tunning-select" style="display: none">
            <!-- 第五行 -->
            <div class="row">
              <input
                style="margin: 4px 8px 0px 248px; padding-top: 5px"
                type="radio"
                value=""
              /><a style="margin-right: 18.87px">--profile</a>
              <input
                class="please-input"
                style="margin-bottom: 24px"
                type="text"
                placeholder="请输入"
              />
            </div>

            <!-- 第六行 -->
            <div class="row">
              <input
                style="margin: 8px 8px 0px 248px; padding-top: 5px"
                type="radio"
                value=""
              /><a style="margin-right: 18.87px; margin-top: 5px"
                >勾选下列文件</a
              >
              <button
                class="btn-add-parameter"
                style="margin-bottom: 8px; margin-left: 650px; cursor: pointer"
              >
                <q-icon
                  name="add"
                  style="font-size: 22px; padding-right: 6px"
                ></q-icon
                >添加参数
              </button>
            </div>
            <!-- 第七行 -->
            <table class="selectfile-table">
              <tr>
                <th style="text-align: center; padding-left: 0px; width: 102px">
                  <input type="checkbox" value="" />
                </th>
                <th style="width: 320px">
                  <a style="margin-right: 8px">|</a>文件名称
                </th>
                <th style="width: 320px">
                  <a style="margin-right: 8px">|</a>命令
                </th>
                <th><a style="margin-right: 8px">|</a>操作</th>
              </tr>
              <tr>
                <td style="text-align: center; padding-left: 0px">
                  <input type="checkbox" value="" />
                </td>
                <td>D:\Ccde\mkcert</td>
                <td>UTF-8</td>
                <td><button class="table-button">删除</button></td>
              </tr>
              <tr>
                <td style="text-align: center; padding-left: 0px">
                  <input type="checkbox" value="" />
                </td>
                <td>D:\Ccde\python3</td>
                <td>UTF-8</td>
                <td><button class="table-button">删除</button></td>
              </tr>
            </table>
            <!-- 第八行 -->
            <button
              style="
                height: 48px;
                width: 883.44px;
                background-color: #fff;
                margin-left: 248px;
                border: 1px dashed #cccccc;
                color: #999999;
                margin-bottom: 20px;
                cursor: pointer;
              "
            >
              <q-icon name="add" style="margin-right: 8px"></q-icon>添加文件
            </button>
            <!-- 第九行 -->
            <div class="row">
              <input
                style="margin: 4px 8px 0px 248px; padding-top: 5px"
                type="checkbox"
                value=""
              /><a style="margin-right: 32px">--help</a>
              <input
                style="margin: 4px 8px 0px 0px; padding-top: 5px"
                type="checkbox"
                value=""
              /><a style="margin-right: 8px">--address</a>
              <input
                class="please-input"
                type="text"
                placeholder="请输入"
                style="margin-bottom: 32px"
              />
              <input
                style="margin: 4px 8px 0px 0px; padding-top: 5px"
                type="checkbox"
                value=""
              />
              <input
                class="please-input"
                type="text"
                placeholder="请输入"
                style="margin-bottom: 32px"
              />
            </div>
          </div>
          <!-- 第十行 -->
          <div style="z-index: auto; position: absolute; margin-top: 10px">
            <button
              style="
                height: 32px;
                width: 32px;
                padding: 0px;
                margin: 5px 20px 0px 1760px;
                background-color: #fff;
                box-shadow: 4px 4px 3px #e6e6e6;
                border: none;
                border-radius: 4px;
              "
            >
              <q-icon
                name="fullscreen"
                style="font-size: 28px; color: #999999"
              ></q-icon>
            </button>
          </div>
          <div class="textbox-div">
            <textarea class="command-textbox" readonly="readonly">
Iroot@localhost   atuned-adm-info
Inco rrect Isage
NAME
atuned-adm info-display p rofile info ℃ 0 rresponding to specified profile
USAGE
atune-adm info [profile]
DESCRIPTION:
diaplay p rofile into ℃ 0 rresponding to profile
atund-adm:"info" re ulres exactl 1 argument (s)
Iroot@localhost~] #atune-adm list
            </textarea>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script src="../js/execute-command.js" language="JavaScript" type="text/javascript"></script>

<style scoped>
@import "../css/execute-command.css";
</style>
    