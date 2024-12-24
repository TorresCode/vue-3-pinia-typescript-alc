import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import ContatePage from "../pages/ContatePage.vue";
import AuthTemplate from "../layouts/AuthTemplate.vue";
import LoginPage from "../pages/Auth/LoginPage.vue";

const routes = [
    {
        path: '/',
        component: AuthTemplate,
        children: [
           {
            path: '',
            component: LoginPage,
            name: 'auth.login'
           }
        ]
    },
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