<template>
  <div class="home">
      <app-team-heading></app-team-heading>
      <app-team-members></app-team-members>
  </div>
</template>

<script>
import AppTeamHeading from '../../components/team/AppTeamHeading.vue'
import AppTeamMembers from '../../components/team/AppTeamMembers.vue'
export default {
    components: { AppTeamHeading, AppTeamMembers },
    name: 'Team',
    async asyncData({ $axios }) {
      const team = {}
      const TEAM = await $axios.get('/teams');

      if (TEAM.success) team = TEAM.data.data

      return {
          team
      }
    },
}
</script>

<style>

</style>