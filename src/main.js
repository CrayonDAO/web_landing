import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./styles/index.scss";

const urls = {
  discord: "https://discord.gg/KFCRGrqZ",
  twitter: "https://twitter.com/Crayon_DAO",
  github: "https://github.com/crayondao",
  getStarted: "https://app.crayondao.com",
  notion: " https://crayondao.notion.site/Home-of-Crayon-DAO-Creator-78f8641d1da64d43ae93d76ce642aa91",
  $CRAY: "https://docs.crayondao.com/dao-as-a-service/products/cray",
  documentation: "https://docs.crayondao.com/",
  medium: "https://crayodao.medium.com/",
  telegram: "https://t.me/crayon_DAO",
  newletter: "https://forms.gle/8ztj7HKfmAomhwsg7",
};
Vue.prototype.$urls = urls;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
