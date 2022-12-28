<template>
  <div class="courses">
    <courses-header />
    <div class="container">
      <courses-list :coursesList="coursesList" />
    </div>
  </div>
</template>

<script>
import coursesHeader from "../../components/courses/coursesHeader.vue";
import coursesList from "../../components/courses/coursesList.vue";
export default {
  components: {
    coursesHeader,
    coursesList,
  },
  async asyncData({ $axios, app }) {
    const COURSES_LIST = await $axios.get("/courses", {
      headers: {
        "Accept-Language": app.i18n.locale,
      },
    });

    return {
      coursesList: COURSES_LIST.data.data.courses,
    };
  },
};
</script>
