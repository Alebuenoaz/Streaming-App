<template>
  <v-list flat>
    <v-list-item-group v-model="selectedItem" color="primary">
      <v-list-item v-for="(item, i) in visibleResults" :key="i">
        <p style="height: 16px; width: 16px">{{ i }}</p>
        <v-list-item-avatar height="40px" width="40px">
          <v-img :src="item.artworkUrl100"></v-img>
        </v-list-item-avatar>
        <v-list-item-content class="pl-1">
          <v-list-item-title v-text="item.collectionName"></v-list-item-title>
          <v-list-item-subtitle v-text="item.artistName"></v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-content class="py-3">
          <v-list-item-subtitle
            v-text="item.collectionType"
          ></v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-content class="py-3 pr-13">
          <v-list-item-subtitle
            v-text="item.releaseDate"
          ></v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-content class="py-3 pr-3 pl-13">
          <v-list-item-subtitle
            v-text="item.collectionPrice"
          ></v-list-item-subtitle>
        </v-list-item-content>
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
    items: [
      { text: "Real-Time", icon: "mdi-clock" },
      { text: "Audience", icon: "mdi-account" },
      { text: "Conversions", icon: "mdi-flag" },
    ],
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
  },
};
</script>
