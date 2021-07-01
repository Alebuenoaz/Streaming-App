<template>
  <v-app>
    <AppBar />
    <NavBarRight fixed />

    <v-main>
      <router-view />
    </v-main>

    <PlayBar />
  </v-app>
</template>

<script>
import AppBar from "./components/AppBar.vue";
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
    AppBar,
  },
};
</script>
