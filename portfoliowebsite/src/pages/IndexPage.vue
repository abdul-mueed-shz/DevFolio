<template>
  <q-header>
    <q-toolbar :class="{ 'bg-dark font-white': isDarkMode }" class="text-black">
      <q-toolbar>
        <q-toolbar-title
          class="text-h4 q-pt-lg text-weight-bold augustina-font"
        >
          {{ `<${APP_CONSTANTS.username}>` }}
        </q-toolbar-title>
        <navigation-buttons @dark-mode="(val) => (isDarkMode = val)" />
      </q-toolbar>
    </q-toolbar>
  </q-header>
  <!-- <q-drawer
    :mini="ministate"
    :breakpoint="20"
    show-if-above
    bordered
    mini-width="30"
    class="flex flex-center"
  >
    <q-list class="text-white">
      <q-item>
        <q-item-section side>
          <q-icon name="mdi-account"></q-icon>
        </q-item-section>
        <q-item-section>YO</q-item-section>
      </q-item>
      <q-item>
        <q-item-section side>
          <q-icon name="mdi-language-javascript"></q-icon>
        </q-item-section>
        <q-item-section>YO</q-item-section>
      </q-item>
      <q-item>
        <q-item-section side>
          <q-icon name="mdi-book"></q-icon>
        </q-item-section>
        <q-item-section>YO</q-item-section>
      </q-item>
      <q-item>
        <q-item-section side>
          <q-icon name="mdi-mail"></q-icon>
        </q-item-section>
        <q-item-section>YO</q-item-section>
      </q-item>
      <q-item>
        <q-item-section side>
          <q-icon name="mdi-git"></q-icon>
        </q-item-section>
        <q-item-section>YO</q-item-section>
      </q-item>
    </q-list>
  </q-drawer> -->
  <q-page padding>
    <div id="greetings">
      <div class="row">
        <div
          :class="{ 'items-center col-12': breakpoint }"
          class="col-7 column justify-center q-py-md q-mt-xl"
        >
          <div v-if="$q.screen.width > 775" class="text-h3 q-mb-md">
            {{ APP_CONSTANTS.greetingsOBJ.greetingText() }}
            <q-img
              :style="APP_CONSTANTS.greetingsOBJ.greetingGIF.gifWidth"
              :src="APP_CONSTANTS.greetingsOBJ.greetingGIF.gifLink"
            ></q-img>
          </div>
          <div
            :class="{
              'text-center': breakpoint,
            }"
            class="custom-text"
          >
            {{ APP_CONSTANTS.introductionOBJ.position }}
            <q-img
              :style="APP_CONSTANTS.introductionOBJ.introductionGIF.gifWidth"
              :src="APP_CONSTANTS.introductionOBJ.introductionGIF.gifLink"
            ></q-img>
            {{ APP_CONSTANTS.introductionOBJ.introduction }}
          </div>
          <div class="q-ml-lg">
            <social-buttons :show-contacts="true"></social-buttons>
          </div>
        </div>
        <div
          :class="{ 'order-first col-12': breakpoint }"
          class="col-4 q-pa-md q-py-xl"
        >
          <q-img
            :src="APP_CONSTANTS.introductionOBJ.introImage.imgLink"
            :style="APP_CONSTANTS.introductionOBJ.introImage.style"
          ></q-img>
        </div>
      </div>
    </div>

    <div id="profession">
      <div class="row q-mt-xl">
        <div :class="{ 'col-12': breakpoint }" class="col-6 q-pa-md">
          <q-img
            :src="APP_CONSTANTS.profession.sideImage.imgLink"
            :style="APP_CONSTANTS.profession.sideImage.style"
          ></q-img>
        </div>
        <div
          :class="{ 'text-center col-12': breakpoint }"
          class="col-6 q-py-md column justify-center"
        >
          <div class="text-h3 q-mb-md">
            {{ APP_CONSTANTS.profession.title }}
          </div>
          <div class="custom-text">
            <div>{{ APP_CONSTANTS.profession.body }}</div>
            <div class="q-my-sm">
              <q-icon
                v-for="technology in APP_CONSTANTS.profession.technologies
                  .iconsList"
                :key="technology.icon"
                :color="technology.iconColor"
                :name="technology.icon"
                :size="APP_CONSTANTS.profession.technologies.iconsSize"
              ></q-icon>
            </div>
            <div class="column">
              <div
                v-for="skill in APP_CONSTANTS.profession.skills.skillList"
                :key="skill"
              >
                <q-icon
                  :color="APP_CONSTANTS.profession.skills.skillIcon.iconColor"
                  :name="APP_CONSTANTS.profession.skills.skillIcon.icon"
                ></q-icon>
                {{ skill }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div :class="{ 'text-center': breakpoint }" id="proficiency">
      <div class="text-h3 q-my-md">{{ APP_CONSTANTS.proficiecy.title }}</div>
      <div class="column text-weight-thin custom-text">
        <div
          v-for="skill in APP_CONSTANTS.proficiecy.skills.skillList"
          :key="skill.title"
        >
          <div>{{ skill.title }}</div>
          <q-slider
            disable
            :model-value="skill.sliderValue"
            :min="APP_CONSTANTS.proficiecy.skills.minSliderVal"
            :max="APP_CONSTANTS.proficiecy.skills.maxSliderVal"
            :color="APP_CONSTANTS.proficiecy.skills.sliderColor"
            :inner-track-color="APP_CONSTANTS.proficiecy.skills.innerTrackColor"
            :track-size="APP_CONSTANTS.proficiecy.skills.trackSize"
            :thumb-size="APP_CONSTANTS.proficiecy.skills.thumbSize"
            :thumb-color="APP_CONSTANTS.proficiecy.skills.thumbColor"
          />
        </div>
      </div>
    </div>

    <div :class="{ 'text-center': breakpoint }" id="experiences">
      <div class="text-h3 q-my-md">{{ APP_CONSTANTS.experiences.title }}</div>
      <div class="row">
        <div
          v-for="experience in APP_CONSTANTS.experiences.expList"
          :key="experience.entityName"
          class="col-12 col-sm-6 col-md-3 q-pa-xs q-py-md"
        >
          <q-card class="full-height">
            <q-card-section
              :class="experience.expCardBg"
              class="text-center text-white"
            >
              <div class="q-ma-lg text-h4">{{ experience.entityName }}</div>
              <q-avatar
                class="absolute-center"
                :style="experience.entityLogo.style"
              >
                <img :src="experience.entityLogo.logo" />
              </q-avatar>
            </q-card-section>
            <q-card-section class="column text-center">
              <div class="text-weight-medium q-my-xs custom-text">
                {{ experience.position }}
              </div>
              <div class="text-bold q-mb-md">{{ experience.duration }}</div>
              <div class="" style="font-size: 1.5em">
                {{ experience.description }}
              </div>
            </q-card-section>
            <q-separator inset color="grey-9"></q-separator>
            <div class="text-center" style="font-size: 1.2em">
              <q-list
                v-for="(responsibility, index) in experience.responsibilities"
                :key="index"
                v-ripple
                class=""
              >
                <q-item>
                  <q-item-section>
                    {{ responsibility }}
                  </q-item-section>
                </q-item>
                <q-separator
                  v-if="index != experience.responsibilities.length - 1"
                  inset
                  color="grey-9"
                ></q-separator>
              </q-list>
            </div>
          </q-card>
        </div>
      </div>
    </div>

    <div :class="{ 'text-center': breakpoint }" id="projects">
      <div class="text-h3 q-my-md">
        {{ APP_CONSTANTS.openSourceProjs.title }}
      </div>
      <div class="row">
        <div
          class="col-12 col-md-6 q-pa-sm q-py-md"
          v-for="project in APP_CONSTANTS.openSourceProjs.projects"
          :key="project.projTitle"
        >
          <q-card class="custom-text q-pa-md">
            <div class="row flex items-center">
              <q-icon :name="APP_CONSTANTS.openSourceProjs.titleIcon"></q-icon>
              <div>{{ project.projTitle }}</div>
            </div>
            <div style="font-size: large" class="row flex items-center">
              <div>
                {{ project.projDesc }}
              </div>
            </div>
            <div class="row flex items-center">
              <q-icon
                class="q-mr-xs"
                :name="APP_CONSTANTS.openSourceProjs.languageConf.icon"
                :size="APP_CONSTANTS.openSourceProjs.languageConf.iconsSize"
                :color="APP_CONSTANTS.openSourceProjs.languageConf.iconColor"
              ></q-icon>
              <div>{{ project.language }}</div>
              <q-icon
                class="q-ml-md"
                :name="APP_CONSTANTS.openSourceProjs.starsConf.icon"
                :size="APP_CONSTANTS.openSourceProjs.starsConf.iconSize"
                :color="APP_CONSTANTS.openSourceProjs.starsConf.iconColor"
              ></q-icon>
              <div>{{ project.stars }}</div>
              <q-icon
                class="q-ml-lg"
                :name="APP_CONSTANTS.openSourceProjs.pullReqsConf.icon"
                :size="APP_CONSTANTS.openSourceProjs.pullReqsConf.iconSize"
              ></q-icon>
              <div>{{ project.pullReqs }}</div>
            </div>
          </q-card>
        </div>
      </div>
      <div class="row flex flex-center">
        <q-btn
          :href="APP_CONSTANTS.socialMediaLinks.github"
          target="_blank"
          color="purple-9"
          label="More Projects"
          size="xl"
        ></q-btn>
      </div>
    </div>

    <div :class="{ 'text-center': breakpoint }" id="achievements">
      <div class="text-h3 q-my-md">
        {{ APP_CONSTANTS.achievements.title }}
        <q-icon color="yellow-8" size="lg" name="mdi-trophy"></q-icon>
      </div>
      <div class="q-mb-xs" style="">
        {{ APP_CONSTANTS.achievements.desc }}
      </div>
      <div class="row">
        <div
          v-for="certification in APP_CONSTANTS.achievements.certifications"
          :key="certification.title"
          class="col-12 col-md-6 q-pa-sm q-py-md"
        >
          <q-card class="full-height">
            <q-card-section
              :style="certification.imgSectionHeight"
              class="flex flex-center text-white bg-grey-2"
            >
              <img
                class="full-width"
                :style="certification.imageStyle"
                :src="certification.imageLink"
              />
            </q-card-section>
            <q-card-section class="column text-center">
              <div class="text-weight-bold q-my-xs text-h4">
                {{ certification.title }}
              </div>
              <div class="text-bold q-my-lg">
                {{ certification.position }}
              </div>
              <div class="" style="font-size: 1.5em">
                {{ certification.desc }}
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

    <div id="contact">
      <div
        :class="{ 'flex flex-center': ContactBreakpoint }"
        class="text-h3 q-my-md"
      >
        Reach Out to me!
      </div>
      <div class="row custom-text">
        <div
          class="flex items-center"
          :class="{ 'col-12 flex flex-center': ContactBreakpoint }"
        >
          <q-avatar size="150px" color="purple">
            <q-img :src="APP_CONSTANTS.profilePicture"></q-img>
          </q-avatar>
        </div>
        <div
          :class="{
            'col-12 text-center flex flex-center': ContactBreakpoint,
          }"
          class="column q-ma-lg"
        >
          <div class="q-mb-xs">
            DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.
            <div class="q-mt-sm">OPEN FOR OPPORTUNITIES: YES</div>
          </div>
          <social-buttons></social-buttons>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { APP_CONSTANTS } from "../common/constants/app";
import SocialButtons from "../components/SocialButtons.vue";
import NavigationButtons from "../components/NavigationButtons.vue";

import { useQuasar } from "quasar";
import { computed, ref } from "vue";

//Variables
const $q = useQuasar();

let isDarkMode = ref(localStorage.getItem("isDarkMode") === "true");
$q.dark.set(localStorage.getItem("isDarkMode") === "true");

//Computed properties
const breakpoint = computed(() => {
  return $q.screen.width < 775;
});

const ContactBreakpoint = computed(() => {
  return $q.screen.width < 1316;
});

//Functions
</script>

<style lang="scss">
.custom-text {
  font-size: 1.8em;
}

.font-white {
  color: white !important;
}
</style>
