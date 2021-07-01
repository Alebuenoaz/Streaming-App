import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Explore from "../views/Explore";
<<<<<<< HEAD
import Search from "../views/Search.vue"
=======
import Playlist from '../views/Playlist'
>>>>>>> 15e6668e37239a35cfae2073829ea281b91682d9

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/explore",
    name: "Explore",
    component: Explore,
  },
  {
<<<<<<< HEAD
    path: "/seacrh",
    name: "Search",
    component: Search,
=======
    path: "/playlist",
    name: "Playlist",
    component: Playlist,
>>>>>>> 15e6668e37239a35cfae2073829ea281b91682d9
  },
];

const router = new VueRouter({
  routes,
});

export default router;
