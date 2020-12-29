<template>
  <q-page
    class="window-height window-width row justify-center items-center"
  >
    <div class="column q-pa-lg" id="login">
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
               v-model="email"
               lazy-rules
               :rules="[ val => val != null && val.length > 0 || 'Please input valid email' ]"
               type="email" label="Email">
                <template v-slot:prepend>
                  <q-icon name="email" />
                </template>
              </q-input>
              <q-input square clearable
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
            <q-btn unelevated size="lg" color="indigo-8" class="full-width text-white" label="Log In" @click="checkLogin()"/>
          </q-card-actions>
        </q-card>
      </div>
    </div>
    <div class="column q-pa-lg" id="signup" style="display: none">
      <div class="row">
        <q-card square class="shadow-24" style="width:300px;height:485px">
          <q-card-section class="bg-indigo-10">
            <h4 class="text-h5 text-white q-my-md q-mx-sm">Registration</h4>
            <div class="absolute-bottom-right q-pr-md" style="transform: translateY(50%);">
              <q-btn fab icon="close" color="indigo-5" @click="displayRegist()"/>
            </div>
          </q-card-section>
          <q-card-section>
            <q-form class="q-px-sm q-pt-lg">
              <q-input square clearable 
               v-model="email"
               lazy-rules
               :rules="[ val => val != null && val.length > 0 || 'Please input valid email',
                         val => val.length < 41 || 'Invalid length (>40)' ]"
               type="email" label="Email">
                <template v-slot:prepend>
                  <q-icon name="email" />
                </template>
              </q-input>
              <q-input square clearable
               v-model="username"
               lazy-rules
               :rules="[ val => val != null && val.length > 0 || 'Please input valid username',
                         val => val.length < 25 || 'Invalid length (>24)' ]"
               type="username" label="Username">
                <template v-slot:prepend>
                  <q-icon name="person" />
                </template>
              </q-input>
              <q-input square clearable
               v-model="password"
               lazy-rules
               :rules="[ val => val != null && val.length > 0 || 'Please input valid password',
                         val => val.length < 25 || 'Invalid length (>24)' ]"
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
            <q-btn unelevated size="lg" color="indigo-8" class="full-width text-white" label="Sign Up" @click="checkSignup()"/>
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
