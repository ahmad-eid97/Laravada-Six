import Vuex from 'vuex'

export default () => {
  return new Vuex.Store({
    state: {
      footerLinks: {}
    },
    getters: {},
    mutations: {
      getFooterLinks(state, data) {
        state.footerLinks = data
      }
    },
    actions: {
      async nuxtServerInit ({ commit }, { req }) {
        const FOOTER_LINKS = await this.$axios.get('/footer/useful-links');
        commit('getFooterLinks', FOOTER_LINKS.data)
      }
    }
  })
}