<template>
  <div class="home">
    <app-home-intro></app-home-intro>
    <app-home-growth></app-home-growth>
    <app-home-investors></app-home-investors>
    <app-home-social></app-home-social>
    <app-home-brands></app-home-brands>
    <app-home-bars></app-home-bars>
    <app-home-organisations></app-home-organisations>
    <app-home-bost></app-home-bost>
    <app-home-team></app-home-team>
    <app-home-blog></app-home-blog>
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
  </div>
</template>

<script>
import AppHomeBottom from '../components/home/AppHomeBottom.vue'
import AppHomeBars from '../components/home/AppHomeBars.vue'
import AppHomeBlog from '../components/home/AppHomeBlog.vue'
import AppHomeBost from '../components/home/AppHomeBost.vue'
import AppHomeBrands from '../components/home/AppHomeBrands.vue'
import AppHomeGrowth from '../components/home/AppHomeGrowth.vue'
// import AppHomeBanner from '../components/home/AppHomeBanner.vue'
// import AppHomeBottomBanner from '../components/home/AppHomeBottomBanner.vue'
// import AppHomeCount from '../components/home/AppHomeCount.vue'
// import AppHomeFeatures from '../components/home/AppHomeFeatures.vue'
import AppHomeIntro from '../components/home/AppHomeIntro.vue'
import AppHomeInvestors from '../components/home/AppHomeInvestors.vue'
import AppHomeOrganisations from '../components/home/AppHomeOrganisations.vue'
import AppHomeSocial from '../components/home/AppHomeSocial.vue'
import AppHomeTeam from '../components/home/AppHomeTeam.vue'
// import AppHomeNews from '../components/home/AppHomeNews.vue'
// import AppHomePartners from '../components/home/AppHomePartners.vue'
// import AppHomeTestominials from '../components/home/AppHomeTestominials.vue'
// import AppHomeValues from '../components/home/AppHomeValues.vue'
// import AppHomeWork from '../components/home/AppHomeWork.vue'

export default {
  name: 'Home',
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
    AppHomeBottom
    // AppHomeBanner,
    // AppHomeFeatures,
    // AppHomeCount,
    // AppHomeWork,
    // AppHomeValues,
    // AppHomeTestominials,
    // AppHomeNews,
    // AppHomePartners,
    // AppHomeBottomBanner
  }
}
</script>
<style>
  
</style>