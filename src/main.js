import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueCookies from "vue3-cookies";
import { createAuth0 } from '@auth0/auth0-vue';
import config from '@/config.js'

const app = createApp(App);


app.use(
  createAuth0({
    domain: config.auth0.domain,
    client_id: config.auth0.client_id,
    redirect_uri: config.auth0.redirect_uri,
    useRefreshTokens: config.auth0.useRefreshTokens,
    cacheLocation: config.auth0.cacheLocation,
    audience: config.auth0.audience,
  })
);

app.use(router);
router.app = app;

app.use(VueCookies);
app.mount("#app");