import { createRouter, createWebHistory } from "vue-router";
import RootPage from './pages/HomePage.vue';
import HomePage from './pages/HomePage.vue';
import TestPage from './pages/TestPage.vue';
import CallbackPage from './pages/auth/CallbackPage.vue';
import DashboardHomePage from './pages/dashboard/Home/DashboardHomePage.vue';
import DashboardPage from './pages/dashboard/DashboardPage.vue';
import LogoutPage from './pages/auth/LogoutPage.vue';

import NotFound from './pages/errors/404Page.vue'


const routes = [
  {
    path: "/",
    name: "RootPage",
    component: RootPage
  },
  {
    path: '/callback',
    name: 'CallbackPage',
    component: CallbackPage,
  },
  {
    path: '/logout',
    name: 'LogoutPage',
    component: LogoutPage,
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
  },
  {
    path: "/dashboard",
    name: "DashboardPage",
    component: DashboardPage,
    children: [
      {
        path: "home",
        name: "DashboardHomePage",
        component: DashboardHomePage
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});


export default router;