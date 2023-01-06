<template>
  <q-layout view="lHh Lpr lFf">
    <q-header style="height: 64px; min-width: 1920px">
      <q-toolbar class="row" style="justify-content: space-between">
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
          <select class="select-lang">
            <option selected>简体中文</option>
            <option>English</option>
          </select>
          <q-btn
            v-show="DBCollect"
            flat
            style="
              color: #000000;
              font-size: 16px;
              margin: 0px;
              padding: 0px 24px;
              height: 32px;
            "
            label="登录"
            size="sm"
            @click="onLoginClick"
          ></q-btn>
          <q-btn
            v-show="DBCollect"
            flat
            style="
              background: #3681de;
              color: white;
              margin-right: 32px;
              height: 32px;
              width: 64px;
              font-size: 16px;
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
@import "../css/mainlayout.css";
</style>