<template>
  <v-container class="py-6 px-4 ma-0">
    <v-row>
      <v-col v-for="(item, i) in visibleResults" :key="i" cols="2" class="px-6">
        <template>
          <v-card class="card-explore" color="primary" height="350" width="196">
            <v-row>
              <v-img height="150" class="mx-6 my-6" :src="item.artworkUrl100">
                <v-icon
                  class="float-right elevation-10"
                  style="margin-top: 100px"
                  large 
                  lightcolor="white"
                  >mdi-play</v-icon
                >
              </v-img>
            </v-row>
            <v-card-title
              class="card-title py-6 white--text"
              style="font-size: 16px"
              v-text="item.collectionName"
            ></v-card-title>
            <v-card-subtitle
              class="card-title py-6 white--text"
              style="font-size: 12px"
              v-text="item.collectionName"
            ></v-card-subtitle>
          </v-card>
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "SearchList",
  data: () => ({
    selectedItem: 1,
    results: [],
    term: "foals",
    media: "music",
    entity: "album",
  }),
  computed: {
    visibleResults() {
      this.searchMusic();
      return this.results;
    },
  },
  methods: {
    async searchMusic() {
      await axios
        .get(
          `http://localhost:8080/search?term=${this.term}&media=${this.media}&entity=${this.entity}&limit=20`
        )
        .then((res) => {
          this.results = res.data.results;
        });
    },
  },
};
</script>
