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
        >数据实时监控</a
      >
      <div
        class="col-12 col-module"
        style="
          width: 1856px;
          height: 108px;
          margin: 0px 32px 32px 32px;
          background-color: #ffffff;
        "
      >
        <div class="row" style="margin-top: 32px;justify-content:space-between;">
          <div class="row" style="margin-left: 32px">
            <div>
              <a>分类:</a>
              <select class="select-first">
                <option disabled selected hidden>--请选择--</option>
                <option>选项1</option>
                <option>选项2</option>
                <option>选项3</option>
              </select>
            </div>
            <div>
              <a>参数:</a>
              <select class="select-first">
                <option disabled selected hidden>--请选择--</option>
                <option>选项1</option>
                <option>选项2</option>
                <option>选项3</option>
              </select>
            </div>
            <div>
              <a>区间:</a>
              <select class="select-first">
                <option disabled selected hidden>--请选择--</option>
                <option>选项1</option>
                <option>选项2</option>
                <option>选项3</option>
              </select>
            </div>
            <div>
              <a>周期:</a>
              <select class="select-first">
                <option disabled selected hidden>--请选择--</option>
                <option>选项1</option>
                <option>选项2</option>
                <option>选项3</option>
              </select>
            </div>
            <div>
              <a>图表样式:</a>
              <select class="select-first">
                <option disabled selected hidden>--请选择--</option>
                <option>选项1</option>
                <option>选项2</option>
                <option>选项3</option>
              </select>
            </div>
          </div>
          <button class="btn-submit">提交</button>
        </div>
      </div>
      <div
        class="col-12 col-module"
        style="
          width: 1856px;
          height: 900px;
          margin: 0px 32px 32px 32px;
          background-color: #ffffff;
        "
      >
        <div style="margin-top: 32px">暂无数据</div>
      </div>
    </div>
  </q-page>
</template>

<script>
</script>

<style scoped>
.col-module {
  background-color: #f1f2f6;
}
.select-first {
  margin: 0px 32px 0px 8px;
  padding: 0px 16px;
  height: 32px;
  width: 210px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  color: #222222;
  font-size: 14px;
  outline: none;
}
.btn-submit {
  border-radius: 4px;
  margin-right: 32px;
  height: 32px;
  width: 110px;
  background-color: #3781de;
  color: #ffffff;
  font-size: 14px;
  border: 1px solid #3781de;
  cursor: pointer;
}
</style>
    