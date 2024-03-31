<template>
  <v-app>
    <NavigationDrawer />
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<script setup>
import { RouterView } from "vue-router";
</script>
