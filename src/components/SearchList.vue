<template>
  <v-container class="py-6 px-4 ma-0">
    <v-row>
      <v-col v-for="(item, i) in visibleResults" :key="i" cols="2" class="px-6" >
        <v-card class="primary pa-0" style="height: 350px; width: 300px" >
          <v-img
            class="white--text align-end "
            :src="item.artworkUrl100"
          >
            <v-btn rounded class="px-0">
              <v-icon class="pa-0 ma-0" color="black"
                >mdi-message-text
              </v-icon>
            </v-btn>
          </v-img>
          <v-card-text primary>
            <div
              class="text-Lato charcoal0--text"
              style="font-size: 12px"
              v-text="item.collectionName"
            ></div>

            <div
              class="text-Lato charcoal0--text"
              style="font-size: 12px"
              v-text="item.collectionName"
            ></div>
          </v-card-text>
        </v-card>
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
