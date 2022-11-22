<template>
    <div class="home">
        <app-services-heading></app-services-heading>
        <app-services-items :services="servicesData"></app-services-items>
    </div>
</template>

<script>
import AppServicesHeading from '../../components/services/AppServicesHeading.vue'
import AppServicesItems from '../../components/services/AppServicesItems.vue'
export default {
  name: 'Services',
  components: { AppServicesHeading, AppServicesItems },
  async asyncData({ $axios }) {
    return await $axios.get('/services').then((res) => {
      return {
        servicesData: res.data.data
      }
    });
  },

}
</script>

<style>

</style>