<template>
  <div>
    <!-- <span v-if="$i18n.locale === 'en'" @click="switchLang"
      ><nuxt-link :to="switchLocalePath('ar')">العربية</nuxt-link></span
    >
    <span v-if="$i18n.locale === 'ar'" @click="switchLang"
      ><nuxt-link :to="switchLocalePath('en')">English</nuxt-link></span
    > -->
    <span v-if="$i18n.locale === 'en'" @click="switchLang">العربية</span>
    <span v-if="$i18n.locale === 'ar'" @click="switchLang">English</span>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    async switchLang() {
      if (this.$i18n.locale === "en") {
        await this.$router.replace(this.switchLocalePath("ar"));
      } else {
        await this.$router.replace(this.switchLocalePath("en"));
      }
      this.$router.go();
    },
  },
};
</script>

<style scoped lang="scss">
span {
  font-weight: 600;
  margin: 0 10px;
  color: #000;
  cursor: pointer;
}
</style>
