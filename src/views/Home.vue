<template>
  <div class="home">
    <SongsImageName/>
    <SongsListCards />
  </div>
</template>

<script>
import SongsListCards from "@/components/SongsListCards.vue";
import SongsImageName from '../components/SongsImageName.vue';

export default {
  name: "Home",

  components: {
    SongsListCards,
    SongsImageName,
  },
};
</script>
