<template>
  <q-layout>

    <q-header elevated class="bg-dark text-white">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          A-Tune
        </q-toolbar-title>

        <div>
          <q-input bg-color="grey" rounded outlined v-model="searchText" class="q-pa-xs" dense>
            <template v-slot:append >
              <q-icon v-if="searchText !== ''" name="close" @click="searchText = ''" class="cursor-pointer" />
              <q-icon name="search" />
            </template>
          </q-input>
        </div>

        <div class="q-pa-sm">
          <q-btn-dropdown flat round color="primary" label="Language">
            <q-list>
              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>Chinese</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>English</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>

        <div class="q-pa-sm">
          <q-btn-dropdown flat round color="primary" label="User">
            <q-list>
              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>Profile</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>Log Out</q-item-label>
                </q-item-section>
              </q-item>

            </q-list>
          </q-btn-dropdown>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above :mini="miniState" @mouseover="miniState = false" @mouseout="miniState = true" mini-to-overlay :width="200" :breakpoint="500" bordered content-class="bg-grey-3">
      <q-scroll-area class="fit">
        <q-list padding>
          <q-item to="/" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="dashboard" />
            </q-item-section>

            <q-item-section>
              Dashboard
            </q-item-section>
          </q-item>

          <q-item to="/tuning" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="tune" />
            </q-item-section>

            <q-item-section>
              Tuning
            </q-item-section>
          </q-item>

          <q-item to="/analysis" clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="analytics" />
            </q-item-section>

            <q-item-section>
              Analysis
            </q-item-section>
          </q-item>

          <q-separator />

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="info" />
            </q-item-section>

            <q-item-section>
              About
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="email" />
            </q-item-section>

            <q-item-section>
              Contact
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-item v-ripple style="bottom: 0; position: absolute;">
        <q-item-section style="display: none;">
          <q-icon name="" />
        </q-item-section>

        <q-item-section style="text-align: center;">
          Version 2.0 A-Tune
        </q-item-section>
      </q-item>
    </q-drawer>

    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'layout',
  components: { },
  data () {
    return {
      searchText: '',
      leftDrawerOpen: false,
      miniState: true,
      dense: false
    }
  },
  methods: {
    onItemClick () {
      console.log('---')
    }
  }
}
</script>
