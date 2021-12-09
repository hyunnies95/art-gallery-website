import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './assets/sass/styles.sass'

createApp(App).use(router).use(AOS.init()).mount('#app')
