<template>
  <v-sheet height="500" max-width="800" width="100%" rounded>
    <div>
      <h2 class="text-h4 font-weight-black headlineMe ">Tommy Evertsen</h2>




      <div class="text-body-2 mt-8 about-me-text">
        <p>
          My name is Tommy Evertsen and i work as a fullstack developer.</p>

        <p class="pt-5">
          I started programming as a hobby with friends. I found out i really enjoyed it and developed a passion for it.
          I decided to make this my daytime job. i sudied the professional front-end development program at Univiersity
          of California.
          The teachers there were really skilled and helpful and gave me a lot of feedback on what i could do better and
          best practices. After i completed the course i got a job as a fullstack developer.
        </p>

        <p class="pt-5">
          I am married to my wonderful wife. Live in Trondheim and i like to have fun and enjoy life
        </p>

        <p class="pt-5">
          My Hobbies include: Camping, fishing, Video games, boardgames, creating videogames in Unity, Hiking, traveling
          and <span>
            <v-tooltip activator="parent" location="bottom">(Drinking beer)</v-tooltip>
            more
          </span>.
        </p>

        <p class="pt-5">
          I hope you have a wonderful {{ day }}!
        </p>
      </div>



    </div>
  </v-sheet>
</template>

<script setup>
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const date = new Date();
let day = days[date.getDay()];

</script>

<style>
.about-me-text {
  line-height: 2em
}

.headlineMe {
  color: #5B8FB9;
}

@media screen and (max-width: 950px) {
  .about-me-text {
    text-align: center;
  }

  .headlineMe {
    text-align: center;
  }
}
</style>
