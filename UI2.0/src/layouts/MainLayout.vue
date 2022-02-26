<template>
  <q-layout view="lHh Lpr lFf">
    <q-header style="height: 64px; width: 1920px">
      <q-toolbar class="row" style="justify-content:space-between;">
        <img
          alt="A-Tune logo"
          src="~assets/layout/logo_03.png"
          style="padding-left: 32px"
        />

        <div class="button-group row">
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
            style="color: #000000; font-size: 12px; padding: 0px"
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

          <q-btn
            flat
            style="color: #000000; margin: 0px; padding: 0px 24px; height: 32px"
            label="登录"
            size="sm"
            @click="onLoginClick"
          ></q-btn>
          <q-btn
            flat
            style="
              background: #3681de;
              color: white;
              margin-right: 32px;
              height: 32px;
              width: 64px;
            "
            label="注册"
            size="sm"
            @click="onRegisterClick"
          ></q-btn>
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script src="../js/mainlayout.js" language="JavaScript" type="text/javascript"></script>

<style scoped>
@import "../css/userlayout.css";
</style>