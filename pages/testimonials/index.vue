<template>
    <div class="home">
        <app-testimonials-heading></app-testimonials-heading>
        <app-testimonials-items></app-testimonials-items>
        <app-testimonials-parteners></app-testimonials-parteners>
        <app-testimonials-team></app-testimonials-team>
    </div>
</template>

<script>
import AppTestimonialsHeading from '../../components/testimonials/AppTestimonialsHeading.vue'
import AppTestimonialsItems from '../../components/testimonials/AppTestimonialsItems.vue'
import AppTestimonialsParteners from '../../components/testimonials/AppTestimonialsParteners.vue'
import AppTestimonialsTeam from '../../components/testimonials/AppTestimonialsTeam.vue'
export default {
    components: { AppTestimonialsHeading, AppTestimonialsItems, AppTestimonialsParteners, AppTestimonialsTeam },
    name: 'Testimonials',
    async asyncData({ $axios }) {
      const team = {}
      const partners = {}

      const TEAM = await $axios.get('/teams');

      if (TEAM.success) team = TEAM.data.data

      const PARTNERS = await $axios.get('/partners');

      if (PARTNERS.success) partners = PARTNERS.data.data

      return {
          team,
          partners
      }
    },
}
</script>

<style>

</style>