<template>
  <v-footer height="88px" color="charcoal0" app>
    <v-row no-gutters>
      <v-col cols="3">
        <v-card color="charcoal0" dark flat>
          <v-card-actions class="pt-0">
            <v-list-item class="pl-0">
              <v-list-item-avatar tile size="56">
                <v-avatar class="ma-3" tile size="56">
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"
                  ></v-img>
                </v-avatar>
              </v-list-item-avatar>

              <v-list-item-content class="card-content">
                <v-list-item-title>La Nota</v-list-item-title>
                <v-list-item-subtitle
                  >Manuel Turizo, Rauw Alejandro, Mike
                  Towers</v-list-item-subtitle
                >
              </v-list-item-content>
              <v-list-item-content>
                <v-row>
                  <v-btn class="ml-2" icon color="#b3b3b3">
                    <v-icon size="16px">{{ "mdi-heart-outline" }}</v-icon>
                  </v-btn>
                  <v-btn icon color="#b3b3b3">
                    <v-icon size="16px">{{ "mdi-overscan" }}</v-icon>
                  </v-btn>
                </v-row>
              </v-list-item-content>
            </v-list-item>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card
          flat
          tile
          width="100%"
          class="text-center d-flex"
          color="charcoal0"
        >
          <v-card-text class="py-1">
            <v-btn
              v-for="icon in icons1"
              :key="icon"
              class="mx-1"
              color="#b3b3b3"
              icon
            >
              <v-icon size="20px">{{ icon }}</v-icon>
            </v-btn>
            <v-btn class="mx-1" icon color="white">
              <v-icon size="40px">{{ "mdi-play-circle" }}</v-icon>
            </v-btn>
            <v-btn
              v-for="icon in icons2"
              :key="icon"
              class="mx-1"
              icon
              color="#b3b3b3"
            >
              <v-icon size="20px">{{ icon }}</v-icon>
            </v-btn>
          </v-card-text>
          <v-divider></v-divider>
        </v-card>
        <v-row align="center" justify="center" class="mt-1">
          <span>0:00</span>

          <v-card
            flat
            tile
            color="charcoal0"
            dark
            width="560px"
            class="mt-0 px-2"
          >
            <v-progress-linear
              color="white"
              value="30"
              height="3"
            ></v-progress-linear>
          </v-card>
          <span>3:48</span>
        </v-row>
      </v-col>
      <v-col cols="3" align-self="center">
        <v-row class="button-footer" justify="end">
          <v-btn
            v-for="icon in icons3"
            :key="icon"
            class="mx-1"
            icon
            color="#b3b3b3"
          >
            <v-icon size="20px">{{ icon }}</v-icon>
          </v-btn>
          <v-card flat color="charcoal0" dark width="120px" class="d-flex">
            <v-card-text>
              <v-progress-linear
                color="white"
                value="80"
                height="3"
              ></v-progress-linear>
            </v-card-text>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons1: [
      "mdi-shuffle-variant",
      "mdi-skip-previous",
      // 'mdi-playlist-music',
    ],
    icons2: ["mdi-skip-next", "mdi-repeat"],
    icons3: [
      "mdi-microphone-variant",
      "mdi-menu-open",
      "mdi-desktop-tower-monitor",
      "mdi-volume-high",
    ],
  }),
};
</script>

<style lang="scss" scoped>
.button-footer {
  margin-left: 20%;
}
.card-content {
  width: 400px !important;
}
span {
  color: #b3b3b3;
  font-size: 12px;
}
</style>
