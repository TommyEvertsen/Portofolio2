<template>
  <v-app>
    <NavigationDrawer />
    <v-main style="background-color: #fff5ee">
      <RouterView />
    </v-main>
  </v-app>
</template>

<script setup>
import { RouterView } from "vue-router";
</script>
