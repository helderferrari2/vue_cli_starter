import { handleErrorResponse } from "@/services/helpers.service";
import endpoint from "@/api/api";

export default {
  state: {
    user: {}
  },

  mutations: {
    SET_USER(state, payload) {
      state.user = payload;
    }
  },

  getters: {},

  actions: {
    userStore(context, params) {
      return new Promise((resolve, reject) => {
        return endpoint
          .apiUserStore(params)
          .then(() => resolve())
          .catch(error => {
            reject(handleErrorResponse(error));
          });
      });
    }
  }
};
