import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import HomeView from "@/views/HomeView.vue";
import AnimeView from "@/views/AnimeCreationView.vue";
import AnimeEdit from "@/views/AnimeEditView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/new-anime",
    name: "Anime",
    component: AnimeView,
  },
  {
    path: "/edit-anime",
    name: "Edit Anime",
    component: AnimeEdit,
  },
];

const router = new Router({
  routes,
});

export default router;
