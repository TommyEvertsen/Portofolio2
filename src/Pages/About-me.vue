<template>
  <v-container class="px-10 mt-5">
    <v-row>
      <v-col class="pa-2" justify="center" cols="12" md="6" sm="12" xs="12">
        <AboutMeComponent />
      </v-col>
      <v-col class="pa-2" justify="center" cols="12" md="6" sm="12" xs="12">
        <v-img aspect-ratio="16/9" cover src="@/assets/onthehand.jpg" height="500" max-width="800" width="100%"></v-img>
      </v-col>
    </v-row>



    <v-container class="mt-15 mb-10">

      <h2 class="text-center">My coding journey</h2>

    </v-container>

    <TimeLine v-if="smAndUp" />
    <TimeLineMobile v-if="smAndDown" />

  </v-container>
</template>

<script setup>
import TimeLine from "@/components/TimeLine.vue";
import AboutMeComponent from "@/components/AboutMeComponent.vue";
import TimeLineMobile from "@/components/TimeLineMobile.vue"
import { useDisplay } from 'vuetify'


const { smAndUp } = useDisplay()
const { smAndDown } = useDisplay()
</script>

<style></style>
