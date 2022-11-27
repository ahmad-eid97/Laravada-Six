import Vuex from 'vuex'

export default () => {
  return new Vuex.Store({
    state: {
      websiteSettings: [],
      footerData: {}
    },
    getters: {},
    mutations: {
      getWebsiteSettings(state, data) {
        state.websiteSettings = data
      },
      getFooterData(state, data) {
        state.footerData = data
      }
    },
    actions: {
      async nuxtServerInit ({ commit }, { req }) {
        // GET WEBSITE MAIN SETTINGS
        const SETTINGS = await this.$axios.get('/settings');
        commit('getWebsiteSettings', SETTINGS.data.data)

        // GET FOOTER LINKS
        const FOOTER_DATA = await this.$axios.get('/footer/1');
        commit('getFooterData', FOOTER_DATA.data.data)
      }
    }
  })
}