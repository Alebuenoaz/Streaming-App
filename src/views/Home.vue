<template>
  <div class="home">
    <SongsImageName />
    <v-layout justify-center>
      <h1 class="white--text">Hecho para Ti</h1>
    </v-layout>
    <SongsListCards />
  </div>
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
