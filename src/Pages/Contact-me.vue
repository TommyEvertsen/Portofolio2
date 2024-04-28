<template>
    <main>
        <v-container class="px-10 mt-10 mb-10">
            <v-row>
                <v-col class="pa-2" cols="12" xl="5" lg="6" md="6" sm="12" xs="12">
                    <h1 class="contact">Stay in touch</h1>
                    <div class="mt-10">
                        <p style="font-size: large; line-height: 2em;">Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Nullam elementum rutrum neque et cursus. Phasellus varius tincidunt tortor,
                            a congue metus ornare a. Nulla dignissim justo sit amet finibus auctor. Nunc finibus augue
                            id sem aliquet congue. Curabitur eu velit laoreet, laoreet odio quis, suscipit urna. Quisque
                            pellentesque iaculis arcu eget rhoncus. Donec hendrerit nec dui vel tempor. Nunc fermentum,
                            lectus a luctus dapibus, lectus felis ornare lacus, ac tristique lacus leo vitae nisl.
                            Mauris arcu erat, tincidunt ut sollicitudin a, suscipit at odio..
                        </p>
                        <br>


                        <h2 class="mt-10">Contact information</h2>

                        <p class="mt-10" style="font-size: large; line-height: 2em;">
                            Tommy Evertsen
                        </p>

                        <p style="font-size: large; line-height: 2em;">
                            Tel: +47 94898917
                        </p>

                        <p style="font-size: large; line-height: 2em;">
                            Email: tommyevertsen52@gmail.com
                        </p>

                        <h3 class="mt-10">Stay in touch!</h3>

                        <div class="mt-10 ">
                            <v-btn href="https://www.linkedin.com/in/tommy-evertsen/" color="#5B8FB9"
                                density="comfortable" class="button mr-2" icon="mdi-linkedin" hover></v-btn>
                            <v-btn href="https://github.com/TommyEvertsen" color="#5B8FB9" density="comfortable"
                                class="button mx-2" icon="mdi-github"></v-btn>
                        </div>


                    </div>

                </v-col>
                <v-col class="pa-2">



                </v-col>
            </v-row>
        </v-container>
    </main>
</template>

<script setup>

</script>

<style>
.contact {
    color: #5B8FB9;
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