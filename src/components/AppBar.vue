<template>
  <v-app-bar :elevation="1" color="#1A237E">
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click="show"></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>{{ title }}</v-app-bar-title>
  </v-app-bar>

  <NavigationDrawer v-if="drawer" @title="updateTitle" />
</template>

<script setup>
import NavigationDrawer from "./NavigationDrawer.vue";
import { ref, defineAsyncComponent } from "vue";

const drawer = ref(false);

const show = () => {
  drawer.value = !drawer.value;
};

const title = ref("Home");

const updateTitle = (newTitle) => {
  title.value = newTitle;
};
</script>

<style>
.v-list-item--active {
  background-color: #1a237e;
  opacity: 80;
}
</style>
