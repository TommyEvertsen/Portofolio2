<template>
  <main>
    <v-container style="">
      <h1 style="text-align: center; font-family: 'Merriweather', serif; color: #5B8FB9;">
        Certificates
      </h1>
      <v-row class="px-5 mt-10">
        <v-col v-for="(certificate, index) in certificates" :key="certificate.title" cols="12" sm="4">
          <v-card hover color="#f5f5f5" class="mx-auto mt-5" max-width="344" :subtitle="certificate.title"
            :title="certificate.provider">

            <template v-slot:prepend>
              <v-icon color="#1a237e" :icon="certificate.icon"></v-icon>
            </template>
            <template v-slot:append>
              <v-tooltip activator="parent" location="end">View certificate</v-tooltip>
              <v-icon v-if="certificate.link" @click="openCertificateLink(certificate.link)" color="success"
                icon="mdi-certificate-outline">
              </v-icon>
            </template>

            <v-card-text>
              {{ certificate.subtitle }}
            </v-card-text>

            <v-card-actions>
              <v-btn prepend-icon="mdi-lightbulb-on-outline" color="#5B8FB9" size="small" variant="elevated"
                @click="toggleReveal(index)">
                Show skills
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <v-card hover color="#f5f5f5" v-if="reveal[index]" class="reveal" style="height: 100%"
                :title="certificate.provider" subtitle="Skills learned">
                <template v-slot:prepend>
                  <v-icon color="#1a237e" icon="mdi-lightbulb-on-outline"></v-icon>
                </template>

                <template v-slot:append>
                  <v-tooltip activator="parent" location="end">View certificate</v-tooltip>
                  <v-icon v-if="certificate.link" @click="openCertificateLink(certificate.link)" color="success"
                    icon="mdi-certificate-outline">
                  </v-icon>
                </template>

                <v-card-text class="pb-0 d-flex justify-start ga-2">
                  <v-chip v-for="skill in certificate.skills" :style="{ backgroundColor: skill.color }" color="white">{{
          skill.title
        }}
                  </v-chip>
                </v-card-text>
                <v-card-actions class="pt-0">
                  <v-btn prepend-icon="mdi-close-circle-outline" variant="elevated" size="small" color="#5B8FB9"
                    @click="toggleReveal(index)">
                    Close
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script setup>
import { ref } from "vue";

const certificates = [
  {
    title: "Azure associate developer",
    provider: "Microsoft",
    icon: "mdi-microsoft",
    icon2: "mdi-check",
    subtitle: " Developing solutions for Azure",
    link: "https://learn.microsoft.com/en-us/users/tommyevertsen-1328/credentials/certification/azure-developer?tab=credentials-tab",
    skills: [
      {
        title: "Azure",
        color: "#008ad7",
      },
      {
        title: "C#",
        color: "#9f73d9",
      },
    ],
  },
  {
    title: "Azure fundamentals",
    provider: "Microsoft",
    icon: "mdi-microsoft",
    icon2: "mdi-check",
    subtitle: "Fundamental knowledge of Azure ",
    link: "https://learn.microsoft.com/en-us/users/tommyevertsen-1328/credentials/f2c8e89db98ae800?ref=https%3A%2F%2Fwww.linkedin.com%2F",
    skills: [
      {
        title: "Azure",
        color: "#008ad7",
      },
    ],
  },
  {
    title: "Foundational C# with Microsoft",
    provider: "Microsoft",
    icon: "mdi-microsoft",
    icon2: "mdi-check",
    subtitle: "Programming in C#",
    link: "https://www.freecodecamp.org/certification/fcc437d45cb-1f04-4475-980b-4c8b14728c1a/foundational-c-sharp-with-microsoft",
    skills: [
      {
        title: "C#",
        color: "#9f73d9",
      },
    ],
  },
  {
    title: "Web development bootcamp",
    provider: "Udemy",
    icon: "mdi-alpha-u-circle-outline",
    icon2: "mdi-check",
    subtitle: "Bootcamp with Javascript and React",
    link: "https://www.udemy.com/certificate/UC-001a5901-bd56-4f6c-b456-2d5bbd07d298/",
    skills: [
      {
        title: "Javascript",
        color: "#f7df1e",
      },
      {
        title: "Node.Js",
        color: "#80bd00",
      },
      {
        title: "React.Js",
        color: "#61dafb",
      },
    ],
  },
  {
    title: "Ultimate JavaScript mastery series",
    provider: "Code with Mosh",
    icon: "mdi-alpha-m-box-outline",
    icon2: "mdi-check",
    subtitle: "Programming in JavaScript",

    skills: [
      {
        title: "JavaScript",
        color: "#f7df1e",
      },
      {
        title: "HTML",
        color: "#f1672b",
      },
      {
        title: "CSS",
        color: "#214ce5",
      },
    ],
  },
  {
    title: "JavaScript basics",
    provider: "University of California",
    icon: "mdi-school-outline",
    icon2: "mdi-check",
    subtitle: "Programming in JavaScript",
    link: "https://www.coursera.org/account/accomplishments/certificate/WZ5J9X7BDR76",
    skills: [
      {
        title: "JavaScript",
        color: "#f7df1e",
      },
      {
        title: "HTML",
        color: "#f1672b",
      },
      {
        title: "CSS",
        color: "#214ce5",
      },
    ],
  },
  {
    title: "Programming foundations",
    provider: "Duke University",
    icon: "mdi-school-outline",
    icon2: "mdi-check",
    subtitle: "Programming in JavaScript",
    link: "https://www.coursera.org/account/accomplishments/certificate/X222N6PTW345",
    skills: [
      {
        title: "JavaScript",
        color: "#f7df1e",
      },
      {
        title: "HTML",
        color: "#f1672b",
      },
      {
        title: "CSS",
        color: "#214ce5",
      },
    ],
  },
];

const reveal = ref(Array(certificates.length).fill(false));

const toggleReveal = (index) => {
  reveal.value[index] = !reveal.value[index];
};

const openCertificateLink = (link) => {
  window.open(link, "_blank");
};
</script>

<style>
.reveal {
  bottom: 0 !important;
  opacity: 1 !important;
  position: absolute !important;
  width: 100% !important;
}
</style>
