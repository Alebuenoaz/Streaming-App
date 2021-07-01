<template>
  <v-navigation-drawer left color="black" app>
    <template v-slot:prepend>
      <v-list-item two-line class="my-6 ml-6 pa-0 mr-2">
        <v-list-item-avatar class="mr-1 my-0" height="40px" width="40px">
          <!-- <v-img
            :src="require('../assets/logo.svg')"
            class="my-3"
            contain
            height="200"
          /> -->
          <v-icon size="56px" color="primary">mdi-music-circle-outline</v-icon>
        </v-list-item-avatar>

        <v-list-item-content class="pa-0 mt-1">
          <v-list-item-title class="white--text text-h5 font-weight-bold ml-2"
            >MusicApp</v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>
    </template>

    <v-list dense class="pa-0 ml-2">
      <v-list-item :to="{ name: 'Home' }">
        <v-list-item-action>
          <v-icon
            class="pa-0 mr-1 my-0"
            height="24px"
            width="24px"
            color="white"
            >mdi-home</v-icon
          >
        </v-list-item-action>
        <v-list-item-title class="pa-0 white--text">Home </v-list-item-title>
      </v-list-item>
      <v-list-item :to="{ name: 'Playlist' }">
        <v-list-item-action>
          <v-icon
            class="pa-0 mr-1 my-0"
            height="24px"
            width="24px"
            color="white"
            >mdi-music-box-multiple</v-icon
          >
        </v-list-item-action>
        <v-list-item-title class="pa-0 white--text"
          >Libreria
        </v-list-item-title>
      </v-list-item>
      <v-list-item :to="{ name: 'Search' }">
        <v-list-item-action>
          <v-icon
            class="pa-0 mr-1 my-0"
            height="24px"
            width="24px"
            color="white"
            >mdi-magnify</v-icon
          >
        </v-list-item-action>
        <v-list-item-title class="pa-0 white--text">Buscar </v-list-item-title>
      </v-list-item>
      <v-list-item :to="{ name: 'Explore' }">
        <v-list-item-action>
          <v-icon
            class="pa-0 mr-1 my-0"
            height="24px"
            width="24px"
            color="white"
            >mdi-account-group</v-icon
          >
        </v-list-item-action>
        <v-list-item-title class="pa-0 white--text"
          >Listen Together
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
// import { logo } from "../assets/spotify.svg";

export default {
  name: "HelloWorld",
  data: () => ({
    drawer: true,
    items: [
      { title: "Home", icon: "mdi-home", height: "24px" },
      { title: "Libreria", icon: "mdi-music-box-multiple", height: "24px" },
      { title: "Buscar", icon: "mdi-magnify", height: "24px" },
      { title: "Listen Together", icon: "mdi-account-group", height: "24px" },
      {
        title: "Transferencia de contenido",
        icon: "mdi-swap-horizontal-bold",
        height: "42px",
      },
    ],
    right: null,
  }),
};
</script>
