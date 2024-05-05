<template>
  <main>
    <v-container class="px-10 mt-10 mb-10">
      <v-row>
        <v-col class="pa-2" cols="12" lg="6" md="12" sm="12" xs="12">
          <v-sheet max-width="800" width="100%" rounded>
            <div>
              <h1 class="text-h4 font-weight-black headlineMe">About me</h1>

              <div class="text-body-2 mt-8 about-me-text">
                <p style="font-size: large">My name is Tommy Evertsen.</p>

                <p class="pt-5" style="font-size: large">
                  I am married to my wonderful wife. I live in Trondheim and i
                  like to have fun and enjoy life.
                </p>

                <p class="pt-5" style="font-size: large">
                  When i am not at work i have several hobbies i like to indulge
                  in. i Really enjoy traveling and exploring the world. I think
                  nothing opens your mind like traveling to new countries. I
                  love the feeling of new food, new nature, new culture and i
                  feel its very important to me. <br />
                  <br />
                  I also love spending time in nature, it may be just hiking or
                  it may be cabin trips, sleeping in tent to the sound of birds
                  and water. It makes me feel blessed to be alive. <br />
                  <br />
                  I also love to learn new things. I have always been interested
                  in learning abot the universe and prehistoric earth and
                  similar things. I also love history, especially middle ages
                  and viking era history. I find it facinating to learn about
                  their way of life.
                </p>
                <br />

                <p class="pt-5" style="font-size: large">
                  Last but not least i enjoy programming. I love programming and
                  learning about programing. It feels like an endless pool of
                  new subjects to learn which i love. I love to do web
                  development and also videogame development. I am having a ton
                  of fun when i do programming.
                </p>

                <p class="pt-5" style="font-size: large">
                  Other hobbies include: fishing, video games, boardgames,
                  creating videogames in Unity, skiing, and
                  <span>
                    <v-tooltip activator="parent" location="bottom"
                      >(Drinking beer)</v-tooltip
                    >
                    more.
                  </span>
                </p>
                <br />

                <p class="mt-10" style="font-size: large">
                  I hope you have a wonderful
                  <span class="day">{{ day }}!</span>
                </p>
              </div>
            </div>
          </v-sheet>
        </v-col>
        <v-col class="pa-2" cols="12" lg="6" md="12" sm="12" xs="12">
          <v-carousel v-if="smAndUp" height="600" cycle continuous touch>
            <v-carousel-item
              src="@/assets/onthehand.jpg"
              cover
            ></v-carousel-item>

            <v-carousel-item
              src="@/assets/images/cabin.jpg"
              cover
            ></v-carousel-item>

            <v-carousel-item
              src="@/assets/images/castle.jpg"
              cover
            ></v-carousel-item>

            <v-carousel-item
              src="@/assets/images/buffalo.jpg"
              cover
            ></v-carousel-item>

            <v-carousel-item
              src="@/assets/images/cactisforest.jpg"
              cover
            ></v-carousel-item>

            <v-carousel-item
              src="@/assets/images/camping.jpg"
              cover
            ></v-carousel-item>

            <v-carousel-item
              src="@/assets/images/tree.jpg"
              cover
            ></v-carousel-item>

            <v-carousel-item
              src="@/assets/images/tekken.jpg"
              cover
            ></v-carousel-item>

            <v-carousel-item
              src="@/assets/images/reefs.jpg"
              cover
            ></v-carousel-item>
          </v-carousel>

          <v-carousel
            v-if="smAndDown"
            height="300"
            cycle
            continuous
            touch
            :show-arrows="false"
          >
            <v-carousel-item
              src="@/assets/images/cabin.jpg"
              cover
            ></v-carousel-item>

            <v-carousel-item
              src="@/assets/images/castle.jpg"
              cover
            ></v-carousel-item>

            <v-carousel-item
              src="@/assets/images/buffalo.jpg"
              cover
            ></v-carousel-item>

            <v-carousel-item
              src="@/assets/images/cactisforest.jpg"
              cover
            ></v-carousel-item>

            <v-carousel-item
              src="@/assets/images/camping.jpg"
              cover
            ></v-carousel-item>

            <v-carousel-item
              src="@/assets/images/tree.jpg"
              cover
            ></v-carousel-item>

            <v-carousel-item
              src="@/assets/images/tekken.jpg"
              cover
            ></v-carousel-item>

            <v-carousel-item
              src="@/assets/images/reefs.jpg"
              cover
            ></v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script setup>
import { useDisplay } from "vuetify";

const { smAndUp } = useDisplay();
const { smAndDown } = useDisplay();

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
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
  line-height: 2em;
}

.headlineMe {
  color: #5b8fb9;
}

.day {
}
</style>
