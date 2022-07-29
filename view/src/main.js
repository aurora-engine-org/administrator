import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import route from './route/route.js'
import mitt from 'mitt'

const app=createApp(App)
app.use(ElementPlus)
app.use(route)
//消息总线
app.config.globalProperties.$bus=new mitt()
app.mount('#app')