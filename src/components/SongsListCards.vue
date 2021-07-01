<template>
  <v-container fluid>
    <v-flex>
      <v-layout justify-center>
        <h3 id="textfield1" class="title is-4 has-text-centered">
          Hecho para Ti
        </h3>
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
<style scoped></style>
