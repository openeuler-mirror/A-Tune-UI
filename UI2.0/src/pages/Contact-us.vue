<template>
  <q-page>
    <div class="row" style="
    margin: 0 auto;
    width: 1920px;
    background-color: #f1f2f6;
  ">
      <div class="col-12 col-module" style="
      width: 1856px;
      height: 1000px;
      margin: 32px 0px 32px 0px;
      background-color: #ffffff;
    ">
        <div style="margin-top: 32px">
          <a style="
          color: #222222;
          font-size: 20px;
          margin: 24px 0px 16px 64px;
          font-weight: bold;
        ">问题反馈提交表</a>
          <div style="margin-left: 64px">
            <div>
              <a style="color: red">*</a>
              <a>用户名</a>
              <input class="contact-input" type="text" placeholder="请输入用户名" />
            </div>
            <div>
              <a style="color: red">*</a>
              <a>邮箱</a>
              <input class="contact-input" type="text" placeholder="请输入邮箱" style="margin-left: 110px" />
            </div>
            <div class="row">
              <a style="color: red; margin-top: 32px">*</a>
              <a style="margin-top: 32px">问题描述</a>
              <textarea class="contact-textbox" maxlength="490" onchange="this.value=this.value.substring(0, 490)"
                onkeydown="this.value=this.value.substring(0, 490)" onkeyup="this.value=this.value.substring(0, 490)"
                @input="descInput" v-model="desc"></textarea>
              <span class="numLimit">{{ num }}/490</span>
            </div>
            <button class="btn-submit" @click="openAlert">提交</button>
          </div>
          <!-- 弹窗 -->
          <q-card id="submit-alert" class="submit-alert">
            <q-card-section class="row" style="justify-content: space-between">
              <div style="
              color: #222222;
              font-size: 20px;
              padding: 14px 0px 8px 14px;
            ">
                <q-icon name="check_circle" style="color: green; font-size: 26px"></q-icon>
                提交成功
              </div>
              <div class="close-card" @click="closeAlert"></div>
            </q-card-section>
            <a style="margin-left: 32px">我们将以邮件的形式，对您提交的问题进行反馈。</a>
            <!-- --------------------------- -->
            <div class="row" style="position: absolute; bottom: 0px; left: 30%">
              <button class="button-submit-no" @click="closeAlert">取消</button>
              <button class="button-submit-yes">确定</button>
            </div>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script src="../js/contact-us.js" language="JavaScript" type="text/javascript"></script>

<style scoped>
@import "../css/contact-us.css";
</style>
