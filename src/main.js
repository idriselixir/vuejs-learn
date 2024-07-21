// import './assets/main.css';
// import router from './router';

// import 'primeicons/primeicons.css'


// import { createApp } from 'vue'
// import App from './App.vue'

// app.use(router)

// const App = createApp(App)
// app.mount('#app')
import './assets/main.css';
import router from './router';
import 'primeicons/primeicons.css';
import Toast  from 'vue-toastification';
import 'vue-toastification/dist/index.css'


import { createApp } from 'vue';
import AppComponent from './App.vue'; // Rename the imported App to AppComponent

const app = createApp(AppComponent); // Create the app using AppComponent
app.use(router);
app.use(Toast);


app.mount('#app');
