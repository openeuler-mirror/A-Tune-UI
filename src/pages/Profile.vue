<template>
  <q-page class="q-py-xl q-mx-auto bg-grey-4" style="overflow: auto">
    <div id="user-info" style="width: 1520px; height: 100px; margin: auto auto 15px auto;" class="bg-white">
       <h3>Hi, {{ userName }}</h3>
       <q-btn rounded outline color="primary" label="Change Password" @click="showPwdPopUp()" />
    </div>
    <div id="ip-info" style="width: 1520px; margin: auto;">
<q-splitter
      v-model="splitterModel"
      style="height: calc(100vh - 500px)"
    >

      <template v-slot:before>
        <q-tabs
          v-model="listIp"
          vertical
          class="text-teal"
        >
          <q-tab v-for="(ip, index) in ips" :key="index" :name="ip" :label="ip" @click="getIpData(ip)" />
          <q-tab name="+ new ip" label="+ new ip" />
        </q-tabs>
      </template>

      <template v-slot:after>
        <q-tab-panels
          v-model="listIp"
          animated
          swipeable
          vertical
          transition-prev="jump-up"
          transition-next="jump-up"
        >
          <q-tab-panel v-for="(ip, index) in ips" :key="index" :name="ip" v-if="!addIp(ip)">

            <q-list bordered class="rounded-borders q-my-md" v-for="(analysis, index) in analysisList" :key="analysis.id" style="display: -webkit-inline-box; width: inherit">

              <q-item clickable v-ripple class="q-px-lg" @click="initialAnalysisDetails(analysis)" style="width: inherit">
                <q-item-section>
                  <q-item-label>Analysis: {{ analysis.name }}</q-item-label>
                </q-item-section>

                <q-item-section side class="q-mx-xl text-subtitle1 text-weight-medium">
                  {{ analysis.status }}
                </q-item-section>

                <q-item-section side class="text-subtitle1 text-weight-medium">
                  {{ analysis.date }}
                </q-item-section>
              </q-item>
            </q-list>

            <q-list bordered class="rounded-borders q-my-md" v-for="(tuning, index) in tuningList" :key="tuning.id" style="display: -webkit-inline-box; width: inherit">

              <q-item clickable v-ripple class="q-px-lg" @click="initialTuningDetails(tuning)" style="width: inherit">
                <q-item-section>
                  <q-item-label>Tuning: {{ tuning.name }}</q-item-label>
                </q-item-section>

                <q-item-section side class="q-mx-xl text-subtitle1 text-weight-medium">
                  {{ tuning.status }}
                </q-item-section>

                <q-item-section side class="text-subtitle1 text-weight-medium">
                  {{ tuning.date }}
                </q-item-section>
              </q-item>
            </q-list>

          </q-tab-panel>

          <q-tab-panel name="+ new ip">
            <q-input v-model="newIp" label="new ip" />
            <q-btn color="white" text-color="black" label="Add" @click="addNewIp()" />
          </q-tab-panel>
        </q-tab-panels>
      </template>

    </q-splitter>
    </div>

    <div id="change-pwd-popup-window" style="z-index: 1; display: none; width: 470px" class="bg-grey-3 fixed-center">
      <q-btn flat round color="primary" icon="close" class="absolute-top-right" @click="closePwdPopUp"/>
      <div id="chart-container" style="margin: 30px">
        <q-form
          @submit="onSubmitPwd"
          class="q-ma-lg q-py-lg"
        >

          <h6 style="margin: 0">Change password: </h6>
          <q-input filled ref="currPwd" v-model="currPasswd" label="Current password *" type="password"
           lazy-rules :rules="[ val => val != null && val.length > 0 || 'Please input valid password' ]" /><br>
          <q-input filled ref="newPwd" v-model="newPasswd" label="New password *" type="password"
           lazy-rules :rules="[ val => val != null && val.length > 0 || 'Invalid new password',
                                val => val.length < 25 || 'Invalid length (>24)' ]" /><br>
          <q-input filled ref="confPwd" v-model="confirmPasswd" label="Confirm password *" type="password"
           lazy-rules :rules="[ val => val != null && val.length > 0 || 'Invalid password' ]" /><br>

          <div id="input-pwd-error" class="text-caption" style="color: red; display: none">Incorrect Password.</div>
          <div id="not-match-error" class="text-caption" style="color: red; display: none">New password and confirm password does not match.</div>
          <div id="change-pwd-error" class="text-caption" style="color: red; display: none">Change password failed.</div>
          <div>
            <q-btn label="Submit" style="float:right; margin: 15px 0 20px 0" type="submit" color="primary" id="detect-btn"/>
          </div>
        </q-form>
      </div>
    </div>

  </q-page>
</template>

<script>
import Profile from '../static/js/profile.js'

export default {
  ...Profile
}
</script>