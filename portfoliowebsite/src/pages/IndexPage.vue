<template>
  <q-page padding>
    <div>
      <div class="row">
        <div
          :class="{ 'column items-center col-12': $q.screen.width < 650 }"
          class="col-7 q-pa-md column justify-center"
        >
          <div
            :class="
              $q.screen.lt.sm ? 'text-weight-regular' : 'text-weight-medium'
            "
            class="text-h3 q-mb-md"
          >
            {{ greeting.title }}
            <q-img
              style="width: 40px"
              src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
            ></q-img>
          </div>
          <div :class="{ 'text-center': $q.screen.lt.sm }" class="text-size">
            A software developer
            <q-img style="width: 20px" src="../assets/rocket.png"></q-img> who
            loves making web apps with Javascript/ VueJs/ Django Rest and some
            other cool libraries and frameworks | Ex Google DSC core team member
          </div>
          <div class="">
            <div class="row q-mt-md text-white">
              <q-btn
                round
                size="lg"
                class="bg-grey-9 q-mr-sm"
                icon="mdi-github"
              ></q-btn>
              <q-btn
                round
                size="lg"
                class="bg-blue q-mr-sm"
                icon="mdi-linkedin"
              ></q-btn>
              <q-btn
                round
                size="lg"
                class="bg-red q-mr-sm"
                icon="mdi-gmail"
              ></q-btn>
              <q-btn
                round
                size="lg"
                class="bg-blue q-mr-sm"
                icon="mdi-facebook"
              ></q-btn>
              <q-btn
                round
                size="lg"
                class="bg-blue q-mr-sm"
                icon="mdi-twitter"
              ></q-btn>
            </div>
            <div class="row q-mt-xl text-white">
              <q-btn
                size="lg"
                class="bg-purple-9 q-ma-sm"
                label="Contact me"
              ></q-btn>
              <q-btn
                size="lg"
                class="bg-purple-9 q-ma-sm"
                label="See My Resume"
              ></q-btn>
            </div>
          </div>
        </div>
        <div v-if="$q.screen.width > 650" class="col-4 q-pa-md">
          <q-img
            src="https://media.giphy.com/media/zhYSVCirREeIZtONCI/giphy.gif"
            style="max-width: 650px"
          ></q-img>
        </div>
      </div>
    </div>

    <div>
      <div class="row q-mt-xl">
        <div :class="responsiveness" class="col-6 q-pa-md">
          <q-img
            src="https://media.giphy.com/media/juua9i2c2fA0AIp2iq/giphy.gif"
            style="max-width: 650px"
          ></q-img>
        </div>
        <div
          :class="responsiveness"
          class="col-6 q-py-md column justify-center"
        >
          <div class="text-h3 q-mb-md">What I do</div>
          <div class="text-size">
            <div>Make Web apps with awesome technologies</div>
            <div class="q-my-sm">
              <q-icon
                color="orange"
                size="xl"
                name="mdi-language-html5"
              ></q-icon>
              <q-icon
                color="blue-6"
                size="xl"
                name="mdi-language-css3"
              ></q-icon>
              <q-icon
                color="yellow-8"
                size="xl"
                name="mdi-language-javascript"
              ></q-icon>
              <q-icon color="green" size="xl" name="mdi-vuejs"></q-icon>
              <q-icon color="red" size="xl" name="mdi-npm"></q-icon>
              <q-icon color="blue" size="xl" name="mdi-database"></q-icon>
              <q-icon
                color="blue-9"
                size="xl"
                name="mdi-language-python"
              ></q-icon>
              <q-icon color="black" size="xl" name="mdi-github"></q-icon>
              <q-icon color="red" size="xl" name="mdi-git"></q-icon>
            </div>
            <div class="column">
              <div>
                <q-icon color="yellow-9" name="mdi-lightning-bolt"></q-icon>
                Develop Highly interactive Front end Apps
              </div>
              <div>
                <q-icon color="yellow-9" name="mdi-lightning-bolt"></q-icon>
                Develop Maintainable Backend Services
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="text-h3 q-my-md">Proficiency</div>
      <div class="column text-weight-thin text-size">
        <div>
          <div>Frontend/Design</div>
          <q-slider
            :model-value="7"
            :min="0"
            :max="10"
            color="purple-4"
            inner-track-color="white"
            track-size="13px"
            thumb-size="0px"
            thumb-color="purple-4"
          />
        </div>
        <div>
          <div>Programming</div>
          <q-slider
            :model-value="6"
            :min="0"
            :max="10"
            color="purple-4"
            track-size="13px"
            inner-track-color="white"
            thumb-size="0px"
            thumb-color="purple-4"
          />
        </div>
        <div>
          <div>Backend</div>
          <q-slider
            :model-value="4"
            :min="0"
            :max="10"
            color="purple-4"
            track-size="13px"
            inner-track-color="white"
            thumb-size="0px"
            thumb-color="purple-4"
          />
        </div>
      </div>
    </div>

    <div>
      <div class="text-h3 q-my-md">Experiences</div>
      <div class="row">
        <div class="col-12 col-sm-6 col-md-3 q-pa-xs q-py-md">
          <q-card class="full-height">
            <q-card-section class="text-center text-white bg-red-9">
              <div class="q-ma-lg text-h4">Redmath</div>
              <q-avatar class="absolute-center" style="top: 110px">
                <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
              </q-avatar>
            </q-card-section>
            <q-card-section class="column text-center">
              <div class="text-weight-medium q-my-xs text-size">
                Full stack web developer
              </div>
              <div class="text-bold q-mb-md">August 2022-Present</div>
              <div class="" style="font-size: 1.5em">
                Redmath is a software firm working with international and
                national clients on revloutionary ideas. Redmath is working on
                several exciting products tackling problems related to Fintech,
                Edtech and Eccomerce. They also have SAAS divisions
              </div>
            </q-card-section>
            <q-separator inset color="grey-9"></q-separator>
            <div class="text-center" style="font-size: 1.2em">
              <q-list class="">
                <q-item v-ripple>
                  <q-item-section>
                    Responsible for conceptualizing and executing clear, quality
                    code to develop the best software
                  </q-item-section>
                </q-item>
                <q-separator inset color="grey-9"></q-separator>
                <q-item v-ripple>
                  <q-item-section>
                    <q-item-label>
                      Contributed in Edtech systems and Websites using Vue JS -
                      Quasar framework - Django - Javascript
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
          </q-card>
        </div>
        <div class="col-12 col-sm-6 col-md-3 q-pa-xs q-py-md">
          <q-card class="full-height">
            <q-card-section class="text-center text-white bg-teal">
              <div class="q-ma-lg text-h4">MindStorm Studios</div>
              <q-avatar class="absolute-center" style="top: 110px">
                <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
              </q-avatar>
            </q-card-section>
            <q-card-section class="column text-center">
              <div class="text-weight-medium q-my-xs text-size">
                Unity Game Developer
              </div>
              <div class="text-bold q-mb-md">July 2021-September 2021</div>
              <div class="" style="font-size: 1.5em">
                Mindstorm studios is one of the largest and most well known Game
                development firm in Lahore, Pakistan. Mindstorm studios have
                published several popular android games and are actively working
                on innovative ideas.
              </div>
            </q-card-section>
            <q-separator inset color="grey-9"></q-separator>
            <div class="text-center" style="font-size: 1.2em">
              <q-list class="">
                <q-item v-ripple>
                  <q-item-section>
                    Responsible for conceptualizing and executing clear, quality
                    code to develop the best software
                  </q-item-section>
                </q-item>
                <q-separator inset color="grey-9"></q-separator>
                <q-item v-ripple>
                  <q-item-section>
                    <q-item-label>
                      Contributed in creating the mechanics for a 3d runner game
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
          </q-card>
        </div>
        <div class="col-12 col-sm-6 col-md-3 q-pa-xs q-py-md">
          <q-card class="full-height">
            <q-card-section class="text-center text-white bg-black">
              <div class="q-ma-lg text-h4">Intelligent Machine Labs</div>
              <q-avatar class="absolute-center" style="top: 150px">
                <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
              </q-avatar>
            </q-card-section>
            <q-card-section class="column text-center">
              <div class="text-weight-medium q-my-xs text-size">ML Intern</div>
              <div class="q-mb-md text-bold">July 2019 – Aug 2019</div>
              <div style="font-size: 1.5em">
                Intelligent Machines Lab, is an endeavor to establish close
                working relationship among researchers, engineers and developers
              </div>
            </q-card-section>
            <q-separator inset color="grey-9"></q-separator>
            <div class="text-center" style="font-size: 1.2em">
              <q-list class="">
                <q-item v-ripple>
                  <q-item-section>
                    Responsible for generating training dataset of landscape
                    features, from high resolution satellite imagery data using
                    Labelbox
                  </q-item-section>
                </q-item>
                <q-separator inset color="grey-9"></q-separator>
                <q-item v-ripple>
                  <q-item-section>
                    <q-item-label>
                      The dataset was used for prediction of vector borne
                      disease’s prevalence and quantification of agricultural
                      land
                    </q-item-label>
                  </q-item-section>
                </q-item>
                <q-item v-ripple>
                  <q-item-section>
                    <q-item-label>
                      This Internship was supervised by NYU
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
          </q-card>
        </div>
        <div class="col-12 col-sm-6 col-md-3 q-pa-xs q-py-md">
          <q-card class="full-height">
            <q-card-section class="text-center text-white bg-green-7">
              <div class="q-ma-lg text-h4">Fiver</div>
              <q-avatar class="absolute-center" style="top: 110px">
                <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
              </q-avatar>
            </q-card-section>
            <q-card-section class="column text-center">
              <div class="text-weight-medium q-my-xs text-size">
                Freelance Game Designer
              </div>
              <div class="text-bold q-mb-md">Jan 2022-April 2022</div>
              <div class="" style="font-size: 1.5em">
                Fiver is a platform for enthusiastic free lancers where tons of
                niche experts provide their services to needy clients.
              </div>
            </q-card-section>
            <q-separator inset color="grey-9"></q-separator>
            <div class="text-center" style="font-size: 1.2em">
              <q-list class="">
                <q-item v-ripple>
                  <q-item-section>
                    Responsible for conceptualizing, designing and creating
                    innovative game worlds.
                  </q-item-section>
                </q-item>
                <q-separator inset color="grey-9"></q-separator>
                <q-item v-ripple>
                  <q-item-section>
                    <q-item-label>
                      Responsible for using plugins like gaia to develop large
                      scale game globes and cities
                    </q-item-label>
                  </q-item-section>
                </q-item>
                <q-separator inset color="grey-9"></q-separator>
                <q-item v-ripple>
                  <q-item-section>
                    <q-item-label>
                      Creating and fixing mechanics for different games
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
          </q-card>
        </div>
      </div>
    </div>

    <div>
      <div class="text-h3 q-my-md">Open Source Projects</div>
      <div class="row">
        <div class="col-12 col-md-6 q-pa-sm q-py-md">
          <q-card class="text-size q-pa-md">
            <div class="row flex items-center">
              <q-icon name="mdi-book"></q-icon>
              <div>Conjuctures</div>
            </div>
            <div style="font-size: large" class="row flex items-center">
              <div>
                A menu driven program which revolves around various Conjuctures!
              </div>
            </div>
            <div class="row flex items-center">
              <q-icon
                class="q-mr-xs"
                name="mdi-circle"
                size="sm"
                color="pink"
              ></q-icon>
              <div>C++</div>
              <q-icon
                class="q-ml-md"
                name="mdi-star"
                size="md"
                color="yellow-9"
              ></q-icon>
              <div>4</div>
              <q-icon class="q-ml-md" name="mdi-source-pull" size="md"></q-icon>
            </div>
          </q-card>
        </div>
        <div class="col-12 col-md-6 q-pa-sm q-py-md">
          <q-card class="text-size q-pa-md">
            <div class="row flex items-center">
              <q-icon name="mdi-book"></q-icon>
              <div>Conjuctures</div>
            </div>
            <div style="font-size: large" class="row flex items-center">
              <div>
                A menu driven program which revolves around various Conjuctures!
              </div>
            </div>
            <div class="row flex items-center">
              <q-icon
                class="q-mr-xs"
                name="mdi-circle"
                size="sm"
                color="pink"
              ></q-icon>
              <div>C++</div>
              <q-icon
                class="q-ml-md"
                name="mdi-star"
                size="md"
                color="yellow-9"
              ></q-icon>
              <div>4</div>
              <q-icon class="q-ml-md" name="mdi-source-pull" size="md"></q-icon>
            </div>
          </q-card>
        </div>
      </div>
    </div>

    <div>
      <div class="text-h3 q-my-md">
        Achievements And Certifications
        <q-icon color="yellow-8" size="lg" name="mdi-trophy"></q-icon>
      </div>
      <div class="text-grey-6 q-mb-xs" style="font-size: 1.5em">
        ACHIVEMENTS, CERTIFICATIONS, AWARD LETTERS AND SOME COOL STUFF I HAVE
        DONE!
      </div>
      <div class="row">
        <div class="col-12 col-md-6 q-pa-sm q-py-md">
          <q-card class="full-height">
            <q-card-section class="text-center text-white bg-grey-2">
              <img
                class="full-width"
                style="max-width: 300px"
                src="../assets/mta.webp"
              />
            </q-card-section>
            <q-card-section class="column text-center text-grey-9">
              <div class="text-weight-bold q-my-xs text-h4">
                Microsoft Technology Associate
              </div>
              <div class="text-bold q-mb-md">MICROSOFT CERTIFIED 2021</div>
              <div class="" style="font-size: 1.5em">
                Completed MTA: Introduction to Programming Using Python
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-md-6 q-pa-sm q-py-md">
          <q-card class="full-height">
            <q-card-section
              style="height: 340px"
              class="flex flex-center text-white bg-grey-2"
            >
              <img
                class="full-width"
                style="max-width: 300px"
                src="../assets/MC.webp"
              />
            </q-card-section>
            <q-card-section class="column text-center text-grey-9">
              <div class="text-weight-bold q-my-xs text-h4">
                Microsoft Certified
              </div>
              <div class="text-bold q-my-lg">MICROSOFT CERTIFIED 2021</div>
              <div class="" style="font-size: 1.5em">
                Completed Microsoft Certified: Azure Fundamentals cERTIFICATION
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

    <div>
      <div
        :class="{ 'flex flex-center': $q.screen.width < 1316 }"
        class="text-h3 q-my-md"
      >
        Reach Out to me!
      </div>
      <div class="row text-size">
        <div
          class="flex items-center"
          :class="{ 'col-12 flex flex-center': $q.screen.width < 1316 }"
        >
          <q-avatar size="150px" color="purple">
            <q-img src="../assets/ozair.jpg"></q-img>
          </q-avatar>
        </div>
        <div
          :class="{
            'col-12 text-center flex flex-center': $q.screen.width < 1316,
          }"
          class="column q-ma-lg"
        >
          <div class="text-grey-6 q-mb-xs">
            DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.
            <div class="text-grey-6 q-mt-sm">OPEN FOR OPPORTUNITIES: YES</div>
          </div>
          <div class="row q-mt-sm text-white">
            <q-btn
              round
              size="lg"
              class="bg-grey-9 q-mr-sm"
              icon="mdi-github"
            ></q-btn>
            <q-btn
              round
              size="lg"
              class="bg-blue q-mr-sm"
              icon="mdi-linkedin"
            ></q-btn>
            <q-btn
              round
              size="lg"
              class="bg-red q-mr-sm"
              icon="mdi-gmail"
            ></q-btn>
            <q-btn
              round
              size="lg"
              class="bg-blue q-mr-sm"
              icon="mdi-facebook"
            ></q-btn>
            <q-btn
              round
              size="lg"
              class="bg-blue q-mr-sm"
              icon="mdi-twitter"
            ></q-btn>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { useQuasar } from "quasar";
const responsiveness = { "col-12": useQuasar().screen.width < 727 };
const greeting = ref({
  username: "Abdul Mueed",
  title: "Hi all, I'm Mueed",
  // subTitle: emoji(
  //   "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  // ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true, // Set false to hide this section, defaults to true
});
</script>

<style lang="scss">
.text-size {
  font-size: 2em;
  color: grey;
}
</style>
