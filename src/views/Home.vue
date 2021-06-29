<template>
  <div>
    <songs-list />
    <PlayBar/>
  </div>
</template>

<script>
import SongsList from "../components/SongsList.vue";
import PlayBar from "../components/PlayBar.vue"

export default {
  name: "Home",

  components: {
    SongsList,
    PlayBar
  },
};
</script>
