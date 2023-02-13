import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/main.scss'
import VueSplide from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import {createI18n} from "vue-i18n";
import {uz} from './lang/uz.js'
import {ru} from './lang/ru.js'



const messages = {
    uz,ru
}
const i18n = createI18n({
    locale: 'uz',
    fallbackLocale: 'uz',
    messages,

})


createApp(App).use(router).use(i18n).use(VueSplide).mount('#app')
