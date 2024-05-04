<template>
  <main>
    <v-container class="px-10 mt-10 mb-10">
      <v-row class="mt10">
        <v-col cols="12" xl="4" lg="6" md="6" sm="12" xs="12">
          <h2 class="headline">Study at the University</h2>
          <div class="mt-10 uni-text">
            <p style="font-size: large; line-height: 2em">
              I studied professional front-end development program at the
              University of California. The program consisted of 5 courses with
              a duration of 3 months each course. This program made me really
              understand the logical aspects of programming as well as designing
              web pages for easy use, and how to make them available for people
              who have challenges with their eye sight and other disablilites.
            </p>
            <br />
            <p style="font-size: large; line-height: 2em">
              The students worked together in teams to simulate real world
              working environments. We made web pages together and helped
              eachother and also came up with ideas to to to improve eachother.
              The teachers where also really helpul in lending us help with
              their expertice in the field. We had discussions about our code
              with them on how we faced the challenges and got tips for more
              effecient code from them. I had a great time doing this program
              and can recommend it to anyone interested in programming and
              designing web pages.
            </p>
          </div>
        </v-col>

        <v-col>
          <v-img :src="diploma"> </v-img>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script setup>
import diploma from "@/assets/images/diploma.jpg";
</script>

<style>
.headline {
  color: #5b8fb9;
  font-weight: bold;
}

@media screen and (max-width: 768px) {
  .headline {
    text-align: center;
  }
}
</style>
