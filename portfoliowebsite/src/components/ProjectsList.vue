<template>
  <div class="text-h3 q-my-md">
    {{ projectTitle }}
  </div>
  <div class="row">
    <div
      class="col-12 col-md-6 q-px-sm q-py-md"
      v-for="project in projectsList"
      :key="project.projTitle"
    >
      <q-card
        @click="() => (project?.projLink ? openLink(project.projLink) : null)"
        bordered
        class="custom-text full-height card q-pa-md border-radius__16px"
      >
        <div
          class="row q-px-md flex items-center"
          :class="{ 'justify-center': $q.screen.lt.md }"
        >
          <q-icon :name="projectTitleIcon"></q-icon>
          <div>{{ project.projTitle }}</div>
        </div>
        <div style="font-size: large" class="row q-px-md flex items-center">
          <div>
            {{ project.projDesc }}
          </div>
        </div>
        <div
          v-if="project.responsibilities"
          class="column q-py-sm"
          style="font-size: large"
        >
          <div class="q-pl-md text-weight text-bold text-grey-7">
            <q-icon name="mdi-briefcase"></q-icon> My responsibilities
          </div>
          <q-list
            v-for="(responsibility, index) in project.responsibilities"
            :key="index"
            style="font-size: smaller"
          >
            <q-item
              class="q-mr-md q-my-xs"
              style="border-bottom: 1px dotted gray; border-radius: 8px"
              v-ripple
            >
              <q-item-section side>
                <q-icon color="yellow-9" name="mdi-star"></q-icon
              ></q-item-section>
              <q-item-section>{{ responsibility }}</q-item-section>
            </q-item>
          </q-list>
        </div>

        <div class="row q-px-md flex items-center">
          <q-icon
            class="q-mr-xs"
            :name="languageConf.icon"
            :size="languageConf.iconsSize"
            :color="languageConf.iconColor"
          ></q-icon>
          <div>{{ project.language }}</div>
          <div v-if="starsConf" class="row flex items-center">
            <q-icon
              class="q-ml-md"
              :name="starsConf.icon"
              :size="starsConf.iconSize"
              :color="starsConf.iconColor"
            ></q-icon>
            <div>{{ project.stars }}</div>
          </div>
          <div v-if="pullReqsConf" class="row flex items-center">
            <q-icon
              class="q-ml-lg"
              :name="pullReqsConf.icon"
              :size="pullReqsConf.iconSize"
            ></q-icon>
            <div>{{ project.pullReqs }}</div>
          </div>
        </div>
      </q-card>
    </div>
  </div>
</template>

<script setup>
import { openLink } from "src/common/functions/utils";
const props = defineProps({
  pullReqsConf: {
    type: Object,
    required: false,
    default: null,
  },
  starsConf: {
    type: Object,
    required: false,
    default: null,
  },
  languageConf: {
    type: Object,
    required: true,
  },
  projectsList: {
    type: Object,
    required: true,
  },
  projectTitle: {
    type: String,
    required: true,
  },
  projectTitleIcon: {
    type: String,
    required: true,
  },
});
</script>
