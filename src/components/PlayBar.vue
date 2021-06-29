
<template>
  <v-card height="400px">
    <v-footer
      color="#181818"
      padless
      fixed
    >
      <v-card
        flat
        tile
        width="100%"
        class="text-center"
        color="#181818"
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons1"
            :key="icon"
            class="mx-4"
            color="white"
            icon
          >
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
          <v-btn
            class="mx-4"
            icon
            color="white"
          >
            <v-icon size="40px">{{ 'mdi-play-circle' }}</v-icon>
          </v-btn>
          <v-btn
            v-for="icon in icons2"
            :key="icon"
            class="mx-4"
            icon
            color="white"
          >
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>

        <v-divider></v-divider>
      </v-card>
      <v-row align="center" justify="center">
          <v-card
            flat
            tile
            color="#181818"
            dark
            width="800"
            class="pb-5"
              >
            <v-card-text>
            <v-progress-linear
                color="white"
                class="mb-0"
                value="30"
            ></v-progress-linear>
            </v-card-text>
              </v-card>
      </v-row>
    </v-footer>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      icons1: [
        'mdi-shuffle-variant',
        'mdi-skip-previous',
        // 'mdi-playlist-music',
      ],
      icons2: [
        'mdi-skip-next',
        'mdi-repeat',
      ],
    }),
  }
</script>

<style lang="scss" scoped>

</style>