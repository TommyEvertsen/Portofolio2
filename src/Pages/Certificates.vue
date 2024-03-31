<link href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" rel="stylesheet"></link>

<template>
  <main>
    <v-container >
      <v-row no-gutters >
        <v-col
          v-for="certificate in certificates"
          :key="certificate.title"
          cols="12"
          sm="4"
        >
          <v-card 
            class="mx-auto mt-5"
            max-width="344"
            :subtitle="certificate.title"
            :title="certificate.provider"
          >
            <template v-slot:prepend>
              <v-icon color="primary" :icon="certificate.icon"></v-icon>
            </template>
            <template v-slot:append>
              <v-icon color="success" icon="mdi-file-certificate-outline"></v-icon>
            </template>
            <v-card-text>
              {{ certificate.skills }}
            </v-card-text>
            <v-card-actions>
              <v-btn size="small" variant="text" :href="certificate.link">
                Show certification
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script setup>



const certificates = [
  {
    title: "Azure associate developer",
    provider: "Microsoft",
    icon: "mdi-microsoft",
    icon2: "mdi-check",
    skills: " Developing solutions for Azure",
    link: "https://www.vg.no"
  },
  {
    title: "Azure fundamentals",
    provider: "Microsoft",
    icon: "mdi-microsoft",
    icon2: "mdi-check",
    skills: "Fundamental knowledge of Azure ",
    link: "https://www.vg.no"
  },
  {
    title: "Foundational C# with Microsoft",
    provider: "Microsoft",
    icon: "mdi-microsoft",
    icon2: "mdi-check",
    skills: "Programming in C#",
    link: "https://www.vg.no"
  },
  {
    title: "Web development bootcamp",
    provider: "Udemy",
    icon: "mdi-react",
    icon2: "mdi-check",
    skills: "Programming in C#",
    link: "https://www.vg.no"
  },
];
</script>

<style>

</style>