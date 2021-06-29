<template>
  <v-card class="card-explore" :color="category.color">
    <v-card-title class="card-title">{{ category.name }}</v-card-title>
    <v-row no-gutters>
      <v-col :offset="type == 'regular' ? 6 : 8">
        <v-img
          class="img-rotate"
          aspect-ratio="1"
          height="100"
          :src="category.src"
        >
        </v-img>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "ExploreCard",

  components: {},
  props: {
    category: Object,
    type: String,
  },
};
</script>
<style>
.card-explore {
  overflow: hidden;
}
.card-title {
  color: #ffffff;
  font-weight: bold;
}
.img-rotate {
  /* transform: ; */
  transform: translate(16px, 8px) rotateY(0deg) rotate(24deg);
  overflow: hidden;
}
</style>
