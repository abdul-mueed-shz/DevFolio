<template>
  <q-layout view="lHh Lpr lFf">
    <!-- <q-header elevated> -->
    <q-header class="text-black">
      <q-toolbar>
        <q-toolbar-title
          class="text-h4 q-pt-lg text-weight-bold augustina-font"
        >
          {{ user_name }}
        </q-toolbar-title>
        <q-btn
          v-if="$q.screen.width < 1070"
          color="black"
          size="lg"
          flat
          icon="mdi-menu"
        >
          <q-menu
            fit
            class="bg-primary overflow-hidden full-width"
            style="font-size: 1.5em"
          >
            <q-list>
              <q-item clickable>
                <q-item-section>Skills</q-item-section>
              </q-item>
              <q-separator color="grey-5"></q-separator>
              <q-item clickable>
                <q-item-section>Open Source</q-item-section>
              </q-item>
              <q-separator color="grey-5"></q-separator>

              <q-item clickable>
                <q-item-section>Work experience</q-item-section>
              </q-item>
              <q-separator color="grey-5"></q-separator>

              <q-item clickable>
                <q-item-section>Achievements</q-item-section>
              </q-item>
              <q-separator color="grey-5"></q-separator>

              <q-item clickable>
                <q-item-section>Contact</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
        <div v-else class="row q-ma-sm">
          <div class="q-mr-xs">
            <q-btn
              class="text-body1"
              size="lg"
              no-caps
              label="Skills"
              flat
              rounded
            ></q-btn>
          </div>
          <div class="q-mr-xs">
            <q-btn
              class="text-body1"
              size="lg"
              no-caps
              label="Open Source"
              flat
              rounded
            ></q-btn>
          </div>
          <div class="q-mr-xs">
            <q-btn
              class="text-body1"
              no-caps
              size="lg"
              label="Work Experience"
              flat
              rounded
            ></q-btn>
          </div>
          <div class="q-mr-xs">
            <q-btn
              class="text-body1"
              no-caps
              size="lg"
              label="Achievements"
              flat
              rounded
            ></q-btn>
          </div>
          <div class="q-mr-xs">
            <q-btn
              class="text-body1"
              no-caps
              size="lg"
              label="Contact"
              flat
              rounded
            ></q-btn>
          </div>
        </div>
        <q-toggle
          @click="$q.dark.toggle()"
          size="lg"
          color="black"
          :model-value="$q.dark.isActive"
        ></q-toggle>
      </q-toolbar>
    </q-header>

    <q-drawer
      :mini="true"
      v-model="leftDrawerOpen"
      :show-if-above="false"
      bordered
    >
      <q-list> </q-list>
    </q-drawer>

    <q-page-container class="Montserrat-Regular">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";

import { useQuasar } from "quasar";
const $q = useQuasar();

const leftDrawerOpen = ref(false);
const user_name = ref("<Abdul Mueed Shahbaz />");

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>

<style>
@font-face {
  font-family: augustina;
  src: url(../assets/fonts/Agustina.woff);
}
@font-face {
  font-family: Montserrat-Regular;
  src: url(../assets/fonts/Montserrat-Regular.woff);
}

.augustina-font {
  font-family: "augustina";
}
.Montserrat-Regular {
  font-family: "Montserrat", sans-serif;
}
</style>
