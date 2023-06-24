<template>
  <q-page>
    <div
      class="row"
      style="
        margin: 0 auto;
        width: 1920px;
        height: 100%;
        background-color: #f1f2f6;
      "
    >
      <q-tabs
        class="text-teal"
        active-color="dark"
        v-model="selectedTab"

        vertical>
        <q-tab v-for="tab in tabs" :name="tab.name" :label="tab.label"></q-tab>
      </q-tabs>
      <q-tab-panels v-model="selectedTab" >
        <q-tab-panel v-for="(tab, index) in tabs" :key="index" :name="tab.name">
          <q-splitter
          disable
          :separator-style="{backgroundColor: '#ffffff' }"
          v-model="splitterModel"
          style="height: calc(92vh)"
          >
          <router-view :name="tab.name" />
        </q-splitter>
         
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </q-page>
</template>

<script src="../js/about-A-Tune.js" language="JavaScript" type="text/javascript"></script>

<style scoped>
@import "../css/about-A-Tune.css";
</style>
    