<template>
  <v-navigation-drawer left color="primary" app>
    <template v-slot:prepend>
      <v-list-item two-line class="my-6 ml-3 pa-0 mr-2">
        <v-list-item-avatar class="mr-1 my-0" height="64px" width="64px">
          <img src="https://randomuser.me/api/portraits/women/81.jpg" />
        </v-list-item-avatar>

        <v-list-item-content class="pa-0 mt-1">
          <v-list-item-title class="white--text"
            >Jane Smith</v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>
    </template>

    <v-list dense class="pa-0">
      <v-list-item
        v-for="item in items"
        :key="item.title"
        class="pa-0 ml-3 mr-2 mb-6"
        :height="item.height"
        width="172px"
      >
        <v-icon
          class="pa-0 mr-1 my-0"
          height="24px"
          width="24px"
          color="black"
          >{{ item.icon }}</v-icon
        >
        <v-list-item-title
          class="pa-0 white--text"
          :height="item.height"
          width="144px"
          >{{ item.title }}</v-list-item-title
        >
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
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
