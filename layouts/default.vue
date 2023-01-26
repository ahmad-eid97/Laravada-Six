<template>
  <div id="app" :class="$i18n.locale === 'en' ? 'english' : 'arabic'">
    <Loader v-if="$store.state.showLoader" />
    <app-header></app-header>

    <router-view />

    <app-footer></app-footer>
  </div>
</template>

<script>
import Loader from "../components/UIs/Loader.vue";
import AppHeader from "../components/header/AppHeader.vue";
import AppFooter from "../components/footer/AppFooter.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
    Loader,
  },
  watch: {
    $route(to, from) {
      window.scrollTo(0, 0);
    },
  },

  created() {
    // this.$route.params.lang = localStorage.getItem('code');
    // if (this.$route.params.lang === 'ar') {
    //   localStorage.setItem('code', 'ar');
    //   this.$i18n.locale = 'ar';
    //   document.documentElement.setAttribute('dir', 'rtl');
    //   document.documentElement.setAttribute('lang', 'ar');
    //   document.body.classList.add('rtl');
    // } else {
    //   localStorage.setItem('code', 'en');
    //   this.$i18n.locale = 'en';
    //   document.documentElement.setAttribute('dir', 'ltr');
    //   document.documentElement.setAttribute('lang', 'en');
    //   document.body.classList.remove('rtl');
    // }
  },
  mounted() {
    // this.$route.params.lang  = this.lang;
    window.scrollTo(0, 0);
    this.$store.state.cartItems = localStorage.getItem("laravadaCart")
      ? JSON.parse(localStorage.getItem("laravadaCart"))
      : [];

    document
      .querySelector(":root")
      .style.setProperty(
        "--main-color",
        this.$store.state.websiteSettings.find(
          (one) => one.key === "primary_color"
        ).plain_value
      );

    // document
    //   .querySelector(":root")
    //   .style.setProperty(
    //     "--secondary-color",
    //     this.$store.state.websiteSettings.find(
    //       (one) => one.key === "secondary_color"
    //     ).plain_value
    //   );
  },
};
</script>
<style></style>
