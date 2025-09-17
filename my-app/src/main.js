import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import GlobalRegistration from './lessons/GlobalRegistration.vue'

const app = createApp(App)        // bikin instance app

// Registrasi global komponen
app.component('MyButton', GlobalRegistration) // sekarang bisa dipakai di mana saja

app.mount('#app')                 // mount sekali saja
