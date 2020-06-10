export default {
  state: {
    isLoading: false
  },
  mutations: {
    PRELOADER(state, payload) {
      state.isLoading = payload;
    }
  },

  actions: {
    startPreloader(context) {
      context.commit("PRELOADER", true);
    },

    stopPreloader(context) {
      context.commit("PRELOADER", false);
    }
  }
};
