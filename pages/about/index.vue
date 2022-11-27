<template>
  <div class="home">
        <app-about-heading></app-about-heading>
        
        <app-about-intro :aboutSection="aboutSection"></app-about-intro>

        <app-about-experiance :experienceSection="experienceSection"></app-about-experiance>

        <app-about-choose :whySection="whySection"></app-about-choose>

        <app-about-security :servicesSection="servicesSection"></app-about-security>

        <app-about-parteners :partners="partners"></app-about-parteners>

        <app-about-countdown :counterSection="counterSection"></app-about-countdown>
  </div>
</template>

<script>
import AppAboutChoose from '../../components/about/AppAboutChoose.vue'
import AppAboutCountdown from '../../components/about/AppAboutCountdown.vue'
import AppAboutExperiance from '../../components/about/AppAboutExperiance.vue'
import AppAboutHeading from '../../components/about/AppAboutHeading.vue'
import AppAboutIntro from '../../components/about/AppAboutIntro.vue'
import AppAboutParteners from '../../components/about/AppAboutParteners.vue'
import AppAboutSecurity from '../../components/about/AppAboutSecurity.vue'
// @ is an alias to /src


export default {
  name: 'About',
  components: {
    AppAboutHeading,
    AppAboutIntro,
    AppAboutExperiance,
    AppAboutChoose,
    AppAboutSecurity,
    AppAboutParteners,
    AppAboutCountdown
  },
  async asyncData({ $axios, app }) {
    const ABOUT_SECTION = await $axios.get('/sections/about', {
      headers: {
        "Accept-Language": app.i18n.locale
      }
    });
    
    const EXPERIENCE_SECTION = await $axios.get('/sections/experience', {
      headers: {
        "Accept-Language": app.i18n.locale
      }
    });
    
    const WHY_SECTION = await $axios.get('/sections/why_choose_us', {
      headers: {
        "Accept-Language": app.i18n.locale
      }
    });
    
    const COUNTER_SECTION = await $axios.get('/sections/counter_success', {
      headers: {
        "Accept-Language": app.i18n.locale
      }
    });
    
    const SERVICES_SECTION = await $axios.get('/services');

    const PARTNERS = await $axios.get('/partners');

    return {
      aboutSection: ABOUT_SECTION.data.data,
      experienceSection: EXPERIENCE_SECTION.data.data,
      whySection: WHY_SECTION.data.data,
      counterSection: COUNTER_SECTION.data.data,
      servicesSection: SERVICES_SECTION.data.data.services,
      partners: PARTNERS.data.data
    }
  },
}
</script>
