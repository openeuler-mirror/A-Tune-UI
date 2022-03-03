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
        <div class="row" style="justify-content:space-between;">
          <div class="btn-grp">
            <button
              style="
                border-top-left-radius: 4px;
                border-bottom-left-radius: 4px;
                margin-left: 32px;
              "
            >
              全部
            </button>
            <button style="width: 95px">离线调优</button>
            <button
              style="
                border-top-right-radius: 4px;
                border-bottom-right-radius: 4px;
              "
            >
              在线调优
            </button>
          </div>
          <div class="container">
            <form action="" class="parent">
              <input type="text" class="search" placeholder="请输入" />
              <input type="button" name="" id="" class="btn" />
            </form>
          </div>
        </div>
        <div class="q-pa-md" style="width: 1856px">
          <q-table :rows="data" :columns="columns" row-key="name"></q-table>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script src="../js/command-record.js" language="JavaScript" type="text/javascript"></script>

<style scoped>
@import "../css/command-record.css";
</style>