import About from "@/pages/About.vue";
import Blog from "@/pages/Blog.vue";
import Home from "@/pages/Home.vue";
import NotFound from "@/pages/NotFound.vue";
import Privacy from "@/pages/Privacy.vue";
import Terms from "@/pages/Terms.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/home",
      name: "home",
      component: Home,
    },
    {
      path: "/blog",
      name: "blog",
      component: Blog,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/privacy",
      name: "privacy",
      component: Privacy,
    },
    {
      path: "/terms",
      name: "terms",
      component: Terms,
    },
    {
      path: "/:pathMatch(.*)*",
      component: NotFound,
    },
  ],
});

export default router;
