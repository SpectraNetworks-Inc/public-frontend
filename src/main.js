import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueCookies from "vue3-cookies";

const app = createApp(App);


app.use(router);
router.app = app;

app.use(VueCookies);
app.mount("#app");