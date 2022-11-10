<template>
  <div>
    <span v-if="$i18n.locale === 'en'" @click="switchLang"><nuxt-link :to="switchLocalePath('ar')">العربية</nuxt-link></span>
    <span v-if="$i18n.locale === 'ar'" @click="switchLang"><nuxt-link :to="switchLocalePath('en')">English</nuxt-link></span>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    switchLang() {
      console.log('here')
      this.$router.go();
    }
  }
}
</script>

<style scoped lang="scss">
span {
  font-weight: 600;
  margin: 0 10px;
  a {
    color: #000;
  }
}
</style>