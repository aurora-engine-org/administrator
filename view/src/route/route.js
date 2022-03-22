
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path:'/admin',
        name:'admin',
        redirect:'/admin/home',
        component:()=>import("@/views/admin/AdminView"),
        children:[
            {
                path:'test',
                name:'test',
                component:()=>import("@/views/TestView")
            },
            {
                path:'home',
                name:'admin-home',
                component:()=>import('@/views/admin/AdminHome')
            },
            {
                path:'404',
                name: 'not-found',
                component:()=>import('@/views/notfound/NotFound')
            },
            {
                path: "/admin/:pathMatch(.*)",
                redirect:'/admin/404',
                component:()=>import('@/views/notfound/NotFound')
            },
        ],
    }
]

const Route= createRouter({
    history: createWebHashHistory(),
    routes,
})

export default Route
