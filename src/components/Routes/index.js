import { createRouter, createWebHistory } from 'vue-router'
import Categories from '../HomeComp/Categories.vue'


const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Categories
        }
    ], // short for `routes: routes`
})
export default router