import { AuthService } from "@/services/auth.service";
import store from "@/store/store";

/*
  Get initial state from user and verified if is authenticated
*/
export async function initCurrentUserStateMiddleware(to, from, next) {
  let token = AuthService.getToken();
  let user = store.state.auth.user;

  //If has token, call api to get user auth
  if (token && !user) {
    await store.dispatch("getUserAuth");
    next();
  } else {
    next();
  }
}

/*
  Verify if route needs to authentication
*/
export function checkAccessMiddleware(to, from, next) {
  let userAuth = store.state.auth.user;
  let isAuthRoute = to.matched.some(record => record.meta.requiresAuth);

  if (isAuthRoute && userAuth) return next();
  if (isAuthRoute) return next({ name: "login" });
  next();
}
