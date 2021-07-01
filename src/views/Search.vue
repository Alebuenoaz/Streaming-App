<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card color="charcoal0" dark flat tile>
          <v-card-actions>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Search</v-list-item-title>
                <h1 style="font-size: 64px">Oasis</h1>
              </v-list-item-content>
            </v-list-item>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <SongsListCards />
  </v-container>
</template>

<script>
import SongsListCards from "@/components/SongsListCards.vue";

export default {
  name: "Search",

  components: {
    SongsListCards,
  },
};
</script>
