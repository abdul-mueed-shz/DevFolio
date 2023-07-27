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
          :class="{ 'items-center col-12': APP_BREAKPOINTS.breakpoint }"
          class="col-7 column justify-center q-py-md q-mt-xl"
        >
          <div v-if="APP_BREAKPOINTS.breakpointr" class="text-h3 q-mb-md">
            {{ APP_CONSTANTS.greetingsOBJ.greetingText() }}
            <q-img
              :style="APP_CONSTANTS.greetingsOBJ.greetingGIF.gifWidth"
              :src="APP_CONSTANTS.greetingsOBJ.greetingGIF.gifLink"
            ></q-img>
          </div>
          <div
            :class="{
              'text-center': APP_BREAKPOINTS.breakpoint,
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
          <div class="full-width">
            <social-buttons :show-contacts="true"></social-buttons>
          </div>
        </div>
        <div
          :class="{ 'order-first col-12': APP_BREAKPOINTS.breakpoint }"
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
        <div
          :class="{ 'col-12': APP_BREAKPOINTS.breakpoint }"
          class="col-6 q-pa-md"
        >
          <q-img
            :src="APP_CONSTANTS.profession.sideImage.imgLink"
            :style="APP_CONSTANTS.profession.sideImage.style"
          ></q-img>
        </div>
        <div
          :class="{ 'text-center col-12': APP_BREAKPOINTS.breakpoint }"
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

    <div
      :class="{ 'text-center': APP_BREAKPOINTS.breakpoint }"
      id="proficiency"
    >
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

    <div
      :class="{ 'text-center': APP_BREAKPOINTS.breakpoint }"
      id="experiences"
    >
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
              <div class="relative-position q-pt-lg">
                <q-avatar class="absolute-center q-pt-sm" size="4.8rem">
                  <img :src="experience.entityLogo.logo" />
                </q-avatar>
              </div>
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
    <!-- TITLE: CONFIDENTIAL PROJECTS -->
    <div :class="{ 'text-center': APP_BREAKPOINTS.breakpoint }" id="projects">
      <ProjectsList
        :project-title="APP_CONSTANTS.proprietaryProjects.title"
        :project-title-icon="APP_CONSTANTS.proprietaryProjects.titleIcon"
        :projects-list="APP_CONSTANTS.proprietaryProjects.projects"
        :language-conf="APP_CONSTANTS.openSourceProjs.languageConf"
      />
    </div>

    <!-- TITLE: OPEN SOURCE PROJECTS -->
    <div :class="{ 'text-center': APP_BREAKPOINTS.breakpoint }" id="projects">
      <ProjectsList
        :project-title="APP_CONSTANTS.openSourceProjs.title"
        :project-title-icon="APP_CONSTANTS.openSourceProjs.titleIcon"
        :projects-list="APP_CONSTANTS.openSourceProjs.projects"
        :language-conf="APP_CONSTANTS.openSourceProjs.languageConf"
        :stars-conf="APP_CONSTANTS.openSourceProjs.starsConf"
        :pull-reqs-conf="APP_CONSTANTS.openSourceProjs.pullReqsConf"
      />
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

    <div
      :class="{ 'text-center': APP_BREAKPOINTS.breakpoint }"
      id="achievements"
    >
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
        :class="{ 'flex flex-center': APP_BREAKPOINTS.ContactBreakpoint }"
        class="text-h3 q-my-md"
      >
        Reach Out to me!
      </div>
      <div class="row custom-text">
        <div
          class="flex items-center"
          :class="{
            'col-12 flex flex-center': APP_BREAKPOINTS.ContactBreakpoint,
          }"
        >
          <q-avatar size="15rem" color="purple">
            <q-img :src="APP_CONSTANTS.profilePicture"></q-img>
          </q-avatar>
        </div>
        <div
          :class="{
            'col-12 text-center flex flex-center':
              APP_BREAKPOINTS.ContactBreakpoint,
          }"
          class="column"
        >
          <div class="q-mb-xs">
            <div class="q-pt-sm">
              DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR
              ALL.
            </div>
            <div class="q-mt-sm">OPEN FOR OPPORTUNITIES: YES</div>
          </div>
          <social-buttons></social-buttons>
        </div>
      </div>

      <!-- TITLE:GENERAL INFO -->
      <div v-if="false" class="row q-pt-md">
        <div class="col-12 col-md-4">
          <q-card bordered>
            <q-card-section class="row">
              <div class="col-1 flex flex-center">
                <q-icon
                  color="secondary"
                  name="mdi-map-marker"
                  size="xl"
                ></q-icon>
              </div>
              <div class="column q-pl-sm">
                <div class="text-h6 text-weight-bold">
                  {{ APP_CONSTANTS.introductionOBJ.address.title }}
                </div>
                <div>{{ APP_CONSTANTS.introductionOBJ.address.value }}</div>
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div :class="{ 'q-px-sm': $q.screen.gt.sm }" class="col-12 col-md-4">
          <q-card bordered>
            <q-card-section class="row">
              <div class="col-1 flex flex-center">
                <q-icon color="secondary" name="mdi-mail" size="xl"></q-icon>
              </div>
              <div class="column q-pl-md">
                <div class="text-h6 text-weight-bold">
                  {{ APP_CONSTANTS.introductionOBJ.mail.title }}
                </div>
                <div>{{ APP_CONSTANTS.introductionOBJ.mail.value }}</div>
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-md-4">
          <q-card bordered>
            <q-card-section class="row">
              <div class="col-1 flex flex-center">
                <q-icon
                  color="secondary"
                  name="mdi-card-account-phone"
                  size="xl"
                ></q-icon>
              </div>
              <div class="column q-pl-md">
                <div class="text-h6 text-weight-bold">
                  {{ APP_CONSTANTS.introductionOBJ.phone.title }}
                </div>
                <div>{{ APP_CONSTANTS.introductionOBJ.phone.value }}</div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>

      <q-card v-if="false" bordered class="q-mt-md q-py-md">
        <q-card-section>
          <div class="row">
            <div class="col q-pl-md q-pr-sm">
              <q-input color="secondary" outlined label="Your Name"></q-input>
            </div>
            <div class="col q-pr-md q-pl-sm">
              <q-input color="secondary" outlined label="Your Email"></q-input>
            </div>
          </div>
        </q-card-section>
        <q-card-section>
          <div class="row">
            <div class="col q-pl-md q-pr-sm">
              <q-input color="secondary" outlined label="Subject"></q-input>
            </div>
            <div class="col q-pr-md q-pl-sm">
              <q-input
                color="secondary"
                outlined
                label="Contact Number"
              ></q-input>
            </div>
          </div>
        </q-card-section>
        <q-card-section>
          <div class="q-px-md">
            <q-input
              color="secondary"
              outlined
              label="Message"
              type="textarea"
            ></q-input>
          </div>
        </q-card-section>
        <q-card-actions align="center">
          <q-btn
            label="Send Message"
            color="secondary"
            no-caps
            size="lg"
          ></q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import SocialButtons from "../components/SocialButtons.vue";
import NavigationButtons from "../components/NavigationButtons.vue";
import ProjectsList from "../components/ProjectsList.vue";

import { ref } from "vue";
import { useQuasar } from "quasar";

import { APP_CONSTANTS } from "../common/constants/app";
import { openLink } from "../common/functions/utils";
import appBreakpoints from "../common/composables/breakpoints";

//Variables
const $q = useQuasar();
let isDarkMode = ref(localStorage.getItem("isDarkMode") === "true");
$q.dark.set(localStorage.getItem("isDarkMode") === "true");
const APP_BREAKPOINTS = appBreakpoints($q);
</script>

<style lang="scss">
.custom-text {
  font-size: 1.8em;
}

.font-white {
  color: white !important;
}
.card {
  cursor: pointer;
}
</style>
