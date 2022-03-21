import { createApp } from 'vue'
import App from './App.vue'
import route from './route/route.js'
import mitt from 'mitt'

const app=createApp(App)
app.use(route)
app.config.globalProperties.$bus=new mitt()

app.mount('#app')