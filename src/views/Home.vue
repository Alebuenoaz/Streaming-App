<template>
  <div class="home">
    <SongsListCards />
    <nav-bar-right />
    <PlayBar/>
  </div>
</template>

<script>
import SongsListCards from "@/components/SongsListCards.vue";
import NavBarRight from "../components/NavBarRight.vue";
import PlayBar from "../components/PlayBar.vue"

export default {
  name: "Home",

  components: {
    SongsListCards,
    NavBarRight,
    PlayBar
  },
};
</script>
