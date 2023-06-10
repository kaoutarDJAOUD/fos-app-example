<template>
  <div class="container">
    <div class="row justify-content-between">
      <div class="col-sm-3 mt-5" v-for="(anime, index) in animeList" :key="index">
        <anime-card :anime="anime" :index="index"></anime-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AnimeCard from "./AnimeCard.vue";

export default {
  components: {
    AnimeCard,
  },
  computed: {
    ...mapGetters(["animeList"]),
  },
};
</script>

<style></style>