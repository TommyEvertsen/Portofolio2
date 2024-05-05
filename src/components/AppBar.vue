<template>
  <v-app-bar :elevation="1" color="#1A237E">
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click="show"></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title
      >{{ $route.meta.title || "Default title" }}
    </v-app-bar-title>
  </v-app-bar>

  <v-navigation-drawer width="220" v-if="drawer" v-model="drawer">
    <v-list>
      <v-list-item
        prepend-avatar="@/assets/images/tommyAvatar.jpg"
        class="me"
        subtitle="Fullstack developer"
        title="Tommy Evertsen"
      ></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list color="#6495ED" density="compact" nav>
      <v-list-item
        prepend-icon="mdi-home-outline"
        title="Home"
        value="home"
        @click="navigateToHome"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-face-man-shimmer-outline"
        title="About me"
        value="about"
        @click="navigateToAboutMe"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-email-outline"
        title="Contact me"
        value="contact"
        @click="navigateToContact"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-school-outline"
        title="Education"
        value="education"
        @click="navigateToEducation"
      ></v-list-item>

      <v-divider></v-divider>

      <v-list-item
        prepend-icon="mdi-application-braces-outline"
        title="Projects"
        value="projects"
        @click="navigateToProjects"
      >
      </v-list-item>
      <v-list-item
        prepend-icon="mdi-certificate-outline"
        title="Certificates"
        value="certificates"
        @click="navigateToCertificates"
      ></v-list-item>
      <!--  <v-list-item prepend-icon="mdi-gamepad-square-outline" title="Video games" value="games"
        @click="navigateToGames"></v-list-item> -->

      <v-divider></v-divider>

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
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref, defineAsyncComponent } from "vue";
import { useRouter } from "vue-router";

const drawer = ref(false);

const router = useRouter();

const show = () => {
  drawer.value = !drawer.value;
};

const navigateToCertificates = () => {
  router.push({ name: "certificates" });
};

const navigateToAboutMe = () => {
  router.push({ name: "about" });
};

const navigateToHome = () => {
  router.push({ name: "home" });
};

const navigateToGames = () => {
  router.push({ name: "video-games" });
};

const navigateToProjects = () => {
  router.push({ name: "projects" });
};

const navigateToEducation = () => {
  router.push({ name: "education" });
};

const navigateToContact = () => {
  router.push({ name: "contact" });
};
</script>

<style>
.v-list-item
  v-list-item--active
  > v-list-item--link
  > v-list-item--nav
  > v-theme--light
  > v-list-item--density-compact
  > v-list-item--one-line
  > v-list-item--rounded
  > v-list-item--variant-text {
  color: cornflowerblue;
}
</style>
