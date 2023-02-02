<template>
  <div class="home">
    <app-home-intro :slides="slides"></app-home-intro>
    <app-home-growth></app-home-growth>
    <app-home-investors></app-home-investors>
    <app-home-social></app-home-social>
    <app-home-brands :partners="partners"></app-home-brands>
    <app-home-bars></app-home-bars>
    <app-home-organisations></app-home-organisations>
    <div v-if="$store.state.sectionsStatus.activities">
      <app-home-activities :activities="activities.data" />
    </div>
    <div v-if="$store.state.sectionsStatus.steps">
      <app-home-steps :steps="steps.data" />
    </div>
    <app-home-bost></app-home-bost>
    <app-home-team></app-home-team>
    <app-home-blog :blogs="blogs"></app-home-blog>
    <app-home-bottom></app-home-bottom>
    <!-- <app-home-banner></app-home-banner>
    <app-home-features></app-home-features>
    <app-home-count></app-home-count>
    <app-home-work></app-home-work>
    <app-home-values></app-home-values>
    <app-home-testominials></app-home-testominials>
    <app-home-news></app-home-news>
    <app-home-partners></app-home-partners>
    <app-home-bottom-banner></app-home-bottom-banner> -->
    <SocialChat :attendants="attendants">
      <p slot="header">Click one of our representatives below to chat.</p>
      <template v-slot:button="{ open }">
        <span v-show="!open">Contact us</span>
        <span v-show="open">Close</span>
      </template>
      <small slot="footer">Opening hours: 8am to 10pm</small>
    </SocialChat>
  </div>
</template>

<script>
import AppHomeBottom from "../components/home/AppHomeBottom.vue";
import AppHomeBars from "../components/home/AppHomeBars.vue";
import AppHomeBlog from "../components/home/AppHomeBlog.vue";
import AppHomeBost from "../components/home/AppHomeBost.vue";
import AppHomeBrands from "../components/home/AppHomeBrands.vue";
import AppHomeGrowth from "../components/home/AppHomeGrowth.vue";
// import AppHomeBanner from '../components/home/AppHomeBanner.vue'
// import AppHomeBottomBanner from '../components/home/AppHomeBottomBanner.vue'
// import AppHomeCount from '../components/home/AppHomeCount.vue'
// import AppHomeFeatures from '../components/home/AppHomeFeatures.vue'
import AppHomeIntro from "../components/home/AppHomeIntro.vue";
import AppHomeInvestors from "../components/home/AppHomeInvestors.vue";
import AppHomeOrganisations from "../components/home/AppHomeOrganisations.vue";
import AppHomeSocial from "../components/home/AppHomeSocial.vue";
import AppHomeTeam from "../components/home/AppHomeTeam.vue";
import AppHomeActivities from "../components/home/AppHomeActivities.vue";
import AppHomeSteps from "../components/home/AppHomeSteps.vue";
// import AppHomeNews from '../components/home/AppHomeNews.vue'
// import AppHomePartners from '../components/home/AppHomePartners.vue'
// import AppHomeTestominials from '../components/home/AppHomeTestominials.vue'
// import AppHomeValues from '../components/home/AppHomeValues.vue'
// import AppHomeWork from '../components/home/AppHomeWork.vue'

export default {
  name: "Home",
  data() {
    return {
      attendants: [
        {
          app: "whatsapp",
          label: "Support",

          name: this.$store.state.websiteSettings.find(
            (one) => one.key === "chat_widget_whatsapp_label"
          )
            ? this.$store.state.websiteSettings.find(
                (one) => one.key === "chat_widget_whatsapp_label"
              ).plain_value
            : "Laravada",

          number: this.$store.state.websiteSettings.find(
            (one) => one.key === "chat_widget_whatsapp_number"
          )
            ? this.$store.state.websiteSettings.find(
                (one) => one.key === "chat_widget_whatsapp_number"
              ).plain_value
            : "11111111111",

          avatar: {
            src: "https://avatars0.githubusercontent.com/u/8084606?s=460&u=20b6499a416cf7129a18e5c168cf387e159edb1a&v=4",
            alt: "Laravada customer support",
          },
        },
        {
          app: "messenger",
          label: "Technical support",

          name: this.$store.state.websiteSettings.find(
            (one) => one.key === "chat_widget_messenger_label"
          )
            ? this.$store.state.websiteSettings.find(
                (one) => one.key === "chat_widget_messenger_label"
              ).plain_value
            : "Laravada Facebook",

          id: this.$store.state.websiteSettings.find(
            (one) => one.key === "chat_widget_messenger_id"
          )
            ? this.$store.state.websiteSettings.find(
                (one) => one.key === "chat_widget_messenger_id"
              ).plain_value
            : "111111111111",

          avatar: {
            src: "https://avatars0.githubusercontent.com/u/8084606?s=460&u=20b6499a416cf7129a18e5c168cf387e159edb1a&v=4",
            alt: "Laravada customer support",
          },
        },
      ],
    };
  },
  async asyncData({ $axios, app }) {
    const slides = await $axios.get("/sliders", {
      headers: {
        "Accept-Language": app.i18n.locale,
      },
    });

    const partners = await $axios.get("/partners");

    const blogs = await $axios.get("/blogs?latest=1");

    const activities = await $axios.get("/sections/activities", {
      headers: {
        "Accept-Language": app.i18n.locale,
      },
    });

    const steps = await $axios.get("/sections/steps", {
      headers: {
        "Accept-Language": app.i18n.locale,
      },
    });

    return {
      slides: slides.data.data.sliders,
      partners: partners.data.data.partners,
      blogs: blogs.data.data.blogs,
      activities: activities.data,
      steps: steps.data,
    };
  },
  components: {
    AppHomeIntro,
    AppHomeGrowth,
    AppHomeInvestors,
    AppHomeSocial,
    AppHomeBrands,
    AppHomeBars,
    AppHomeOrganisations,
    AppHomeBost,
    AppHomeTeam,
    AppHomeBlog,
    AppHomeBottom,
    AppHomeActivities,
    AppHomeSteps,
    // AppHomeBanner,
    // AppHomeFeatures,
    // AppHomeCount,
    // AppHomeWork,
    // AppHomeValues,
    // AppHomeTestominials,
    // AppHomeNews,
    // AppHomePartners,
    // AppHomeBottomBanner
  },
};
</script>
<style>
.home {
  --vsc-bg-header: var(--main-color);
  --vsc-bg-footer: var(--main-color);
  --vsc-text-color-header: #fff;
  --vsc-text-color-footer: #fff;
  --vsc-bg-button: var(--main-color);
  --vsc-text-color-button: #fff;
  --vsc-outline-color: var(--main-color);
  --vsc-border-color-bottom-header: #fff;
  --vsc-border-color-top-footer: #fff;
}
</style>
