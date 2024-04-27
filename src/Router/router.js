//Routing
import AboutMe from "@/Pages/About-me.vue";
import Certificates from "@/Pages/Certificates.vue";
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
    },
    {
      path: "/about",
      name: "about",
      component: AboutMe,
    },
    {
      path: "/certificates",
      name: "certificates",
      component: Certificates,
    },
    {
      path: "/videogames",
      name: "video-games",
      component: VideoGames,
    },
    {
      path: "/projects",
      name: "projects",
      component: Projects,
    },
    {
      path: "/education",
      name: "education",
      component: Education,
    },
  ],
});

export default router;
