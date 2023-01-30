import Vuex from "vuex";

export default () => {
  return new Vuex.Store({
    state: {
      topMenu: [],
      user: null,
      websiteSettings: [],
      footerData: {},
      socialLinks: [],
      footerPages: [],
      usefulLinks: [],
      cartItems: [],
      showLoader: false,
      showPopup: true,
    },
    getters: {},
    mutations: {
      getTopMenu(state, data) {
        state.topMenu = data;
      },
      setUserData(state, data) {
        state.user = data;
      },
      getWebsiteSettings(state, data) {
        state.websiteSettings = data;
      },
      getFooterData(state, data) {
        state.footerData = data;
      },
      getFooterSocialData(state, data) {
        state.socialLinks = data;
      },
      getFooterPages(state, data) {
        state.footerPages = data;
      },
      getFooterUsefulLinks(state, data) {
        state.usefulLinks = data;
      },
      closePopup(state, data) {
        state.showPopup = data;
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

          const TOP_MENU = await this.$axios.get("/menus");
          commit("getTopMenu", TOP_MENU.data.data);

          const SOCIAL_LINKS = await this.$axios.get(
            "/setting/all/social_media"
          );
          commit("getFooterSocialData", SOCIAL_LINKS.data.data);

          const PAGES = await this.$axios.get("/pages");
          commit("getFooterPages", PAGES.data.data.pages);

          const USEFUL_LINKS = await this.$axios.get("/footer/useful-links");
          commit("getFooterUsefulLinks", USEFUL_LINKS.data.data.data);
        }
      },
    },
  });
};
