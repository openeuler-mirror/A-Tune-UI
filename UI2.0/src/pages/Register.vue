<template>
  <q-page>
    <div class="row">
      <div class="col-12 col-mod-a row" style="height: 824px; width: 1920px">
        <div class="col">
          <img
            alt="A-Tune piciure"
            src="~assets/login-and-register/login-and-register.png"
            style="margin: 100px 156px 0px 266px"
          />
          <br />
          <a class="text-pic-bottom"
            >A-Tune是一款基于AI开发的系统性能优化引擎</a
          >
        </div>
        <q-card class="register-card">
          <q-card-section>
            <q-form class="q-gutter-md">
              <div class="text-center text-register">注册</div>
              <input class="register-input" placeholder="请输入邮箱" type="email" v-model="user.email" />
              <input class="register-input" placeholder="请输入用户名" type="text" v-model="user.name" />
              <input class="register-input" placeholder="请输入密码" type="password" v-model="user.password" />
              <input class="register-input" placeholder="请输入确认密码" type="password" v-model="user.repassword" />
              <p class="register-hint">{{hint}}</p>
              <div>
                <q-btn @click="onRegisterClick" class="btn-register" unelevated label="立即注册" />
                <div
                  class="text-right row"
                  style="margin-bottom: 40px; justify-content: flex-end"
                >
                  <div style="font-size: 14px">已有账号？</div>
                  <div
                    style="color: #3781de; font-size: 14px; margin-right: 24px"
                    @click="onLoginClick"
                  >
                    点击登录
                  </div>
                </div>
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script src="../js/register.js" language="JavaScript" type="text/javascript"></script>

<style scoped>
@import "../css/register.css";
</style>
