<template>
  <v-app>
    <div>
      <v-app-bar app color="#2E2E2E" height="64">
        <v-row align="center">
          <v-col offset="3" cols="3">
            <v-text-field
              class="mt-6 search-bar"
              placeholder="Artistas, canciones o podcast"
              prepend-inner-icon="mdi-magnify"
              rounded
              single-line
              background-color="primary"
              clearable
              dark
              height="40"
            ></v-text-field>
          </v-col>
          <v-col offset="3" cols="3">
            <v-btn height="40" rounded color="primary">
              <v-icon left color="#CACACA">mdi-account-circle</v-icon>Juan Perez
            </v-btn>
          </v-col>
        </v-row>
      </v-app-bar>
      <NavBarRight  fixed />
    </div>

    <v-main>
      <router-view />
    </v-main>

    <PlayBar />
  </v-app>
</template>

<script>
import NavBarRight from "./components/NavBarRight.vue";
import PlayBar from "./components/PlayBar.vue";

export default {
  name: "App",

  data: () => ({
    //
  }),
  components: {
    NavBarRight,
    PlayBar,
  },
};
</script>

<style>
.v-input.search-bar.v-input__slot {
  background: "#1e3264" !important;
  color: "#1e3264" !important;
}
.v-input__prepend-inner {
  align-self: center !important;
}
</style>
