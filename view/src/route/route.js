
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path:'/admin',
        name:'admin',
        component:()=>import("@/views/AdminView"),
        children:[
            {
                path:'test',
                name:'test',
                component:()=>import("@/views/TestView")
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
