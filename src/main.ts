
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

import './assets/style.css'
import { createPinia } from 'pinia'
// import { r } from 'vue-router'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount("#app")

