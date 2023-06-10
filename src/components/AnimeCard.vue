<template>
  <b-card :title="title" :img-src="anime.imgUrl" :img-alt="`${anime.title}-Image`" img-top style="max-width: 20rem"
    class="mb-2 text-center ">
    <b-card-text> Number of episode : {{ anime.episodes }} </b-card-text>
    <b-card-text> Status : {{ anime.status }} </b-card-text>

    <b-button class="btn btn-outline-primary m-2" @click="navigateToEdit" variant="outline-primary">Edit</b-button>
  </b-card>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      default: -1
    },
    anime: {
      type: Object,
      default: function () {
        return {
          title: "",
          episodes: 0,
          status: null,
          imgUrl: "",
        };
      },
    },
  },

  methods: {
    navigateToEdit() {
      const data = {
        index: this.index,
        anime: this.anime
      };

      this.$router.push({
        name: 'Edit Anime',
        query: data
      });
    }

  },
};
</script>

<style></style>