<template>
  <v-flex>
    <song-card></song-card>
  </v-flex>
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
