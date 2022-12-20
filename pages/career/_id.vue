<template>
  <div class="careerDetails">
    <career-details-header />
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <CareerDetails :jobDetails="jobDetails" />
        </div>
        <div class="col-lg-4">
          <ApplyToJob />
        </div>
      </div>
      <RelatedJobs :jobsList="jobsList" />
    </div>
  </div>
</template>

<script>
import CareerDetailsHeader from "../../components/careerDetails/careerDetailsHeader/CareerDetailsHeader.vue";
import CareerDetails from "../../components/careerDetails/careerDetails/CareerDetails.vue";
import ApplyToJob from "../../components/careerDetails/applyToJob/JobApply.vue";
import RelatedJobs from "../../components/careerDetails/relatedJobs/RelatedJobs.vue";

export default {
  // middleware: "authMiddleware",
  components: {
    CareerDetailsHeader,
    CareerDetails,
    ApplyToJob,
    RelatedJobs,
  },
  data() {
    return {};
  },
  async asyncData({ $axios, params, app }) {
    const jobDetails = await $axios.get(`/jobs/${params.id}`);

    const jobsList = await $axios.get(`/jobs`, {
      headers: {
        "Accept-Language": app.i18n.locale,
      },
    });

    return {
      jobDetails: jobDetails.data.data,
      jobsList: jobsList.data.data.jobs.slice(0, 4),
    };
  },
};
</script>

<style scoped lang="scss">
.careerDetails {
  background-color: rgb(248, 248, 248);
  position: relative;
}
</style>
