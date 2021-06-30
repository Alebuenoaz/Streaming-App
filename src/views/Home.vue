<template>
  <!--songs-list /-->
  <songs-image-name />
</template>

<script>
import SongsImageName from "../components/SongsImageName.vue";
//import SongsList from "../components/SongsList.vue";

export default {
  name: "Home",

  components: {
    //SongsList,
    SongsImageName,
  },
};
</script>
