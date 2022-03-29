import { createWebHistory, createRouter } from "vue-router";
import Page1 from '@/Pages/Page_1.vue'
import Page2 from '@/Pages/Page_2.vue'
import Page3 from '@/Pages/Page_3.vue'
import HomePage from '@/Pages/HomePage.vue'


const routes = [
    {
        path: "/",
        name: "Home",
        component: HomePage
    },

    {
        path: "/page1",
        name: "Page1",
        component: Page1
    },

    {
        path: "/page2",
        name: "Page2",
        component: Page2
    },

    {
        path: "/page3",
        name: "Page3",
        component: Page3
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router