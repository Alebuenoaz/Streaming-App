<template>
  <v-container>
    <h1 class="white--text">Escuchados recientemente</h1>

    <SongsImageName />

    <h1 class="white--text">Hecho para Ti</h1>

    <SongsListCards />
  </v-container>
</template>

<script>
import SongsListCards from "@/components/SongsListCards.vue";
import SongsImageName from "../components/SongsImageName.vue";

export default {
  name: "Home",

  components: {
    SongsListCards,
    SongsImageName,
  },
};
</script>
