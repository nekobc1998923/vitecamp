import router from '@/router/index';
import store from '@/store';
import App from './App.vue';
import '@/assets/styles/index.scss';
import 'virtual:windi.css';

const app = createApp(App);

app.use(router).use(store);

app.mount('#app');
