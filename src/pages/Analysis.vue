<template>
  <q-page class="q-py-xl q-mx-auto bg-grey-4" style="overflow: auto">
    <div id="analysis-list-form" style="display: block">
      <q-card class="q-mx-auto page-middle" style="">
        <q-tab-panel name="analysis" class="q-mx-auto page-middle">
            <div class="text-h6 q-px-lg q-pb-lg q-pt-sm" style="min-height: 800px">
              <q-list bordered class="rounded-borders q-my-md" v-for="(file, index) in analysis" :key="index">

                <q-item clickable v-ripple class="q-px-lg" @click="initialAnalysisDetails(file, 0)">
                  <q-item-section>
                    <q-item-label lines="1" >{{ file.name }}</q-item-label>
                    <q-item-label caption lines="2">
                      <span class="text-weight-bold"></span>
                      {{ file.info }}
                    </q-item-label>
                  </q-item-section>

                  <q-item-section side class="q-mx-xl text-subtitle1 text-weight-medium">
                    {{ file.status }}
                  </q-item-section>

                  <q-item-section side class="text-subtitle1 text-weight-medium">
                    {{ file.date }}
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
          </q-tab-panel>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import Analysis from '../static/js/analysis.js'

export default {
  ...Analysis
}
</script>

<style>
@import '../css/analysis.css'
</style>
