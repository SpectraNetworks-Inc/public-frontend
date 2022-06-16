import { createRouter, createWebHistory } from "vue-router";
import RootPage from './pages/HomePage.vue';
import HomePage from './pages/HomePage.vue';
import TestPage from './pages/TestPage.vue';

import NotFound from './pages/errors/404Page.vue'


const routes = [
  {
    path: "/",
    name: "RootPage",
    component: RootPage
  },
  {
    path: "/home",
    name: "HomePage",
    component: HomePage
  },
  {
    path: "/test",
    name: "TestPage",
    component: TestPage
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});


export default router;