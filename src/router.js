import VueRouter from 'vue-router'
import Home from '@/components/Home.vue'
import CreateRecipeForm from '@/components/CreateRecipeForm.vue'
import LandingPage from '@/components/LandingPage.vue'

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
            component: LandingPage
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
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem('chef_token') == null) {
            next({
                path: '/login',
                params: { nextUrl: to.fullPath }
            })
        } else {
            //let user = JSON.parse(localStorage.getItem('bg_user'))
            next()
        }
    } else if (to.matched.some(record => record.meta.guest)) {
        if (localStorage.getItem('chef_token') == null) {
            next()
        } else {
            next({
                name: 'Home',
            })
        }
    } else {
        next()
    }
})

export default router