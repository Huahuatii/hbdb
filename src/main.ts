import { createApp } from 'vue'
import Layout from '../src/views/layout/Layout.vue'
import router from './router'
import ElementPlus from 'element-plus'
// import './assets/main.css'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { createPinia } from 'pinia'



const app = createApp(Layout)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(router).use(createPinia()).use(ElementPlus)
app.mount('#app')
