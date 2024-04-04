<template>
  <v-app>
    <v-layout>
      <AppBar />

      <v-main style="background-color: #ffff">
        <RouterView />
      </v-main>
    </v-layout>
  </v-app>
</template>

<script setup>
import { RouterView } from "vue-router";
</script>
