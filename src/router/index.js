import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/views/Layout/index";
import Home from "@/views/Home";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Layout.Default,
    children: [
      {
        path: "",
        name: "home",
        component: Home,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
