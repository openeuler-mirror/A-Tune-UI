<template>
  <q-layout view="lHh Lpr lFf">
    <q-header style="height: 64px; width: 1920px">
      <q-toolbar class="row" style="justify-content: space-between">
        <div>
          <img
            alt="A-Tune logo"
            src="~assets/layout/logo_03.png"
            style="padding-left: 32px"
          />
        </div>
        <div class="menu-group">
          <!-- style="margin-left: 306.5px" -->
          <button class="menu-btn" label="控制面板" @click="onUserClick">
            控制面板
          </button>
          <button class="menu-btn" label="执行命令" @click="onCommandClick">
            执行命令
          </button>
          <button class="menu-btn" label="实时信息" @click="onInformationClick">
            实时信息
          </button>
          <button class="menu-btn" label="命令记录" @click="onRecordClick">命令记录</button>
          <button class="menu-btn" label="联系我们" @click="onContactClick">联系我们</button>
          <button class="menu-btn" label="关于A-Tune">关于A-Tune</button>
        </div>
        <div>
        <div class="row">
          <input
            id="search-input"
            class="search-input"
            type="text"
            placeholder="请输入..."
          />
          <div class="search-img" @click="showSearchInput"></div>

          <q-btn-dropdown
            flat
            round
            style="color: #222222; font-size: 16px; padding: 0px"
            label="简体中文"
          >
            <q-list>
              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label style="font-size: 12px">简体中文</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label style="font-size: 12px">英文</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>

          <q-avatar size="26px" style="margin: 5px 8px 0px 24px">
            <img src="https://cdn.quasar.dev/img/avatar.png" />
          </q-avatar>

          <q-btn-dropdown
            flat
            round
            style="
              color: #222222;
              font-size: 16px;
              padding: 0px;
              padding-right: 32px;
            "
            label="zhangsan"
          >
            <q-list>
              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label style="font-size: 12px">个人中心</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label style="font-size: 12px" @click="onMainClick"
                    >退出登录</q-item-label
                  >
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script src="../js/userlayout.js" language="JavaScript" type="text/javascript"></script>

<style scoped>
@import "../css/userlayout.css";
</style>