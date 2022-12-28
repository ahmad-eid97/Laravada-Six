<template>
  <div class="careerPage">
    <careers-header />
    <div class="container">
      <JobsList :jobsList="jobsList" />
      <CareerCategories :careerCategories="careerCategories" />
    </div>
  </div>
</template>

<script>
import CareersHeader from "../../components/careers/CareersHeader.vue";
import JobsList from "../../components/careers/JobsList.vue";
import CareerCategories from "../../components/careers/CareerCategories.vue";
export default {
  components: {
    CareersHeader,
    JobsList,
    CareerCategories,
  },
  data() {
    return {};
  },
  async asyncData({ $axios, app }) {
    const careerCategories = await $axios.get(`/jobCategories`, {
      headers: {
        "Accept-Language": app.i18n.locale,
      },
    });

    const jobsList = await $axios.get(`/jobs`, {
      headers: {
        "Accept-Language": app.i18n.locale,
      },
    });

    return {
      careerCategories: careerCategories.data.data.categories,
      jobsList: jobsList.data.data.jobs,
    };
  },
};
</script>

<style scoped lang="scss">
.careerPage {
}
</style>
