import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'element-plus/theme-chalk/dark/css-vars.css'
//message插槽/组件 无法通过自动引用使用 故在此使用全局引入element plus
import 'element-plus/dist/index.css'
// pinia 引入状态管理库
import { createPinia } from 'pinia'

const app = createApp(App)

app.use(router)
app.use(createPinia())
app.mount('#app')
