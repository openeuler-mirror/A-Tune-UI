<template>
  <q-page>
    <div class="row model-personal">
      <a>个人中心</a>
      <div class="col-12 model-personal-a" style="width: 1856px">
        <div
          class="row"
          style="margin-top: 32px; justify-content: space-between"
        >
          <div class="row">
            <q-avatar
              size="100px"
              style="margin-left: 32px; margin-bottom: 32px; margin-right: 32px"
            >
              <img src="../assets/personal/head.jpg" />
            </q-avatar>
            <div>
              <div
                style="
                  color: #1d68c4;
                  font-size: 20px;
                  margin-bottom: 16px;
                  margin-top: 16px;
                "
              >
                {{$store.state.User.userInfo.name}}
              </div>
              <div style="color: #1d68c4; font-size: 14px">
                {{$store.state.User.userInfo.description}}
              </div>
            </div>
          </div>
          <div>
            <button class="setup-btn" @click="popWin">基本设置</button>
            <button
              class="setup-btn"
              style="margin-right: 32px"
              @click="popWinpass"
            >
              密码修改
            </button>
          </div>
        </div>
      </div>
      <div class="col-12 IP-model" style="width: 1856px; height: 900px">
        <div class="row">
          <a class="IP-record" style="margin-top: 32px">IP记录</a>
        </div>
        <table class="task-list">
          <tr>
            <th style="padding-left: 24px; width: 100px">序号</th>
            <th style="padding-left: 13px; width: 220px">
              <a style="margin-right: 8px">|</a>IP地址
            </th>
            <th style="padding-left: 13px">
              <a style="margin-right: 8px">|</a>备注
            </th>
            <th style="padding-left: 13px; width: 200px">
              <a style="margin-right: 8px">|</a>操作
            </th>
          </tr>
          <tr>
            <td>1</td>
            <td>9.10.33.13</td>
            <td><input class="remarks" placeholder="请输入备注" /></td>
            <td>
              <button class="operation-btn">删除</button>
            </td>
          </tr>
          <tr class="alt">
            <td>2</td>
            <td>9.10.33.13</td>
            <td><input class="remarks" placeholder="请输入备注" /></td>
            <td>
              <button class="operation-btn">删除</button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>9.10.33.13</td>
            <td><input class="remarks" placeholder="请输入备注" /></td>
            <td>
              <button class="operation-btn">删除</button>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>9.10.33.13</td>
            <td><input class="remarks" placeholder="请输入备注" /></td>
            <td>
              <button class="operation-btn">删除</button>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>9.10.33.13</td>
            <td><input class="remarks" placeholder="请输入备注" /></td>
            <td>
              <button class="operation-btn">删除</button>
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>9.10.33.13</td>
            <td><input class="remarks" placeholder="请输入备注" /></td>
            <td>
              <button class="operation-btn">删除</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </q-page>
  <div id="fade" class="black_overlay"></div>
  <div>
    <q-card id="light" class="pop-win">
      <q-card-section class="row" style="justify-content: space-between">
        <div class="card-title">基本信息</div>
        <div class="close-card" @click="closeWin"></div>
      </q-card-section>
      <div>
        <div class="essential-info">
          <a>头像：</a>
          <q-avatar size="100px" style="margin-left: 16px">
            <img src="../assets/personal/head.jpg" />
          </q-avatar>
        </div>
        <div class="essential-info">
          <a>昵称：</a>
          <input
            v-model="basicInfo.name"
            class="info-input"
            placeholder="请输入"
            style="margin-top: 24px; margin-bottom: 16px"
          />
        </div>
        <div class="essential-info row">
          <a>签名：</a>
          <textarea
            v-model="basicInfo.description"
            class="info-input"
            placeholder="请输入"
            style="height: 100px"
          ></textarea>
        </div>
      </div>
      <!-- --------------------------- -->
      <div class="row" style="position: absolute; bottom: 0px; left: 30%">
        <button class="button-add-chart-no" @click="closeWin">取消</button>
        <button class="button-add-chart-yes" @click="changeBasicInfo">确定</button>
      </div>
    </q-card>
    <q-card id="card-password" class="pop-win" style="height: 320px">
      <q-card-section class="row" style="justify-content: space-between">
        <div class="card-title" @click="changePwd">修改密码</div>
        <div class="close-card" @click="closeWinpass"></div>
      </q-card-section>
      <div>
        <div class="essential-info">
          <a>旧密码</a>
          <input
            v-model="password.oldPassword"
            class="info-password"
            placeholder="--请输入--"
            style="margin-top: 24px; margin-left: 44px"
            type="password"
          />
        </div>
        <div class="essential-info">
          <a>新密码</a>
          <input
            v-model="password.newPassword"
            class="info-password"
            placeholder="--请输入--"
            style="margin-left: 44px"
            type="password"
          />
        </div>
        <div class="essential-info">
          <a>确认新密码</a>
          <input  
            v-model="password.renewPassword" 
            class="info-password" 
            placeholder="--请输入--" 
            type="password"
          />
        </div>
        <p style="margin-left: 31px; font-size: 16px; color: red;">{{ password.hint }}</p>
      </div>
      <!-- --------------------------- -->
      <div class="row" style="position: absolute; bottom: 0px; left: 30%">
        <button class="button-add-chart-no" @click="closeWinpass">取消</button>
        <button class="button-add-chart-yes" @click="changePwd">确定</button>
      </div>
    </q-card>
  </div>
</template>

<script src="../js/personal.js" language="JavaScript" type="text/javascript"></script>

<style scoped>
@import "../css/personal.css";
@import "../css/common.css";
</style>
