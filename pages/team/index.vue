<template>
  <div class="home">
      <app-team-heading></app-team-heading>
      <app-team-members :team="team"></app-team-members>
  </div>
</template>

<script>
import AppTeamHeading from '../../components/team/AppTeamHeading.vue'
import AppTeamMembers from '../../components/team/AppTeamMembers.vue'
export default {
    components: { AppTeamHeading, AppTeamMembers },
    name: 'Team',
    async asyncData({ $axios }) {
      return await $axios.get('/teams').then(res => {
        return {
          team: res.data.data
        }
      });
    },
}
</script>

<style>

</style>