<template>
  <v-container>
    <v-flex>
      <v-layout justify-center>
        <h3 id="textfield1" class="title is-4 has-text-centered">
          Itunes Songs.
        </h3>
      </v-layout>

      <br />

      <v-row dense>
        <v-col
          v-for="(item, i) in visibleResults"
          :key="i"
          cols="12"
          sm="3"
          ls="12"
          class="pa-3 d-flex flex-column"
        >
          <v-card height="100%">
            <v-avatar
              :tile="true"
              size="250"
              class="ma-3 center elevation-4 album-box mt-3"
              round
            >
              <img
                :src="resizeImageUrl(item)"
                alt="Album Cover"
                class="album-cover"
              />
            </v-avatar>

            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  id="contenido"
                  v-text="item.collectionName"
                  class="textadapt font-weight-light"
                ></v-card-title>

                <v-card-subtitle v-text="item.artistName"></v-card-subtitle>

                <v-card-actions>
                  <v-btn text> Price {{ item.collectionPrice }} $ </v-btn>
                </v-card-actions>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-flex>
  </v-container>
</template>

<script>
import axios from "axios";
import { API_HOST } from "../utils/constant";
import { config } from "../utils/config";
export default {
  name: "SongsListCards",
  data: () => ({
    listOfAlbums: [],
    selectedSong: "Oasis",
    entity: "album",
    page: 0,
    searching: false,
    noResults: false,
  }),
  computed: {
    visibleResults() {
      this.getByName();
      return this.listOfAlbums;
    },
  },
  methods: {
    async getByName() {
      var self = this;
      self.searching = true;
      axios
        .get(
          API_HOST +
            `term=${self.selectedSong}&entity=${self.entity}&limit=20
            }`,
          config
        )
        .then((response) => {
          self.searching = false;
          this.listOfAlbums = response.data.results;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    resizeImageUrl: function (size) {
      return size.artworkUrl100.replace("100x100", "320x320");
    },
  },
};
</script>
<style scoped>
.album-box {
  position: relative;
  display: inline-block;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.album-box:hover {
  -webkit-transform: scale(1.12, 1.12);
  transform: scale(1.12, 1.12);
}
.textadapt {
  overflow: hidden;
  text-overflow: ellipsis;
}
.centrado {
  display: inline-block;
}
</style>