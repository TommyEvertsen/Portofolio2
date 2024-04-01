<template>
  <v-container class="px-10 mt-5">
    <v-row justify="center">
      <v-col cols="5">
        <v-card class="mx-auto" rounded="0">
          <v-img
            fill-height
            src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
            cover
          >
            <v-avatar color="grey" rounded="0" size="150">
              <v-img
                src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
                cover
              ></v-img>
            </v-avatar>
            <v-list-item
              class="text-white"
              subtitle="Network Engineer"
              title="Marcus Obrien"
            ></v-list-item>
          </v-img>
        </v-card>
      </v-col>

      <v-col cols="5">
        <v-sheet
          class="d-flex align-center justify-center flex-wrap text-center mx-auto px-4"
          elevation="4"
          height="250"
          max-width="800"
          width="100%"
          rounded
        >
          <div>
            <h2 class="text-h4 font-weight-black text-orange">
              Tommy Evertsen
            </h2>

            <div class="text-h5 font-weight-medium mb-2">
              Fullstack developer
            </div>

            <p class="text-body-2 mb-4">
              Please head over to your inbox/spam or others folder to find our
              verificaiton email.
            </p>

            <v-btn color="orange" variant="text">Go to Login</v-btn>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
