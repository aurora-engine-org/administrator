import { createRouter, createWebHashHistory } from 'vue-router'
// administrator 系统路由配置
const routes = [
    {
        path:'/',
        name:'index',
        component:()=>import('@/views/index/IndexView')
    },
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
            //管理页面 首页
            {
                path:'home',
                name:'admin-home',
                component:()=>import('@/views/admin/page/AdminHome')
            },
            {
                path:'404',
                name: 'not-found',
                component:()=>import('@/views/notfound/NotFound')
            },
            {
                path:'article',
                name:'article',
                component:()=>import('@/views/admin/page/WritingCenter')
            },
            {
                path:'subject',
                name:'subject',
                component:()=>import('@/views/admin/page/WritingSubject')
            },
            // /admin/:pathMatch(.*) 定向 管理系统内 菜单页面找不到提示
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
