import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ML_CAGR_Return from "../views/ML_CAGR_Return";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: Home,
  },
  {
    path: "/example",
    name: "example",
    component: ML_CAGR_Return,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
