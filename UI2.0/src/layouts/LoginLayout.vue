<template>
  <q-layout view="lHh Lpr lFf">
    <q-header style="height: 64px; width: 1920px">
      <q-toolbar>
        <img
          alt="A-Tune logo"
          src="~assets/layout/logo_03.png"
          style="padding-left: 32px"
          @click="onMainClick"
        />
        <!-- <q-toolbar-title class="text-dark"> A-Tune </q-toolbar-title> -->
        <div class="button-group">
          <q-btn
            flat
            style="
              color: #222222;
              font-size: 16px;
              margin: 0px;
              padding: 0px 24px;
              height: 32px;
            "
            label="首页"
            size="sm"
            @click="onMainClick"
          ></q-btn>
          <select class="select-lang">
            <option selected>简体中文</option>
            <option>English</option>
          </select>
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script src="../js/loginlayout.js" language="JavaScript" type="text/javascript"></script>

<style scoped>
@import "../css/loginlayout.css";
</style>
