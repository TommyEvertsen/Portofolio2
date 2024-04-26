<template>
  <v-navigation-drawer width="220">
    <v-list>
      <v-list-item class="me" subtitle="Fullstack developer" title="Tommy Evertsen"></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item prepend-icon="mdi-home-outline" title="Home" value="home" @click="navigateToHome"></v-list-item>
      <v-list-item prepend-icon="mdi-face-man-shimmer-outline" title="About me" value="about"
        @click="navigateToAboutMe"></v-list-item>
      <v-list-item prepend-icon="mdi-application-braces-outline" title="Projects" value="projects"
        @click="navigateToProjects"> </v-list-item>
      <v-list-item prepend-icon="mdi-certificate-outline" title="Certificates" value="certificates"
        @click="navigateToCertificates"></v-list-item>
      <!-- <v-list-item prepend-icon="mdi-gamepad-square-outline" title="Video games" value="games"
        @click="navigateToGames"></v-list-item> -->

      <v-divider></v-divider>

      <v-list-item prepend-icon="mdi-github" title="Github" value="github"
        href="https://github.com/TommyEvertsen"></v-list-item>
      <v-list-item prepend-icon="mdi-linkedin" title="LinkedIn" value="linkedIn"
        href="https://www.linkedin.com/in/tommy-evertsen/"></v-list-item>
    </v-list>

  </v-navigation-drawer>
</template>

<script setup>
import { useRouter } from "vue-router";

const emit = defineEmits(["title"]);

const router = useRouter();

const navigateToCertificates = () => {
  router.push({ name: "certificates" });
  emit("title", "Certificates");
};

const navigateToAboutMe = () => {
  router.push({ name: "about" });
  emit("title", "About me");
};

const navigateToHome = () => {
  router.push({ name: "home" });
  emit("title", "Home");
};

const navigateToGames = () => {
  router.push({ name: "video-games" });
  emit("title", "Video Games");
};

const navigateToProjects = () => {
  router.push({ name: "projects" });
  emit("title", "Projects");
};
</script>

<style>
.v-navigation-drawer {
  transform: none;
}
</style>
