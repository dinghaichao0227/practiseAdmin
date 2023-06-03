import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

import { createPinia } from 'pinia';
import * as Antd from 'ant-design-vue';
import "../src/assets/font/style.css"

import 'ant-design-vue/dist/antd.css';
import "normalize.css";
import "../src/style/index.scss"

const pinia = createPinia()
const app = createApp(App);
app.use(router)
app.use(pinia)
app.use(Antd)
app.mount('#app')
