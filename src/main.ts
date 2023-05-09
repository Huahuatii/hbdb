import { createApp } from 'vue'
import Layout from '../src/views/layout/Layout.vue'
import router from './router'
import ElementPlus from 'element-plus'
// import './assets/main.css'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { createPinia } from 'pinia'


import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faHatWizard } from '@fortawesome/free-solid-svg-icons'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

library.add(faCoffee)
library.add(faHatWizard)
library.add(faUserSecret)

const app = createApp(Layout)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.component('font-awesome-icon', FontAwesomeIcon)


app.use(router).use(createPinia()).use(ElementPlus)
app.mount('#app')

