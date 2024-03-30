/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from "@/plugins";

// Components
import App from "./App.vue";

//Routing
import AboutMe from "./Pages/About-me.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: AboutMe },
  { path: "/about", component: AboutMe },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Composables
import { createApp } from "vue";

const app = createApp(App);
app.use(router);
registerPlugins(app);

app.mount("#app");
