<template>
  <main>
    <v-container class="px-10 mt-10 mb-10">
      <v-row>
        <v-col class="pa-2" cols="12" xl="5" lg="6" md="6" sm="12" xs="12">
          <h1 class="contact">Stay in touch</h1>
          <div class="mt-10">
            <p style="font-size: large; line-height: 2em">
              Good {{ time }} welcome to my contact page, feel free to contact
              me. If you want to send me an email please use the address below.
              If you are curious about my coding projects then visit my
              github profile, link below. If you want to visit my linkin profile
              there is link to that aswell.

              <br><br>

              <p>
                Right now it's {{ time }} so i am probably {{ activity }} but i will answer as soon as i can. 
                I wish you a pleasant {{ time }}
              </p>

            </p>
            <br />

            <h2 class="mt-10">Contact information</h2>

            <p class="mt-10" style="font-size: large; line-height: 2em">
              Tommy Evertsen
            </p>

            <p style="font-size: large; line-height: 2em">
              Email: tommyevertsen52@gmail.com
            </p>

            <h3 class="mt-10">Stay in touch!</h3>

            <div class="mt-10">
              <v-btn
                href="https://www.linkedin.com/in/tommy-evertsen/"
                color="#5B8FB9"
                density="comfortable"
                class="button mr-2"
                icon="mdi-linkedin"
                hover
              ></v-btn>
              <v-btn
                href="https://github.com/TommyEvertsen"
                color="#5B8FB9"
                density="comfortable"
                class="button mx-2"
                icon="mdi-github"
              ></v-btn>
            </div>
          </div>
        </v-col>
        <v-col class="pa-2"> </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script setup>
import { ref, onMounted } from "vue";

const currentTime = ref("");
const currentActivity = ref("");

onMounted(() => {
  const now = new Date();
  const hour = now.getHours();

  if (hour >= 22 || hour < 5) {
    currentTime.value = " night";
    currentActivity.value = " sleeping";
  } else if (hour >= 6 && hour < 10) {
    currentTime.value = " morning";
    currentActivity.value = "at work";
  } else if (hour >= 11 && hour < 18) {
    currentTime.value = " day";
    currentActivity.value = "at work";
  } else {
    currentTime.value = " evening";
    currentActivity.value = "enjoying a hobby activity";
  }
});

const time = currentTime;
const activity = currentActivity;
</script>

<style>
.contact {
  color: #5b8fb9;
  font-weight: bold;
}

.contact-text {
  font-size: large;
  line-height: 2em;
}

.button:hover {
  opacity: 80%;
}
</style>
