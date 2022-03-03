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
            style="color: #222222; font-size: 14px; margin: 0px; padding: 0px 24px; height: 32px"
            label="首页"
            size="sm"
            @click="onMainClick"
          ></q-btn>
          <q-btn-dropdown
            flat
            round
            style="color: #222222; font-size: 14px; padding: 0px; margin: 0px 32px 0px 0px"
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
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "LoginLayout",

  components: {},

  methods: {
    onItemClick() {
      // console.log('Clicked on an Item')
    },
    onMainClick() {
      this.$router.push({
        path: "/",
      });
    },
  },

  setup() {},
});
</script>

<style>
.button-group {
  position: absolute;
  right: 0%;
}
</style>
