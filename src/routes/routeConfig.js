import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("@/pages/Home.vue"),
    },
    {
      path: "/home",
      name: "home",
      component: () => import("@/pages/Home.vue"),
    },
    {
      path: "/blog",
      name: "blog",
      component: () => import("@/pages/Blog.vue"),
    },
    {
      path: "/blog/:slug",
      name: "blogDetails",
      component: () => import("@/pages/BlogDetails.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/pages/About.vue"),
    },
    {
      path: "/privacy",
      name: "privacy",
      component: () => import("@/pages/Privacy.vue"),
    },
    {
      path: "/terms",
      name: "terms",
      component: () => import("@/pages/Terms.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      component: () => import("@/pages/NotFound.vue"),
    },
  ],
});

export default router;
