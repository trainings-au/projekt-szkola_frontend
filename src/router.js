import Vue from "vue";
import Router from "vue-router";
import article from "./components/article";
import list from "./components/list";

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", component: list },
    { path: "/article", component: article }
  ]
});
