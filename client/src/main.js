import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";

// Define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')

