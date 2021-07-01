<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-card color="primary" dark flat tile>
          <v-card-actions>
            <v-list-item>
              <v-list-item-avatar tile size="232">
                <v-avatar class="ma-3" tile size="232">
                  <v-img
                    src="https://charts-images.scdn.co/assets/locale_en/regional/daily/region_bo_large.jpg"
                  ></v-img>
                </v-avatar>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>Playlist</v-list-item-title>
                <h1 style="font-size: 96px">Top 50: Bolivia</h1>
                <v-list-item-title
                  >Tu actualización diaria de las canciones más escuchadas ahora
                  mismo en Bolivia.</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mb-3">
      <v-col cols="12">
        <v-btn class="mt-5 ml-8" icon color="green">
          <v-icon size="64px">{{ "mdi-play-circle" }}</v-icon>
        </v-btn>
        <v-btn class="mt-5 ml-7" icon color="green">
          <v-icon size="32px">{{ "mdi-heart-outline" }}</v-icon>
        </v-btn>
        <v-btn class="mt-5 ml-7" icon color="green">
          <v-icon size="32px">{{ "mdi-dots-horizontal" }}</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-container>
      <v-row>
        <h3 class="pl-15">#</h3>
        <h3 class="pl-6">TÍTULO</h3>
        <h3 style="padding-left: 250px">REPRODUCCIONES</h3>
        <h3 style="padding-left: 220px">ÁLBUM</h3>
        <v-btn style="margin-left: 165px" class="m-0" icon color="white">
          <v-icon size="24px">{{ "mdi-clock-time-three-outline" }}</v-icon>
        </v-btn>
      </v-row>
      <songs-list />
    </v-container>
  </div>
</template>

<script>
import SongsList from "../components/SongsList.vue";

export default {
  name: "Playlist",

  components: {
    SongsList,
  },
  data: function () {
    return {
      exploreCategories: [
        {
          name: "Hip hop",
          src: "https://charts-images.scdn.co/assets/locale_en/regional/daily/region_bo_large.jpg",
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
      ],
    };
  },
};
</script>

<style>
h3 {
  color: white;
}
</style>
