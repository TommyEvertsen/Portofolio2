<template>
  <v-timeline align="start">
    <v-timeline-item
      v-for="(year, i) in years"
      :key="i"
      :dot-color="year.color"
      size="small"
    >
      <template v-slot:opposite>
        <div
          :class="`pt-1 headline font-weight-bold text-${year.color}`"
          v-text="year.year"
        ></div>
      </template>
      <div>
        <h2
          :class="`mt-n1 headline font-weight-light mb-4 text-${year.color} `"
        >
          {{ year.title }}
        </h2>
        <div>
          {{ year.text }}
        </div>
      </div>
    </v-timeline-item>
  </v-timeline>
</template>
<script setup>
const years = [
  {
    color: "cyan",
    year: "2021",
    title: "Wrote my first code",
    text: "Me and my friends decided to try programming. We made three in a row without any prior knowledge of programming",
  },
  {
    color: "green",
    year: "2021",
    title: "Took my first programming course at Coursera",
    text: "Took my first course on coding with HTML, CSS and JavaScript at Coursera. This is where i got hooked on programming.",
  },
  {
    color: "pink",
    year: "2022",
    title: "Completed a coding bootcamp",
    text: "Completed a web development bootcamp. Here i learned a lot about programming and really enjoyed the experience.",
  },
  {
    color: "amber",
    year: "2022",
    title: "Did some freelance web development",
    text: "Made a web page for a photograper and for a restaurant for a small amount of money and a big amount of work and learning experience",
  },
  {
    color: "orange",
    year: "2022",
    title: "Started to study at University of California San-Diego",
    text: "Studied Front-end development with JavaScript and React. The teachers were really good and interactive and made a great learning experience",
  },
  {
    color: "purple",
    year: "2023",
    title: "Finished my study at University of California San-Diego",
    text: "Finished my program at the University",
  },
  {
    color: "brown",
    year: "2023",
    title: "Got a job as Fullstack developer at Hjelseth Computers",
    text: "My dream came true, to work as a devloper. I feel very happy to be part of this great ever evolving thing",
  },
];
</script>
