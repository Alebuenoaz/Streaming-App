<template>
  <v-app-bar app color="charcoal0" height="64">
    <v-row align="center">
      <v-col offset="1" cols="3">
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
      <v-col offset="6" cols="2">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="btn-user"
              height="40"
              rounded
              color="primary"
              v-bind="attrs"
              v-on="on"
              v-on:click="changeIcon"
            >
              <v-icon left color="charcoal0" size="28px" class="ml-1"
                >mdi-account-circle</v-icon
              >
              <span class="ml-1">{{ user }}</span>
              <v-icon right color="charcoal0">{{ arrowIcon }}</v-icon>
            </v-btn>
          </template>
          <v-list color="primary" dark>
            <v-list-item v-for="(item, index) in items" :key="index">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar",
  data: () => ({
    items: [
      { title: "Cuenta" },
      { title: "Perfil" },
      { title: "Sube a premiun" },
      { title: "Cerrar sesión" },
    ],
    user: "Juan Perez",
    arrowIcon: "mdi-arrow-down-drop-circle-outline",
  }),
  methods: {
    changeIcon() {
      if (this.arrowIcon == "mdi-arrow-down-drop-circle-outline") {
        this.arrowIcon = "mdi-arrow-up-drop-circle-outline";
      } else {
        this.arrowIcon = "mdi-arrow-down-drop-circle-outline";
      }
    },
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
.btn-user {
  text-transform: none !important;
}
</style>
