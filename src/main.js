import Vue from "vue";
import App from "@/App.vue";
import router from "@/router/routes";
import store from "@/store/store";
import Snotify from "vue-snotify";
import VeeValidate from "vee-validate";
import "@/scss/main.scss";
Vue.use(Snotify);
Vue.use(VeeValidate);

//VUEJS configuration
Vue.config.productionTip = false;
Vue.prototype.$eventHub = new Vue();

//Global Components
Vue.component("preloader", require("@/components/helpers/Preloader").default);

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
