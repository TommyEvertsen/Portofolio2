<template>
  <v-footer
    class="footer text-center d-flex flex-column"
    style="background-color: #f8f9f9; color: black"
  >
    <div>
      <v-btn
        v-for="link in links"
        :key="link.title"
        :icon="link.icon"
        :href="link.href"
        @click="link.click"
        class="mx-4"
        variant="text"
      ></v-btn>
    </div>

    <v-divider></v-divider>

    <div>{{ new Date().getFullYear() }} — <strong>Tommy Evertsen</strong></div>
  </v-footer>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

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

const links = [
  {
    title: "Home",
    icon: "mdi-home-outline",
    click: navigateToHome,
  },
  {
    title: "About",
    icon: "mdi-face-man-shimmer-outline",
    click: navigateToAboutMe,
  },
  {
    title: "Contact",
    icon: "mdi-email-outline",
    click: navigateToContact,
  },
  {
    title: "Projects",
    icon: "mdi-application-braces-outline",
    click: navigateToProjects,
  },
  {
    title: "Education",
    icon: "mdi-school-outline",
    click: navigateToEducation,
  },
  {
    title: "Certificates",
    icon: "mdi-certificate-outline",
    click: navigateToCertificates,
  },
  {
    title: "Github",
    icon: "mdi-github",
    href: "https://github.com/TommyEvertsen",
  },
  {
    title: "LinkedIn",
    icon: "mdi-linkedin",
    href: "https://www.linkedin.com/in/tommy-evertsen/",
  },
];
</script>

<style>

</style>
