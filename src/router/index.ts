import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import ContatePage from "../pages/ContatePage.vue";

const routes = [
    {
        name: 'home',
        component: HomePage,
        path: '/'
    },
    {
        name: 'contate',
        component: ContatePage,
        path: '/contate'
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router