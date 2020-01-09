import Vue from "vue";
import Router from "vue-router";
import Home from "@/page/Home";
import city from "@/page/city";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/city",
      name: "city",
      component: city
    }
  ]
});
