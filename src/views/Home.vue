<template>
  <div class="home">
    <SongsListCards />
    <nav-bar-right />
  </div>
</template>

<script>
import SongsListCards from "@/components/SongsListCards.vue";
import NavBarRight from "../components/NavBarRight.vue";

export default {
  name: "Home",

  components: {
    SongsListCards,
    NavBarRight,
  },
};
</script>
