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

              <q-list bordered class="rounded-borders q-my-md" v-for="(file, index) in files" :key="index" style="display: -webkit-inline-box">

                <q-item clickable v-ripple class="q-px-lg" @click="initialTuningDetails(file)" style="width: 1420px">
                  <q-item-section>
                    <q-item-label lines="1">{{ file.name }}</q-item-label>
                    <q-item-label caption lines="2">
                      <span class="text-weight-bold"></span>
                      ip: {{ file.info }}
                    </q-item-label>
                  </q-item-section>

                  <q-item-section side class="q-mx-xl text-subtitle1 text-weight-medium">
                    {{ file.status }}
                  </q-item-section>

                  <q-item-section side class="text-subtitle1 text-weight-medium">
                    {{ file.date }}
                  </q-item-section>
                </q-item>

                <q-btn-dropdown flat dense dropdown-icon="more_vert" style="margin-top: 8px">
                  <q-item clickable v-close-popup class="text-subtitle1 text-weight-medium" @click="rename(file)" style="">
                    <q-item-section side class="text-subtitle1 text-weight-medium">
                      <q-item-label>Rename</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-btn-dropdown>
              </q-list>
            </div>
          </q-tab-panel>

          <q-tab-panel name="running">
            <div class="text-h6 q-px-lg q-pb-lg q-pt-sm" style="min-height: 800px">
              <q-list bordered class="rounded-borders q-my-md" v-for="(file, index) in files" :key="index" style="display: -webkit-inline-box">

                <q-item clickable v-ripple class="q-px-lg" @click="initialTuningDetails(file)" style="width: 1420px">
                  <q-item-section>
                    <q-item-label lines="1" >{{ file.name }}</q-item-label>
                    <q-item-label caption lines="2">
                      <span class="text-weight-bold"></span>
                      ip: {{ file.info }}
                    </q-item-label>
                  </q-item-section>

                  <q-item-section side class="q-mx-xl text-subtitle1 text-weight-medium">
                    {{ file.status }}
                  </q-item-section>

                  <q-item-section side class="text-subtitle1 text-weight-medium">
                    {{ file.date }}
                  </q-item-section>
                </q-item>

                <q-btn-dropdown flat dense dropdown-icon="more_vert" style="margin-top: 8px">
                  <q-item clickable v-close-popup class="text-subtitle1 text-weight-medium" @click="rename(file)" style="">
                    <q-item-section side class="text-subtitle1 text-weight-medium">
                      <q-item-label>Rename</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-btn-dropdown>
              </q-list>
            </div>
          </q-tab-panel>

          <q-tab-panel name="finished">
            <div class="text-h6 q-px-lg q-pb-lg q-pt-sm" style="min-height: 800px">
              <q-list bordered class="rounded-borders q-my-md" v-for="(file, index) in files" :key="index" style="display: -webkit-inline-box">

                <q-item clickable v-ripple class="q-px-lg" @click="initialTuningDetails(file)" style="width: 1420px">
                  <q-item-section>
                    <q-item-label lines="1">{{ file.name }}</q-item-label>
                    <q-item-label caption lines="2">
                      <span class="text-weight-bold"></span>
                      ip: {{ file.info }}
                    </q-item-label>
                  </q-item-section>

                  <q-item-section side class="q-mx-xl text-subtitle1 text-weight-medium">
                    {{ file.status }}
                  </q-item-section>

                  <q-item-section side class="text-subtitle1 text-weight-medium">
                    {{ file.date }}
                  </q-item-section>
                </q-item>

                <q-btn-dropdown flat dense dropdown-icon="more_vert" style="margin-top: 8px">
                  <q-item clickable v-close-popup class="text-subtitle1 text-weight-medium" @click="rename(file)" style="">
                    <q-item-section side class="text-subtitle1 text-weight-medium">
                      <q-item-label>Rename</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-btn-dropdown>
              </q-list>
            </div>
          </q-tab-panel>

          <q-tab-panel name="error">
            <div class="text-h6 q-px-lg q-pb-lg q-pt-sm" style="min-height: 800px">
              <q-list bordered class="rounded-borders q-my-md" v-for="(file, index) in files" :key="index" style="display: -webkit-inline-box">

                <q-item clickable v-ripple class="q-px-lg" @click="initialTuningDetails(file)" style="width: 1420px">
                  <q-item-section>
                    <q-item-label lines="1">{{ file.name }}</q-item-label>
                    <q-item-label caption lines="2">
                      <span class="text-weight-bold"></span>
                      ip: {{ file.info }}
                    </q-item-label>
                  </q-item-section>

                  <q-item-section side class="q-mx-xl text-subtitle1 text-weight-medium">
                    {{ file.status }}
                  </q-item-section>

                  <q-item-section side class="text-subtitle1 text-weight-medium">
                    {{ file.date }}
                  </q-item-section>
                </q-item>

                <q-btn-dropdown flat dense dropdown-icon="more_vert" style="margin-top: 8px">
                  <q-item clickable v-close-popup class="text-subtitle1 text-weight-medium" @click="rename(file)" style="">
                    <q-item-section side class="text-subtitle1 text-weight-medium">
                      <q-item-label>Rename</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-btn-dropdown>
              </q-list>
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
    <div id="rename-popup-window" style="height: 350px; width: 450px; z-index: 1; display: none" class="bg-grey-3 fixed-center">
      <q-btn flat round color="primary" icon="close" class="absolute-top-right" @click="closeRenamePopUp"/>
      <div id="chart-container" style="height: 250px; width: 350px; margin: 30px">
        <q-form
          @submit="onSubmitRename"
          class="q-ma-lg q-py-lg"
        >
 
          <h6 style="margin: 0">Current Name: </h6>
          <q-input
            filled
            v-model="currFileName"
            label="current file name *"
            readonly 
          /><br>
          <h6 style="margin: 0">New Name: </h6>
          <q-input
            filled
            v-model="newFileName"
            label="new file name *"
          />
          <div id="rename-error-empty" class="text-caption" style="color: red; display: none">Error: New name cannot be empty</div>
          <div id="rename-error-duplicate" class="text-caption" style="color: red; display: none">Error: New name already exist</div>
          <div id="rename-error-same" class="text-caption" style="color: red; display: none">Error: New name cannot same as current name</div>
          <div>
            <q-btn label="Submit" style="float:right; margin-top: 15px" type="submit" color="primary"/>
          </div>
        </q-form>
      </div>
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
