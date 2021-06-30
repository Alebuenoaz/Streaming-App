<template>
  <v-container class="py-6 px-4 ma-0">
    <v-row dense>
      <v-col v-for="(item, i) in visibleResults" :key="i" cols="4">
        <v-card class="primary" style="height: 104px; width: 344px mx-0">
          <div class="d-flex flex-no-wrap py-0">
            <v-avatar class="py-0" size="104" tile>
              <v-img :src="item.artworkUrl100"></v-img>
            </v-avatar>
            <div class="pl-9">
              <v-card-title
                class="text-Lato charcoal0--text"
                style="font-size: 32px"
                v-text="item.collectionName"
              ></v-card-title>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "SongsImageName",
  data: () => ({
    selectedItem: 1,
    results: [],
    term: "foals",
    media: "all",
    entity: "album",
    items: [
      {
        color: "#1F7087",
        src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        title: "Supermodel",
        artist: "Foster the People",
      },
      {
        color: "#952175",
        src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        title: "Halcyon Days",
        artist: "Ellie Goulding",
      },
      {
        color: "#952175",
        src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        title: "Halcyon Days",
        artist: "Ellie Goulding",
      },
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
          `http://localhost:8080/search?term=${this.term}&media=${this.media}&entity=${this.entity}&limit=6`
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
