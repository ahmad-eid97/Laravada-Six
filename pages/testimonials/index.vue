<template>
    <div class="home">
        <app-testimonials-heading></app-testimonials-heading>
        <app-testimonials-items></app-testimonials-items>
        <app-testimonials-parteners :partners="partners"></app-testimonials-parteners>
        <app-testimonials-team :team="team"></app-testimonials-team>
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

      const TEAM = await $axios.get('/teams');

      const PARTNERS = await $axios.get('/partners');

      return {
          team: TEAM.data.data,
          partners: PARTNERS.data.data
      }
    },
}
</script>

<style>

</style>