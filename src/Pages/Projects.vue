<template>
    <main>
        <v-container>

            <h2 style="text-align: center;">Hobby projects</h2>
            <v-row class="pt-10">
                <v-col v-for="project in hobbyProjects" :key="project.title" cols="12" xl="4" lg="4" md="6" sm="12"
                    xs="12">
                    <v-card color="#f5f5f5" class="mx-auto" max-width="450" elevation="12" rounded="lg">
                        <v-card-title style="background-color: #301E67; color: white;">{{ project.title
                            }}</v-card-title>
                        <v-img class=" align-end text-white" height="450" :src="project.image" cover>

                        </v-img>


                        <v-divider> </v-divider>

                        <v-card-subtitle class="pt-4">
                            {{ project.tech }}
                        </v-card-subtitle>

                        <v-card-text>
                            <div>{{ project.description }}</div>


                        </v-card-text>

                        <v-card-actions>
                            <v-btn variant="outlined" prepend-icon="mdi-web" ripple="true" color="#5B8FB9"
                                v-if="project.published" :href=project.link>
                                Visit
                            </v-btn>

                            <v-btn variant="outlined" prepend-icon="mdi-github" ripple="true" color="#5B8FB9"
                                v-if="project.code" :href="project.code">
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
import dragonImage from "@/assets/dragon.jpg"
import tinyImage from "@/assets/tiny.jpg"
import portoImage from "@/assets/portofolio.jpg"
import logo from "@/assets/logo.png"
import universe from "@/assets/universe.jpg"
import fundamentals from "@/assets/fundamentals.jpg"

const hobbyProjects = [
    {
        title: "Portofolio",
        description: "Making a portofolio for myself. Making it by using vuetify 3. A fun hobby project for sure",
        tech: "Vue.js",
        published: false,
        image: portoImage,
        link: "",
        code: "https://github.com/TommyEvertsen/Portofolio"

    },
    {
        title: "Fire and flesh",
        description: "Website for sharing recipes. Has been taken offline due to cost. But it was a fun project where i learned a lot",
        tech: "Laravel and Vue",
        published: false,
        image: logo,
        link: "",
        code: "https://github.com/TommyEvertsen/FireandFlesh-sharing-recipes-"

    },
    {
        title: "Dragon hero",
        description: "Unity game. Recently started work on this. Its a fun hobby project",
        tech: "C# and Unity",
        published: true,
        image: dragonImage,
        link: "https://play.unity.com/mg/other/webgl-builds-393032",
        code: ""
    },
    {
        title: "Tiny productions photography",
        description: "Made a web page for a friend. A webpage dedicated to art and portraits. Now being updated by the recipent",
        tech: "HTML and CSS",
        published: true,
        image: tinyImage,
        link: "https://tinyproductions.no/home.html",
        code: "https://github.com/TommyEvertsen/Tiny-Productions-Photographer"
    },
    {
        title: "Astronomy picture of the day",
        description: "Made with API from NASA to show new pictures everyday of the universe",
        tech: "React.Js",
        published: false,
        image: universe,
        link: "",
        code: "https://github.com/TommyEvertsen/Astronomy-picture-of-the-day-React.js"
    }

]
</script>

<style scoped>
.v-card-subtitle {
    color: rgb(48, 30, 103) !important;
    opacity: 100;
    font-weight: bolder;
}
</style>