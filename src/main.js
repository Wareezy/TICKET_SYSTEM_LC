import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import '@fortawesome/fontawesome-free/css/all.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
const head = document.head;
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css";
head.appendChild(link);





createApp(App).use(store).use(router).mount('#app')
AOS.init({
    offset: 100,
    delay: 300,
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
  });