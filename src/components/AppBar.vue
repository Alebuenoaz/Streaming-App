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
            <v-btn height="40" rounded color="primary" v-bind="attrs" v-on="on">
              <v-icon left color="charcoal0">mdi-account-circle</v-icon>Juan
              Perez
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in items" :key="index">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
    </v-row>

    <div class="text-center"></div>
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
  }),
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
