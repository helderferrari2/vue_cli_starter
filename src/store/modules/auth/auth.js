import { AuthService } from "@/services/auth.service";
import endpoint from "@/api/api";

export default {
  state: {
    user: null,
    authenticated: false
  },

  mutations: {
    AUTH_USER(state, user) {
      (state.authenticated = true), (state.user = user);
    },

    AUTH_USER_LOGOUT(state) {
      state.user = null;
      state.authenticated = false;
    }
  },

  getters: {},

  actions: {
    login(context, params) {
      return new Promise((resolve, reject) => {
        return endpoint
          .apiLogin(params)
          .then(response => {
            context.commit("AUTH_USER", response.data.data.user);
            AuthService.setToken(response.data.data.token);
            resolve(response);
          })
          .catch(() => reject());
      });
    },

    getUserAuth(context) {
      return new Promise((resolve, reject) => {
        return endpoint
          .apiGetUserAuth()
          .then(response => {
            context.commit("AUTH_USER", response.data.data);
            resolve();
          })
          .catch(() => reject());
      });
    },

    logout(context) {
      AuthService.deleteToken();
      context.commit("AUTH_USER_LOGOUT");
    }
  }
};
