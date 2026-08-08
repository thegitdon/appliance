import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

import { createApp } from 'vue'
import Home from './Home.vue'
import router from './router'

const app = createApp(Home)

app.use(router)

app.mount('#app')
