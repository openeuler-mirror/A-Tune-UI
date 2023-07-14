<template>
  <q-page>
    <div class="row main-bg-style" style="
        background-color: #f1f2f6;
      ">
      <div class="row">
        <div style="color: #999999; font-size: 14px; margin: 22px 0px 24px 32px">
          在线调优
        </div>
        <div style="color: #222222; font-size: 14px; margin: 22px 16px 24px 0px">
          /{{analysisData.name[0]}}
        </div>
      </div>
      <div>
        <a>workload:</a>
        <input class="online-input" type="text" placeholder="default" />
        <a>VS</a>
        <input class="online-input" type="text" placeholder="请输入" />
        <button class="btn-query" style="margin: 16px 48px 24px 32px">
          查 询
        </button>
      </div>
      <div class="col-12 col-module" style="
          width: 1856px;
          margin: 0px 32px 16px 32px;
          background-color: #ffffff;
        ">
        <div>
          <div style="
              color: #222222;
              font-size: 20px;
              margin: 31px 0px 24px 32px;
              font-weight: bold;
            ">
            配置利用率
          </div>
          <div class="row" style="margin: 0px 32px 16px 32px">
            <div class="configuration" style="border: 0" id="percentage1"></div>
            <div class="configuration" id="percentage2"></div>
            <div class="configuration" id="percentage3"></div>
            <div class="configuration" id="percentage4"></div>
          </div>

        </div>
      </div>
      <div class="col-12 col-module" style="
          width: 1856px;
          margin: 0px 32px 16px 32px;
          background-color: #ffffff;
        ">
        <div class="row" style="justify-content: space-between">
          <a style="
              color: #222222;
              font-size: 20px;
              margin: 31px 0px 24px 32px;
              font-weight: bold;
            ">各命令性能对比</a>
          <div>
            <a style="margin-right: 16px">选择配置</a>
            <select class="select_offline" v-model="configuration.current">
              <option disabled selected hidden>--请选择--</option>
              <option v-for="(type, index) in configuration.lists" :value="type">{{type}}</option>
            </select>
            <a style="margin-right: 16px">选择命令</a>
            <select class="select_offline" @change="selectCommand($event)">
              <option disabled selected hidden>--请选择--</option>
              <option v-show="commands.curPage > 1 && commands.selected < 2" value="prev">上一页</option>
              <option 
                v-for="item in commands.recordList" 
                v-show="IsShowCommandItem(item.name)"
                :value="item.id">{{item.name}}
              </option>
              <option v-show="commands.curPage * 10 < commands.recordNum && commands.selected < 2" 
                      value="next">
                下一页
              </option>
            </select>
            <button class="btn-query">查 询</button>
          </div>
        </div>
        <div class="row">
          <div v-for="(rows, i) in analysisData.header.slice(1,)" 
            class="online-modelstyle" 
            style="margin: 0px 16px 16px 16px"
            v-show="configuration.current === '全部' || rows.split('.')[0] === configuration.current">
            <div class="row" style="justify-content: space-between">
              <div class="model-title">{{rows}}</div>
              <div class="row">
                <div class="control-spread"></div>
                <div class="control-delete"></div>
              </div>
            </div>
            <div :id="`online${i+1}`" class="col" style="width: 586.6px; height: 314px"></div>
          </div>
        </div>
      </div>
      <!-- 参数详情 -->
      <div class="col-12 col-module" style="
          width: 1856px;
          margin: 0px 32px 32px 32px;
          background-color: #ffffff;
        ">
        <div class="row" style="justify-content: space-between">
          <a style="
              color: #222222;
              font-size: 20px;
              margin: 31px 0px 24px 32px;
              font-weight: bold;
            ">参数详情</a>
          <div>
            <select class="select_para">
              <option disabled selected hidden>Columns</option>
              <option>选项1</option>
              <option>选项2</option>
            </select>
          </div>
        </div>
        <div class="q-pa-md">
          <q-table
            :rows="tableData.Rows"
            :columns="tableData.Columns"
            row-key="round"
          ></q-table>
        </div>
        <div class="row" style="justify-content: space-between">
          <a style="
              color: #222222;
              font-size: 20px;
              margin: 31px 0px 24px 32px;
              font-weight: bold;
            ">日志详情</a>
        </div>
        <div class="q-pa-md">
          <q-table
            :rows="tableLog.Rows"
            :columns="tableLog.Columns"
            row-key="round"
          ></q-table>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script src="../js/online-tuning.js" language="JavaScript" type="text/javascript"></script>

<style scoped>
@import "../css/online-tuning.css";
</style>