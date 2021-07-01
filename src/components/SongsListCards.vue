<template>
  <v-container fluid>
    <v-flex>
      <v-layout justify-center>
        <h1>Hecho para Ti</h1>
      </v-layout>

      <song-card></song-card>
    </v-flex>
  </v-container>
</template>

<script>
import SongCard from "./SongCard.vue";
export default {
  name: "SongsListCards",

  components: {
    SongCard,
  },
};
</script>
<style scoped>
</style>
