<template>
  <q-layout view="hHh Lpr lFf">
    <q-page-container class="Montserrat-Regular">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import { APP_CONSTANTS } from "../common/constants/app";

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
