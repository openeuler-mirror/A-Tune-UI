<template>
  <q-page>
    <div class="row model-realtime">
      <a style="
        color: #222222;
        font-size: 20px;
        margin: 24px 0px 16px 32px;
        font-weight: bold;
      ">数据实时监控</a>
      <div class="col-12 model-realtime-a" style="width: 1856px">
        <div
          class="row"
          style="margin-top: 32px; justify-content: space-between"
        >
          <div class="row" style="margin-left: 32px">
            <div>
              <a>分类:</a>
              <select class="select-first">
                <option disabled selected hidden>Item1</option>
                <option>选项1</option>
                <option>选项2</option>
                <option>选项3</option>
              </select>
            </div>
            <div>
              <a>参数:</a>
              <select class="select-first">
                <option disabled selected hidden>Item1</option>
                <option>选项1</option>
                <option>选项2</option>
                <option>选项3</option>
              </select>
            </div>
            <div>
              <a>区间:</a>
              <select class="select-first">
                <option disabled selected hidden>Item1</option>
                <option>选项1</option>
                <option>选项2</option>
                <option>选项3</option>
              </select>
            </div>
            <div>
              <a>周期:</a>
              <select class="select-first">
                <option disabled selected hidden>Item1</option>
                <option>选项1</option>
                <option>选项2</option>
                <option>选项3</option>
              </select>
            </div>
            <div>
              <a>图标样式:</a>
              <select class="select-first">
                <option disabled selected hidden>Item1</option>
                <option>选项1</option>
                <option>选项2</option>
                <option>选项3</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 echarts-model" style="width: 1856px; height: 900px">
        <div class="row" style="margin: 32px 16px 0px 32px">
          <div class="module-size">
            <div class="row picture-alignment">
              <div class="title">图1</div>
              <div class="control-delete"></div>
            </div>
            <div id="main2" class="col echarts-element"></div>
          </div>
          <div class="module-size">
            <div class="row picture-alignment">
              <div class="title">图2</div>
              <div class="control-delete"></div>
            </div>
            <div id="main4" class="col echarts-element"></div>
          </div>
          <div class="module-size">
            <div class="row picture-alignment">
              <div class="title">图3</div>
              <div class="control-delete"></div>
            </div>
            <div id="main1" class="col echarts-element"></div>
          </div>
          <div class="module-size">
            <div class="row picture-alignment">
              <div class="title">图4</div>
              <div class="control-delete"></div>
            </div>
            <div id="main3" class="col echarts-element"></div>
          </div>
        </div>
        <img
          alt="No information"
          src="../assets/realtime-information/no-information.png"
          style="margin-top: 20%; margin-left: 42%; display: none"
        />
      </div>
    </div>
  </q-page>
</template>

<script src="../js/realtime-information.js" language="JavaScript" type="text/javascript"></script>

<style scoped>
@import "../css/realtime-information.css";
@import "../css/common.css";
</style>
    