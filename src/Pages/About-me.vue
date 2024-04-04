<template>
  <v-container class="px-10 mt-5">
    <v-row no-gutters>
      <v-col class="pa-2">
        <AboutMe />
      </v-col>
      <v-col class="pa-2">
        <v-img
          aspect-ratio="16/9"
          cover
          src="@/assets/onthehand.jpg"
          height="500"
          max-width="800"
          width="100%"
        ></v-img>
      </v-col>
    </v-row>

    <v-divider></v-divider>

    <TimeLine />
  </v-container>
</template>

<script setup>
import TimeLine from "@/components/TimeLine.vue";
import AboutMe from "@/components/AboutMe.vue";
</script>
