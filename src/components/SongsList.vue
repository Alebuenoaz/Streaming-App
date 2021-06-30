<template>
  <v-list flat class="px-6">
    <v-list-item-group v-model="selectedItem" class="pa-0">
      <v-list-item
        v-for="(item, i) in visibleResults"
        :key="i"
        class="mb-1 pa-0 primary"
        style="height: 40px"
      >
        <p
          class="my-3 mx-6 text-Lato charcoal0--text"
          style="height: 16px; width: 16px; font-size: 12px; text-align: center"
        >
          {{ i }}
        </p>
        <v-list-item-avatar tile height="40px" width="40px" class="ma-0">
          <v-img :src="item.artworkUrl100"></v-img>
        </v-list-item-avatar>
        <div
          class="myDiv pb-1 text-Lato charcoal0--text"
          style="height: 40px; width: 332px"
        >
          <v-list-item-content class="pl-1 pt-0">
            <v-list-item-title
              style="font-size: 12px"
              v-text="item.collectionName"
            >
            </v-list-item-title>
            <v-list-item-subtitle
              style="font-size: 12px"
              v-text="item.artistName"
            >
            </v-list-item-subtitle>
          </v-list-item-content>
        </div>
        <div
          class="myDiv py-3 text-Lato charcoal0--text"
          style="height: 40px; width: 36px"
        >
          <v-list-item-content class="py-0">
            <v-list-item-subtitle
              style="font-size: 12px"
              v-text="item.collectionType"
            >
            </v-list-item-subtitle>
          </v-list-item-content>
        </div>
        <div
          class="myDiv py-3 text-Lato charcoal0--text"
          style="height: 40px; width: 112px; margin-left: 324px"
        >
          <v-list-item-content class="py-0 pr-13">
            <v-list-item-subtitle
              style="font-size: 12px"
              v-text="localDateFormat(item.releaseDate)"
            ></v-list-item-subtitle>
          </v-list-item-content>
        </div>
        <div
          class="myDiv py-3 text-Lato charcoal0--text"
          style="height: 40px; width: 32px; margin-left: 88px"
        >
          <v-list-item-content class="py-0">
            <v-list-item-subtitle
              style="font-size: 12px; text-align: center"
              v-text="item.collectionPrice"
            ></v-list-item-subtitle>
          </v-list-item-content>
        </div>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
import axios from "axios";
export default {
  name: "SongsList",
  data: () => ({
    selectedItem: 1,
    results: [],
    term: "foals",
    media: "all",
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
          `http://localhost:8080/search?term=${this.term}&media=${this.media}&entity=${this.entity}&limit=200`
        )
        .then((res) => {
          this.results = res.data.results;
        });
    },
    localDateFormat(date) {
      let newDate = new Date(date);
      return newDate.toLocaleDateString();
    },
  },
};
</script>
