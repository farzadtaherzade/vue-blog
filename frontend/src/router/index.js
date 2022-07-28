import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Blogs from "../views/BlogsView.vue";
import BlogDetailView from "../views/BlogDetailView.vue";
import AddBlogView from "../views/AddBlogView.vue";
import Register from "../views/RegisterView.vue";
import Login from "../views/LoginView.vue";
import Profile from "../views/ProfileView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/blogs",
      name: "blogs",
      component: Blogs,
    },
    {
      path: "/blogs/:id",
      name: "blog detail",
      component: BlogDetailView,
    },
    {
      path: "/blogs/new",
      name: "add new blog",
      component: AddBlogView,
    },
    {
      path: "/auth/login",
      name: "login",
      component: Login,
    },
    {
      path: "/auth/register",
      name: "register",
      component: Register,
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
