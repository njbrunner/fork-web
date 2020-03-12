import VueRouter from 'vue-router';

import Home from '@/components/Home.vue';
import CreateRecipeForm from '@/components/recipeBook/CreateRecipeForm.vue';
import LandingPage from '@/components/auth/LandingPage.vue';
import store from './store';

let router = new VueRouter({
    mode: 'history',
    base: 'fork-web',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/login',
            name: 'Login',
            component: LandingPage,
            meta: {
                noToken: true
            }
        },
        {
            path: '/recipe/new',
            name: 'New Recipe',
            component: CreateRecipeForm,
            meta: {
                requiresAuth: true
            }
        }
    ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.getUser == null) {
            next({
                path: '/login',
                params: { nextUrl: to.fullPath }
            });
        } else {
            next();
        }
    } else if (to.matched.some(record => record.meta.noToken)) {
        store.dispatch('fetchUser');
        if (store.getters.getUser == null) {
            next();
        } else {
            next({
                name: 'Home',
            });
        }
    } else {
        next();
    }
});

export default router;