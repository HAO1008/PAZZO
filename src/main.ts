import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import Components from './components';

const app = createApp(App)
Object.keys(Components).forEach((name: string) =>
  app.component(name, Components[name as keyof typeof Components])
);
app.use(createPinia())
app.use(router)

app.mount('#app')
