import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueCookies from "vue3-cookies";
import { createLogto } from '@logto/vue';

const config = {
  endpoint: 'https://auth.spectranetworks.ca',
  appId: 'meUQQ2KlAg47gr5bZF2he',
};


const app = createApp(App);


app.use(router);
router.app = app;

app.use(createLogto, config);
app.use(VueCookies);
app.mount("#app");