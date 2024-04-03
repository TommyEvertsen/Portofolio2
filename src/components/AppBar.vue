<template>
  <v-app-bar :elevation="1">
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
