<template>
  <v-navigation-drawer expand-on-hover rail width="300">
    <v-list>
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
        subtitle="tommyevertsen52@gmail.com"
        title="Tommy Evertsen"
      ></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-github"
        title="Github"
        value="github"
        href="https://github.com/TommyEvertsen"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-linkedin"
        title="LinkedIn"
        value="linkedIn"
        href="https://www.linkedin.com/in/tommy-evertsen/"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-certificate-outline"
        title="Certificates"
        value="certificates"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-controller"
        title="Video games"
        value="games"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<style></style>
