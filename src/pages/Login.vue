<template>
  <q-page
    class="window-height window-width row justify-center items-center"
  >
    <div class="column q-pa-lg" id="initial" style="display: none">
      <div class="row">
        <q-card square class="shadow-24" style="width:300px;height:470px">
          <q-card-section class="bg-indigo-10">
            <h4 class="text-h5 text-white q-my-md q-mx-sm">Create Admin Account</h4>
          </q-card-section>
          <q-card-section>
            <q-form class="q-px-sm q-pt-lg">
              <q-input square clearable 
               ref="emailInput"
               v-model="email"
               type="email"
               label="admin@openeuler.org"
               readonly
              >
                <template v-slot:prepend>
                  <q-icon name="email" />
                </template>
              </q-input>
              <q-input square clearable
               ref="nameInput"
               v-model="username"
               type="username"
               label="Admin"
               readonly
              >
                <template v-slot:prepend>
                  <q-icon name="person" />
                </template>
              </q-input>
              <q-input square clearable
               ref="pwdInput"
               v-model="password"
               counter maxlength="24"
               lazy-rules
               :rules="[ val => val != null && val.length > 0 || 'Please input valid password' ]"
               type="password" label="Password">
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
              </q-input>
            </q-form>
            <div id="admin-create-error" class="text-caption q-px-sm" style="color: red; display: none">Create admin account failed.</div>
          </q-card-section>
          <q-card-actions class="q-px-lg q-pt-xs">
            <q-btn unelevated size="lg" color="indigo-8" class="full-width text-white" style="margin-bottom: 10px" label="Create" @click="createAdmin()"/>
          </q-card-actions>
        </q-card>
      </div>
    </div>

    <div id="seven-day-data" class="q-pa-lg" style="white-space: pre;"></div>

    <div class="column q-pa-lg" id="login" style="display: none">
      <div class="row">
        <q-card square class="shadow-24" style="width:300px;height:485px;">
          <q-card-section class="bg-indigo-10">
            <h4 class="text-h5 text-white q-my-md q-mx-sm">A-Tune</h4>
            <div class="absolute-bottom-right q-pr-md" style="transform: translateY(50%);">
              <q-btn fab icon="add" color="indigo-5" @click="displayRegist()"/>
            </div>
          </q-card-section>
          <q-card-section>
            <q-form class="q-px-sm q-pt-xl">
              <q-input square clearable
               ref="emailInput"
               v-model="email"
               lazy-rules
               :rules="[ val => val != null && val.length > 0 || 'Please input valid email' ]"
               type="email" label="Email">
                <template v-slot:prepend>
                  <q-icon name="email" />
                </template>
              </q-input>
              <q-input square clearable
               ref="pwdInput"
               v-model="password"
               lazy-rules
               :rules="[ val => val != null && val.length > 0 || 'Please input valid password' ]"
               type="password" label="Password">
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
              </q-input>
            </q-form>
            <div id="login-incorrect-error" class="text-caption q-px-sm" style="color: red; display: none">Incorrect email or password.</div>
          </q-card-section>
          <q-card-actions class="q-px-lg q-mb-lg">
            <q-btn unelevated size="lg" color="indigo-8" class="full-width text-white" style="margin-bottom: 10px" label="Log In" @click="checkLogin()"/>
            <q-btn unelevated size="lg" color="indigo-3" class="full-width text-white" label="Reset" @click="resetLogin()"/>
          </q-card-actions>
        </q-card>
      </div>
    </div>
    <div class="column q-pa-lg" id="signup" style="display: none">
      <div class="row">
        <q-card square class="shadow-24" style="width:300px;height:530px">
          <q-card-section class="bg-indigo-10">
            <h4 class="text-h5 text-white q-my-md q-mx-sm">Registration</h4>
            <div class="absolute-bottom-right q-pr-md" style="transform: translateY(50%);">
              <q-btn fab icon="close" color="indigo-5" @click="displayRegist()"/>
            </div>
          </q-card-section>
          <q-card-section>
            <q-form class="q-px-sm q-pt-lg">
              <q-input square clearable
               ref="emailInput"
               v-model="email"
               counter maxlength="40"
               lazy-rules
               :rules="[ val => val != null && val.length > 0 || 'Please input valid email' ]"
               type="email" label="Email">
                <template v-slot:prepend>
                  <q-icon name="email" />
                </template>
              </q-input>
              <q-input square clearable
               ref="nameInput"
               v-model="username"
               counter maxlength="24"
               lazy-rules
               :rules="[ val => val != null && val.length > 0 || 'Please input valid username' ]"
               type="username" label="Username">
                <template v-slot:prepend>
                  <q-icon name="person" />
                </template>
              </q-input>
              <q-input square clearable
               ref="pwdInput"
               v-model="password"
               counter maxlength="24"
               lazy-rules
               :rules="[ val => val != null && val.length > 0 || 'Please input valid password' ]"
               type="password" label="Password">
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
              </q-input>
            </q-form>
            <div id="signup-email-error" class="text-caption q-px-sm" style="color: red; display: none">Please input valid email.</div>
            <div id="signup-email-dup-error" class="text-caption q-px-sm" style="color: red; display: none">This email has been used.</div>
            <div id="signup-create-error" class="text-caption q-px-sm" style="color: red; display: none">Create new account failed. </div>
          </q-card-section>
          <q-card-actions class="q-px-lg q-pt-xs">
            <q-btn unelevated size="lg" color="indigo-8" class="full-width text-white" style="margin-bottom: 10px" label="Sign Up" @click="checkSignup()"/>
            <q-btn unelevated size="lg" color="indigo-3" class="full-width text-white" label="Reset" @click="resetLogin()"/>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import Login from '../static/js/login.js'

export default {
  ...Login
}
</script>
