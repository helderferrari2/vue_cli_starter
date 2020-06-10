import Vue from "vue";
import Vuex from "vuex";
import auth from "@/store/modules/auth/auth";
import user from "@/store/modules/users/user";
import preloader from "@/store/modules/helpers/preloader";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        auth,
        user,
        preloader
    }
});

export default store;
