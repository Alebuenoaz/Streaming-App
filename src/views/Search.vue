<template>
  <div class="search">
    <search-list/>
  </div>
</template>

<script>
import SearchList from '../components/SearchList.vue';

export default {
  name: "Search",

  components: {
    SearchList,
  },
};
</script>
