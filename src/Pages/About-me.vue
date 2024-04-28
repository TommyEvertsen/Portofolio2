<template>
  <main>
    <v-container class="px-10 mt-10 mb-10">
      <v-row>
        <v-col class="pa-2" cols="12" md="6" sm="12" xs="12">
          <v-sheet max-width="800" width="100%" rounded>
            <div>
              <h1 class="text-h4 font-weight-black headlineMe ">Tommy Evertsen</h1>

              <div class="text-body-2 mt-8 about-me-text">
                <p style="font-size: large;">
                  My name is Tommy Evertsen and i work as a fullstack developer.</p>

                <p class="pt-5" style="font-size: large;">
                  I started programming as a hobby with friends. I found out i really enjoyed it and developed a passion
                  for it.
                  I decided to make this my daytime job. i sudied the professional front-end development program at
                  Univiersity
                  of California.
                  The teachers there were really skilled and helpful and gave me a lot of feedback on what i could do
                  better and
                  best practices. After i completed the course i got a job as a fullstack developer.
                </p>

                <p class="pt-5" style="font-size: large;">
                  I am married to my wonderful wife. Live in Trondheim and i like to have fun and enjoy life
                </p>

                <p class="pt-5" style="font-size: large;">
                  My Hobbies include: Camping, fishing, Video games, boardgames, creating videogames in Unity, Hiking,
                  traveling
                  and <span>
                    <v-tooltip activator="parent" location="bottom">(Drinking beer)</v-tooltip>
                    more
                  </span>.
                </p>

                <p class="pt-5" style="font-size: large;">
                  I hope you have a wonderful {{ day }}!
                </p>
              </div>

            </div>
          </v-sheet>
        </v-col>
        <v-col class="pa-2" cols="12" md="6" sm="12" xs="12">
          <v-img src="@/assets/images/tommyAvatar.jpg" class="rounded-lg mx-auto" max-height="500"
            max-width="900"></v-img>
        </v-col>
      </v-row>

      <v-container class="mt-10 mb-10">

        <h2 class="text-center">My coding journey</h2>

      </v-container>

      <TimeLine v-if="smAndUp" />
      <TimeLineMobile v-if="smAndDown" />

    </v-container>
  </main>

</template>

<script setup>
import TimeLine from "@/components/TimeLine.vue";
import TimeLineMobile from "@/components/TimeLineMobile.vue"
import { useDisplay } from 'vuetify'


const { smAndUp } = useDisplay()
const { smAndDown } = useDisplay()

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const date = new Date();
let day = days[date.getDay()];

</script>

<style>
@media screen and (max-width: 768px) {
  .coding_journey {
    margin-top: 0 !important;
  }

  .headlineMe {
    text-align: center;
  }
}

.about-me-text {
  line-height: 2em
}

.headlineMe {
  color: #5B8FB9;
}
</style>
