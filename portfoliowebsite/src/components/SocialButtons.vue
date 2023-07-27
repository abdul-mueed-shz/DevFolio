<template>
  <div class="row q-mt-md q-ml-lg text-white">
    <q-btn
      :href="APP_CONSTANTS.socialMediaLinks.github"
      target="_blank"
      round
      :size="$q.screen.lt.sm ? '1rem' : 'lg'"
      class="bg-grey-9 q-mr-sm"
      icon="mdi-github"
    ></q-btn>
    <q-btn
      :href="APP_CONSTANTS.socialMediaLinks.linkedin"
      target="_blank"
      round
      :size="$q.screen.lt.sm ? '1rem' : 'lg'"
      class="bg-blue q-mr-sm"
      icon="mdi-linkedin"
    ></q-btn>
    <q-btn
      href="mailto: abc@example.com"
      target="_blank"
      round
      :size="$q.screen.lt.sm ? '1rem' : 'lg'"
      class="bg-red q-mr-sm"
      icon="mdi-gmail"
    ></q-btn>
    <q-btn
      :href="APP_CONSTANTS.socialMediaLinks.facebook"
      target="_blank"
      round
      :size="$q.screen.lt.sm ? '1rem' : 'lg'"
      class="bg-blue q-mr-sm"
      icon="mdi-facebook"
    ></q-btn>
    <q-btn
      :href="APP_CONSTANTS.socialMediaLinks.twitter"
      target="_blank"
      round
      :size="$q.screen.lt.sm ? '1rem' : 'lg'"
      class="bg-blue q-mr-sm"
      icon="mdi-twitter"
    ></q-btn>
  </div>
  <div
    v-if="props.showContacts"
    class="row q-ml-lg q-gutter-y-xs q-mt-lg text-white"
  >
    <q-btn
      @click="scroll('contact')"
      :size="$q.screen.lt.sm ? '1rem' : 'lg'"
      class="bg-purple-9 q-mr-sm"
      label="Contact me"
    ></q-btn>
    <q-btn
      :size="$q.screen.lt.sm ? '1rem' : 'lg'"
      class="bg-purple-9 q-mr-sm"
      href="https://drive.google.com/file/d/1BjszPP1kew7hgWuInH-rv67okoqjCi1q/view?usp=sharing"
      target="_blank"
      label="See My Resume"
    ></q-btn>
  </div>
</template>

<script setup>
import { APP_CONSTANTS } from "../common/constants/app";
import { scroll } from "../common/functions/utils";

const props = defineProps({
  showContacts: { type: Boolean, default: false },
});
</script>
