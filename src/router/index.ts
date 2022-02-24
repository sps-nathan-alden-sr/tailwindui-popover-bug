"use strict";

import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import AboutView from "@/views/AboutView.vue";
import HomeView from "@/views/HomeView.vue";

interface RouteMetaMetaElement {
  content?: string,
  name: string
}

declare module "vue-router" {
  interface RouteMeta {
    title: string,
    metaElements: Array<RouteMetaMetaElement>
  }
}

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomeView
  },

  {
    path: "/about",
    name: "About",
    component: AboutView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
