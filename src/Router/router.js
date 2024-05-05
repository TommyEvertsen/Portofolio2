//Routing
import AboutMe from "@/Pages/About-me.vue";
import Certificates from "@/Pages/Certificates.vue";
import ContactMe from "@/Pages/Contact-me.vue";
import Education from "@/Pages/Education.vue";
import Home from "@/Pages/Home.vue";
import Projects from "@/Pages/Projects.vue";
import VideoGames from "@/Pages/VideoGames.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        title: "Home",
      },
    },
    {
      path: "/about",
      name: "about",
      component: AboutMe,
      meta: {
        title: "About me",
      },
    },
    {
      path: "/certificates",
      name: "certificates",
      component: Certificates,
      meta: {
        title: "Certificates",
      },
    },
    {
      path: "/videogames",
      name: "video-games",
      component: VideoGames,
      meta: {
        title: "Videogames",
      },
    },
    {
      path: "/projects",
      name: "projects",
      component: Projects,
      meta: {
        title: "Projects",
      },
    },
    {
      path: "/education",
      name: "education",
      component: Education,
      meta: {
        title: "Education",
      },
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactMe,
      meta: {
        title: "Contact me",
      },
    },
  ],
});

export default router;
