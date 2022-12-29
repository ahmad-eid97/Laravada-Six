<template>
  <div class="courseDetails">
    <course-details-header />
    <div class="container">
      <course-intro :courseDetails="courseDetails" />

      <course-details-tabs :courseDetails="courseDetails" />
    </div>
  </div>
</template>

<script>
import courseDetailsHeader from "../../components/courseDetails/courseDetailsHeader.vue";
import courseIntro from "../../components/courseDetails/courseIntro.vue";
import courseDetailsTabs from "../../components/courseDetails/courseDetailsTabs.vue";

export default {
  components: {
    courseDetailsHeader,
    courseIntro,
    courseDetailsTabs,
  },
  async asyncData({ $axios, app, params }) {
    const COURSE_DETAILS = await $axios.get(`/courses/${params.id}`, {
      headers: {
        "Accept-Language": app.i18n.locale,
      },
    });

    return {
      courseDetails: COURSE_DETAILS.data.data,
    };
  },
};
</script>

<style scoped lang="scss">
.courseDetails {
  margin-bottom: 100px;
}
</style>
