<template>
  <q-page class="q-py-xl q-mx-auto bg-grey-4" style="overflow: auto">
    <div id="tuning-list-form" style="display: block">
      <q-card class="q-mx-auto tuning-middle">
        <q-tabs
          v-model="listTab"
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
        >
          <q-tab name="all" label="all" @click="getFileList('all')" default />
          <q-tab name="running" label="running" @click="getFileList('running')" />
          <q-tab name="finished" label="finished" @click="getFileList('finished')" />
          <q-tab name="error" label="error" @click="getFileList('error')" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="listTab" animated>
          <q-tab-panel name="all">
            <div class="text-h6 q-px-lg q-pb-lg q-pt-sm" style="min-height: 800px">

              <q-list bordered class="rounded-borders q-my-md" v-for="(file, index) in files" :key="index">

                <q-item clickable v-ripple class="q-px-lg" @click="initialTuningDetails(file)">
                  <q-item-section>
                    <q-item-label lines="1">{{ file.name }}</q-item-label>
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

          <q-tab-panel name="running">
            <div class="text-h6 q-px-lg q-pb-lg q-pt-sm" style="min-height: 800px">
              <q-list bordered class="rounded-borders q-my-md" v-for="(file, index) in files" :key="index">

                <q-item clickable v-ripple class="q-px-lg" @click="initialTuningDetails(file)">
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

          <q-tab-panel name="finished">
            <div class="text-h6 q-px-lg q-pb-lg q-pt-sm" style="min-height: 800px">
              <q-list bordered class="rounded-borders q-my-md" v-for="(file, index) in files" :key="index">

                <q-item clickable v-ripple class="q-px-lg" @click="initialTuningDetails(file)">
                  <q-item-section>
                    <q-item-label lines="1">{{ file.name }}</q-item-label>
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

          <q-tab-panel name="error">
            <div class="text-h6 q-px-lg q-pb-lg q-pt-sm" style="min-height: 800px">
              <q-list bordered class="rounded-borders q-my-md" v-for="(file, index) in files" :key="index">

                <q-item clickable v-ripple class="q-px-lg" @click="initialTuningDetails(file)">
                  <q-item-section>
                    <q-item-label lines="1">{{ file.name }}</q-item-label>
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
        </q-tab-panels>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import Tuning from '../static/js/tuning'

export default {
  ...Tuning
}
</script>

<style>
@import '../css/tuning.css'
</style>

<style lang="sass">
.thead-sticky tr > *,
.tfoot-sticky tr > *
  position: sticky
  opacity: 1
  z-index: 1
  background: black
  color: white

.thead-sticky tr:last-child > *
  top: 0

.tfoot-sticky tr:first-child > *
  bottom: 0
</style>
