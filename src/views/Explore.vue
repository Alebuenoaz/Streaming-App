<template>
  <v-container>
    <h2>Tus géneros más escuchados</h2>
    <v-row>
      <v-col
        cols="4"
        v-for="category in exploreCategories.slice(9, 12)"
        :key="category.name"
        ><explore-card :category="category" type="large"
      /></v-col>
    </v-row>
    <h2>Explorar todo</h2>
    <v-row>
      <v-col cols="2" v-for="category in exploreCategories" :key="category.name"
        ><explore-card :category="category" type="regular"
      /></v-col>
    </v-row>
  </v-container>
</template>

<script>
import exploreCard from "../components/ExploreCard.vue";

export default {
  name: "Explore",

  components: {
    exploreCard,
  },
  data: function () {
    return {
      exploreCategories: [
        {
          name: "Hip hop",
          src: "https://i.scdn.co/image/ab67706f000000029bb6af539d072de34548d15c",
          color: "#ba5d07",
        },
        {
          name: "Latino",
          src: "https://i.scdn.co/image/ab67706f00000002c0925455c07f873209f0d370",
          color: "#e13300",
        },
        {
          name: "Podcast",
          src: "https://i.scdn.co/image/567158eb895ad26718a814345af0fc43ee785ec5",
          color: "#27856a",
        },
        {
          name: "Especial",
          src: "https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe",
          color: "#1e3264",
        },
        {
          name: "Éxitos",
          src: "https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_global_default.jpg",
          color: "#8d67ab",
        },
        {
          name: "Novedades",
          src: "https://i.scdn.co/image/ab67706f000000027ea4d505212b9de1f72c5112",
          color: "#e8115b",
        },
        {
          name: "Rock",
          src: "https://i.scdn.co/image/ab67706f00000002fe6d8d1019d5b302213e3730",
          color: "#e61e32",
        },
        {
          name: "Equal",
          src: "https://t.scdn.co/images/4c8b58ab42b54296ad5379514d36edac",
          color: "#148a08",
        },
        {
          name: "Fiesta",
          src: "https://i.scdn.co/image/ab67706f00000002caa115cbdb8cd3d39d67cdc0",
          color: "#af2896",
        },
        {
          name: "Viajes",
          src: "https://t.scdn.co/images/44cf5615d3244f289fcedefa96b85db9",
          color: "#2d46b9",
        },
        {
          name: "Pride",
          src: "https://t.scdn.co/images/c9a01586687a45a78c56d9be5aed3c79.jpeg",
          color: "#477d95",
        },
        {
          name: "Romance",
          src: "https://i.scdn.co/image/ab67706f0000000213601d4833623a4d6b328e38",
          color: "#8c1932",
        },
      ],
    };
  },
};
</script>
<style>
h2 {
  color: white;
  margin: 16px 0px;
}
</style>
