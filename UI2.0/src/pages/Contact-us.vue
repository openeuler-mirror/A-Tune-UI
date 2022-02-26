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
          height: 1000px;
          margin: 0px 32px 32px 32px;
          background-color: #ffffff;
        "
      >
        <div style="margin-top: 32px">
          <a
            style="
              color: #222222;
              font-size: 20px;
              margin: 24px 0px 16px 32px;
              font-weight: bold;
            "
            >问题反馈提交表</a
          >
          <div style="margin-left: 32px">
            <div>
              <a style="color: red">*</a>
              <a>用户名</a>
              <input
                class="contact-input"
                type="text"
                placeholder="请输入用户名"
              />
            </div>
            <div>
              <a style="color: red">*</a>
              <a>邮箱</a>
              <input
                class="contact-input"
                type="text"
                placeholder="请输入邮箱"
                style="margin-left: 110px"
              />
            </div>
            <div class="row">
              <a style="color: red; margin-top: 32px">*</a>
              <a style="margin-top: 32px">问题描述</a>
              <textarea
                class="contact-textbox"
                maxlength="490"
                onchange="this.value=this.value.substring(0, 490)"
                onkeydown="this.value=this.value.substring(0, 490)"
                onkeyup="this.value=this.value.substring(0, 490)"
                @input="descInput"
                v-model="desc"
              ></textarea>
              <span class="numLimit">{{ num }}/490</span>
            </div>
            <button class="btn-submit" @click="openAlert">提交</button>
          </div>
          <!-- 弹窗 -->
          <q-card id="submit-alert" class="submit-alert">
            <q-card-section class="row" style="justify-content: space-between">
              <div
                style="
                  color: #222222;
                  font-size: 20px;
                  padding: 14px 0px 8px 14px;
                "
              ><q-icon name="check_circle" style="color:green;font-size: 26px"></q-icon>
                提交成功
              </div>
              <div class="close-card" @click="closeAlert"></div>
            </q-card-section>
            <a style="margin-left:32px">我们将以邮件的形式，对您提交的问题进行反馈。</a>
            <!-- --------------------------- -->
            <div class="row" style="position: absolute; bottom: 0px; left: 30%">
              <button class="button-submit-no" @click="closeAlert">
                取消
              </button>
              <button class="button-submit-yes">确定</button>
            </div>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      num: 0,
    };
  },

  methods: {
    descInput() {
      var txtVal = this.desc.length;
      this.num = 0 + txtVal;
    },
    openAlert() {
      document.getElementById("submit-alert").style.display = "block";
    },
    closeAlert() {
      document.getElementById("submit-alert").style.display = "none";
    },
  },
});
</script>

<style scoped>
.col-module {
  background-color: #f1f2f6;
}
.contact-input {
  margin: 32px 0px 0px 96px;
  border-radius: 4px;
  outline: none;
  border: 1px solid #ccc;
  padding-left: 8px;
  height: 32px;
}
.contact-input::-webkit-input-placeholder {
  color: #cccccc;
}
.contact-textbox {
  margin: 32px 0px 0px 82px;
  overflow: auto;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 500px;
  height: 100px;
  outline: none;
}
.numLimit {
  margin-left: -90px;
  margin-top: 140px;
}
.btn-submit {
  margin: 32px 0px 0px 144.04px;
  border-radius: 4px;
  height: 32px;
  width: 110px;
  background-color: #3781de;
  color: #ffffff;
  font-size: 14px;
  border: 1px solid #3781de;
  cursor: pointer;
}
.submit-alert {
  display: none;
  position: absolute;
  top: 30%;
  left: 35%;
  width: 472px;
  height: 240px;
  border: 1px solid #fff;
  background-color: white;
  overflow: auto;
  border-radius: 4px;
}
.close-card {
  height: 24px;
  width: 24px;
  margin-top: 18px;
  background: url(../assets/contact-us/close-default.png) no-repeat;
}
.close-card:hover {
  background: url(../assets/contact-us/close-highlight.png) no-repeat;
}
.button-submit-no {
  background: #fff;
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid #cfcfcf;
  width: 96px;
  height: 32px;
  margin: 8px 8px 24px 0px;
}
.button-submit-yes {
  background: #3781de;
  color: white;
  font-size: 14px;
  border: 0;
  border-radius: 4px;
  width: 96px;
  height: 32px;
  margin: 8px 0px 24px 0px;
}
/* 设置滚动条的样式 */
::-webkit-scrollbar {
  width: 12px;
  padding-right: 8px;
}
/* 滚动槽 */
::-webkit-scrollbar-track {
  border-radius: 10px;
  padding-right: 8px;
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: #cccccc;
}
</style>
    