import { createRouter, createWebHistory } from "vue-router";
import RootPage from './pages/HomePage.vue';
import HomePage from './pages/HomePage.vue';
import TestPage from './pages/TestPage.vue';
import DashboardHomePage from './pages/dashboard/Home/DashboardHomePage.vue';
import DashboardPage from './pages/dashboard/DashboardPage.vue';
import LoginPage from './pages/auth/LoginPage.vue';
import SignUpPage from './pages/auth/SignUpPage.vue';
import ForgotPage from './pages/auth/ForgotPage.vue';
import LogOutPage from './pages/auth/LogoutPage.vue';

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
    path: "/login",
    name: "LoginPage",
    component: LoginPage
  },
  {
    path: "/signup",
    name: "SignUpPage",
    component: SignUpPage
  },
  {
    path: "/forgot",
    name: "ForgotPage",
    component: ForgotPage
  },
  {
    path: "/logout",
    name: "LogOutPage",
    component: LogOutPage
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