<template>
  <div class="careerCategory">
    <career-category-heading />
    <div class="container">
      <div class="details">
        <h3>{{ categoryDetails.name }}</h3>
        <h4>
          Jobs Count: <span>{{ categoryDetails.jobs_count }}</span>
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
import careerCategoryHeading from "../../components/careerCategory/careerCategoryHeading.vue";
export default {
  components: { careerCategoryHeading },
  data() {
    return {};
  },
  async asyncData({ $axios, params, app }) {
    const categoryDetails = await $axios.get(`/jobCategories/${params.id}`, {
      headers: {
        "Accept-Language": app.i18n.locale,
      },
    });

    return {
      categoryDetails: categoryDetails.data.data,
    };
  },
};
</script>

<style scoped lang="scss">
.careerCategory {
  .details {
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    border-radius: 10px;
    margin-top: 100px;
    margin-bottom: 100px;
    h4 {
      span {
        color: var(--main-color);
        font-weight: bold;
      }
    }
  }
}
</style>
