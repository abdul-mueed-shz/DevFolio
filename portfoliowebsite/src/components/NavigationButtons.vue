<template>
  <q-btn
    v-if="$q.screen.width < 1070"
    color="black"
    size="lg"
    flat
    icon="mdi-menu"
  >
    <q-menu
      fit
      auto-close
      class="bg-primary overflow-hidden full-width"
      style="font-size: 1.5em"
    >
      <q-list>
        <q-item @click="scroll('profession')" clickable>
          <q-item-section>Skills</q-item-section>
        </q-item>
        <q-separator color="grey-5"></q-separator>
        <q-item @click="scroll('projects')" clickable>
          <q-item-section>Open Source</q-item-section>
        </q-item>
        <q-separator color="grey-5"></q-separator>

        <q-item @click="scroll('experiences')" clickable>
          <q-item-section>Work experience</q-item-section>
        </q-item>
        <q-separator color="grey-5"></q-separator>

        <q-item @click="scroll('achievements')" clickable>
          <q-item-section>Achievements</q-item-section>
        </q-item>
        <q-separator color="grey-5"></q-separator>

        <q-item @click="scroll('contact')" clickable>
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
        @click="scroll('profession')"
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
        @click="scroll('projects')"
        flat
        rounded
      >
      </q-btn>
    </div>
    <div class="q-mr-xs">
      <q-btn
        class="text-body1"
        no-caps
        size="lg"
        label="Work Experience"
        @click="scroll('experiences')"
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
        @click="scroll('achievements')"
        flat
        rounded
      ></q-btn>
    </div>
    <div class="q-mr-xs">
      <q-btn
        class="text-body1"
        no-caps
        size="lg"
        @click="scroll('contact')"
        label="Contact"
        flat
        rounded
      ></q-btn>
    </div>
  </div>
  <q-toggle
    @click="toggleDarkMode"
    size="lg"
    :color="$q.dark.isActive ? 'white' : 'black'"
    :model-value="$q.dark.isActive"
  ></q-toggle>
</template>

<script setup>
import { ref } from "vue";
import { useQuasar } from "quasar";
import { scroll } from "../common/functions/utils";

const $q = useQuasar();

const emit = defineEmits(["darkMode"]);

function toggleDarkMode() {
  $q.dark.toggle();
  if ($q.dark.isActive) {
    emit("darkMode", true);
    localStorage.setItem("isDarkMode", true);
  } else {
    emit("darkMode", false);
    localStorage.setItem("isDarkMode", false);
  }
}
</script>
