/* eslint-disable */
<template>
  <v-card height="12vh">
    <v-footer color="#181818" app>
      <v-row no-gutters>
        <v-col cols="3">
          <v-card color="#181818" dark>
            <v-card-actions>
              <v-list-item>
                <v-list-item-avatar tile size="70">
                  <v-avatar class="ma-3" tile size="70">
                    <v-img
                      src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"
                    ></v-img>
                  </v-avatar>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>La Nota</v-list-item-title>
                  <v-list-item-title
                    >Manuel Turizo, Rauw Alejandro, Myke
                    Towers</v-list-item-title
                  >
                </v-list-item-content>

                <v-row align="center" justify="start">
                  <v-btn class="mx-1" icon color="white">
                    <v-icon size="24px">{{ "mdi-heart-outline" }}</v-icon>
                  </v-btn>
                  <v-btn class="mx-1" icon color="white">
                    <v-icon size="24px">{{ "mdi-overscan" }}</v-icon>
                  </v-btn>
                </v-row>
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
            color="#181818"
          >
            <v-card-text>
              <v-btn
                v-for="icon in icons1"
                :key="icon"
                class="mx-1"
                color="white"
                icon
              >
                <v-icon size="24px">{{ icon }}</v-icon>
              </v-btn>
              <v-btn class="mx-1" icon color="white">
                <v-icon size="40px">{{ "mdi-play-circle" }}</v-icon>
              </v-btn>
              <v-btn
                v-for="icon in icons2"
                :key="icon"
                class="mx-1"
                icon
                color="white"
              >
                <v-icon size="24px">{{ icon }}</v-icon>
              </v-btn>
            </v-card-text>
            <v-divider></v-divider>
          </v-card>
          <v-row align="center" justify="center">
            <v-card flat tile color="#181818" dark width="100%" class="pb-5">
              <v-card-text>
                <v-progress-linear
                  color="white"
                  class="mb-0"
                  value="30"
                  height="3"
                ></v-progress-linear>
              </v-card-text>
            </v-card>
          </v-row>
        </v-col>
        <v-col cols="3" align-self="center">
          <v-row class="ml-15">
            <v-btn
              v-for="icon in icons3"
              :key="icon"
              class="mx-1"
              icon
              color="white"
            >
              <v-icon size="24px">{{ icon }}</v-icon>
            </v-btn>
            <v-card flat color="#181818" dark width="20%" class="d-flex">
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
  </v-card>
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

<style lang="scss" scoped></style>
