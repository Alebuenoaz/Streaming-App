<template>
  <div class="home">
    <SongsListCards />
  </div>
</template>

<script>
import SongsListCards from "@/components/SongsListCards.vue";

export default {
  name: "Home",

  components: {
    SongsListCards,
  },
};
</script>
