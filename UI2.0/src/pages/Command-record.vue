<template>
  <q-page>
    <div class="row main-bg-style">
      <a
        style="
          color: #222222;
          font-size: 20px;
          margin: 24px 0px 16px 32px;
          font-weight: bold;
        "
        >命令记录</a
      >
      <div
        class="col-12 col-module"
        style="
          width: 1856px;
          height: 1000px;
          margin: 0px 32px 32px 32px;
          background-color: #ffffff;
        "
      >
        <div class="row" style="justify-content: space-between">
          <div class="btn-grp">
            <button
              style="
                border-top-left-radius: 4px;
                border-bottom-left-radius: 4px;
                margin-left: 32px;
              "
              @click="curPage = 1;getRecord('command')"
            >
              全部
            </button>
            <button style="width: 95px" @click="curPage = 1;getRecord('tuning');">离线调优</button>
            <button
              style="
                border-top-right-radius: 4px;
                border-bottom-right-radius: 4px;
              "
              @click="curPage = 1;getRecord('analysis')"
            >
              在线调优
            </button>
          </div>
          <div class="container">
            <form action="" class="parent">
              <input type="text" class="search" placeholder="搜索" />
              <input type="button" name="" id="" class="btn" />
            </form>
          </div>
        </div>
        <div style="width: 1792px; max-height: 950px">
          <table class="record-list">
            <thead>
              <tr>
                <th style="padding-left: 24px">序号</th>
                <th style="padding-left: 13px; width: 300px">
                  <a style="margin-right: 8px">|</a>命令/ID
                </th>
                <th style="padding-left: 13px">
                  <a style="margin-right: 8px">|</a>IP地址
                </th>
                <th style="padding-left: 13px">
                  <a style="margin-right: 8px">|</a>任务状态
                  <img src="../assets/common/filter-default.png" />
                </th>
                <th style="padding-left: 13px">
                  <a style="margin-right: 8px">|</a>开始时间
                  <q-icon
                    name="unfold_more"
                    style="font-size: 17px; margin-left: 2px"
                  ></q-icon>
                </th>
                <th style="padding-left: 13px; width: 600px">
                  <a style="margin-right: 8px">|</a>描述
                </th>
                <th style="padding-left: 13px; width: 150px">
                  <a style="margin-right: 8px">|</a>操作
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in recordList">
                <td>{{ index+1 }}</td>
                <td><q-icon name="edit"></q-icon>{{ item.name }}</td>
                <td>{{ item.ip }}</td>
                <td>
                  <div>
                    <div class="row" v-show="item.status == 'running'">
                      <div class="state-icon state-icon-running" ></div>
                      <div>running</div>
                    </div>
                    <div class="row" v-show="item.status == 'finished'">
                      <div class="state-icon state-icon-finish" ></div>
                      <div>finished</div>
                    </div>
                    <div class="row" v-show="item.status == 'failed'">
                      <div class="state-icon state-icon-failed" ></div>
                      <div>failed</div>
                    </div>                    
                  </div>
                </td>
                <td>{{ item.date }}</td>
                <td><q-input outlined placeholder="--双击输入描述信息--" v-model="descriptionList[index]"
                    @blur="updateRecordDescription(index, item.id)"  @keyup.enter="updateRecordDescription(index, item.id)"/></td>
                <td>
                  <button class="operation-btn" @click="getRecordDetail(item.type, item.id, item.mid)">
                    详情
                  </button>
                  <button class="operation-btn">删除</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          class="row"
          style="justify-content: space-between; margin: 24px 32px 32px 32px"
        >
          <div style="padding-top: 8px">共{{recordNum}}条数据</div>
          <div>

            <div style="float: left">
              <q-pagination
                v-model="curPage"
                :max="recordNum % 15 == 0 && recordNum != 0 ? recordNum / 15 : recordNum / 15 + 1"
                direction-links
                flat
                color="blue"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script src="../js/command-record.js" language="JavaScript" type="text/javascript"></script>

<style scoped>
@import "../css/command-record.css";
@import "../css/common.css";
</style>
