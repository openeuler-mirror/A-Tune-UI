<template>
  <q-page>
    <div class="row">
      <!-- style="height: 150px" -->
      <div class="col-12 col-mod-a row" style="height: 800px; width: 1920px">
        <div class="col">
          <img
            alt="A-Tune piciure"
            src="~assets/login-picture.jpg"
            style="width: 800px; height: 700px; margin-top: 60px; margin-left: 200px"
          />
        </div>

        <q-card class="login-card">
          <q-card-section>
            <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
              <div class="text-center text-h5 q-py-md">注册</div>
              <q-input outlined placeholder="请输入邮箱" />
              <q-input outlined placeholder="请输入用户名" />
              <q-input outlined placeholder="请输入密码" />
              <!-- lazy-rules :rules="[(val) => (val && val.length > 0) || '请输入密码']" -->
              
              <div>
                <q-btn
                  unelevated
                  style="
                    background-color: #5fa1f8;
                    color: white;
                    width: 368px;
                    height: 46px;
                    margin-top: 20px;
                  "
                  label="立即注册"
                />
                <div
                  class="text-right row"
                  style="margin-top: 20px; justify-content: flex-end"
                >
                  <div style="font-size: 14px">已有账号？</div>
                  <div style="color: #3781de; font-size: 14px" @click="onLoginClick">点击登录</div>
                </div>
                <!-- <q-btn
                  label="Reset"
                  type="reset"
                  color="primary"
                  flat
                  class="q-ml-sm"
                /> -->
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  methods: {
    onSubmit() {},
    onLoginClick() {
      this.$router.push({
        path: "/login",
      });
    },
    
  },
});
</script>

<style>
.col-mod-a {
  background-color: #f1f2f6;
  /* #F3F4F8 */
}
.login-Interface {
  height: 300px;
  width: 200px;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 2px 2px 5px 2px #c2d9f8;
  margin: 40px 80px;
}
.login-card {
  width: 400px;
  height: 440px;
  margin: 180px 250px;
}
</style>
          
    