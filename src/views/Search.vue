<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card dark flat tile>
          <v-card-actions>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Search</v-list-item-title>
                <h1 style="font-size: 96px">Foals</h1>
              </v-list-item-content>
            </v-list-item>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <SearchList />
  </v-container>
</template>

<script>
import SearchList from "../components/SearchList.vue";

export default {
  name: "Search",

  components: {
    SearchList,
  },
};
</script>
