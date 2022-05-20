import { createApp } from 'vue'
import App from './App.vue'
import naive from 'naive-ui'
import route from './route/route.js'
import mitt from 'mitt'

const app=createApp(App)
app.use(naive);
app.use(route)
//消息总线
app.config.globalProperties.$bus=new mitt()
app.mount('#app')