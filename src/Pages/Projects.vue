<template>
  <main>
    <v-container class="mt-10 mb-10">
      <h1 style="text-align: center">Hobby projects</h1>
      <v-row class="pt-10">
        <v-col v-for="project in hobbyProjects" :key="project.title" cols="12" xl="4" lg="4" md="6" sm="12" xs="12">
          <v-card hover color="#f5f5f5" class="mx-auto" max-width="550" rounded="lg">
            <v-card-title style="background-color: #301e67; color: white">{{
          project.title
        }}</v-card-title>
            <v-img class="align-end text-white" height="450" :src="project.image" cover>
            </v-img>

            <v-divider> </v-divider>

            <v-card-subtitle class="pt-4">
              {{ project.tech }}
            </v-card-subtitle>

            <v-card-text>
              <div>{{ project.description }}</div>
            </v-card-text>

            <v-card-actions>
              <v-btn class="button" variant="outlined" prepend-icon="mdi-web" color="#5B8FB9" v-if="project.published"
                :href="project.link">
                Visit
              </v-btn>

              <v-btn class="button" variant="outlined" prepend-icon="mdi-github" color="#5B8FB9" v-if="project.code"
                :href="project.code">
                Code
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script setup>
import tinyImage from "@/assets/tiny.jpg";
import portoImage from "@/assets/portofolio.jpg";
import universe from "@/assets/universe.jpg";
import fireAndFlesh from "@/assets/images/fire2.jpg";
import dragon from "@/assets/images/Dragon.jpg";

const hobbyProjects = [
  {
    title: "Dragon hero",
    description:
      "Unity game. Recently started work on this. Its a fun hobby project using C# and Unity",
    tech: "C# and Unity",
    published: true,
    image: dragon,
    link: "https://play.unity.com/mg/other/webgl-builds-393032",
    code: "",
  },
  {
    title: "Fire and flesh",
    description:
      "Website for sharing recipes. Has been taken offline due to cost. But it was a fun CRUD project where i learned a lot",
    tech: "Laravel and Vue",
    published: false,
    image: fireAndFlesh,
    link: "",
    code: "https://github.com/TommyEvertsen/FireandFlesh-sharing-recipes-",
  },

  {
    title: "Tiny productions photography",
    description:
      "Made a web page for a friend. A webpage dedicated to art and portraits. Now being updated by the recipent",
    tech: "HTML and CSS",
    published: true,
    image: tinyImage,
    link: "https://tinyproductions.no/home.html",
    code: "https://github.com/TommyEvertsen/Tiny-Productions-Photographer",
  },
  {
    title: "Astronomy picture of the day",
    description:
      "Made with API from NASA to show new pictures everyday of the universe. I would also like to add the mars rover api in the future",
    tech: "React.Js",
    published: false,
    image: universe,
    link: "",
    code: "https://github.com/TommyEvertsen/Astronomy-picture-of-the-day-React.js",
  },
  {
    title: "Portofolio",
    description:
      "Making a portofolio for myself. Making it by using vuetify 3. A fun hobby project where i learned to use vuetify",
    tech: "Vue.js",
    published: false,
    image: portoImage,
    link: "",
    code: "https://github.com/TommyEvertsen/Portofolio",
  },
];
</script>

<style scoped>
.v-card-subtitle {
  color: rgb(48, 30, 103) !important;
  opacity: 100;
  font-weight: bolder;
}

.button:hover {
  background-color: #5b8fb9;
}
</style>
