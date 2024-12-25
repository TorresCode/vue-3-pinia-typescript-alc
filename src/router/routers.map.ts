import AuthTemplate from "../layouts/AuthTemplate.vue";
import LoginPage from "../pages/Auth/LoginPage.vue";
import ForgotPage from "../pages/Auth/ForgotPage.vue";
import DefaultTemplate from "../layouts/DefaultTemplate.vue";
import HomeAdmin from "../pages/admin/home/HomeAdmin.vue";

export default [
    {
        path: '/',
        component: AuthTemplate,
        children: [
           {
            path: '',
            component: LoginPage,
            name: 'auth.login'
           },
           {
            path: '/forgot_password',
            component: ForgotPage,
            name: 'auth.forgot'
           }
        ]
    },
    {
        path: '/admin',
        component: DefaultTemplate,
        children: [
           {
            path: '',
            component: HomeAdmin,
            name: 'admin.home'
           }
        ]
    },
]
