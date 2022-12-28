import Vuex from "vuex";

export default () => {
  return new Vuex.Store({
    state: {
      user: null,
      websiteSettings: [],
      footerData: {},
      cartItems: [],
    },
    getters: {},
    mutations: {
      setUserData(state, data) {
        state.user = data;
      },
      getWebsiteSettings(state, data) {
        state.websiteSettings = data;
      },
      getFooterData(state, data) {
        state.footerData = data;
      },
    },
    actions: {
      async nuxtServerInit({ commit }, { req, redirect }) {
        if (process.server) {
          // GET WEBSITE MAIN SETTINGS
          const SETTINGS = await this.$axios.get("/settings");
          commit("getWebsiteSettings", SETTINGS.data.data);

          // GET FOOTER LINKS
          const FOOTER_DATA = await this.$axios.get("/footer/1");
          commit("getFooterData", FOOTER_DATA.data.data);

          const USER_DATA = await this.$cookies.get("cms-user");

          commit("setUserData", USER_DATA);
        }
      },
    },
  });
};
