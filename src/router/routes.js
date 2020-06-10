import Vue from "vue";
import VueRouter from "vue-router";
import routes from "@/router/routes.map";
import {
  initCurrentUserStateMiddleware,
  checkAccessMiddleware
} from "@/router/middlewares";

//ROUTES
Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  routes
});

//Middlewares
router.beforeEach(initCurrentUserStateMiddleware);
router.beforeEach(checkAccessMiddleware);

export default router;
