<template>
  <div class="productCategory">
    <product-category-heading />
    <div class="container">
      <div class="details">
        <h3>{{ categoryDetails.name }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import productCategoryHeading from "../../components/productCategory/productCategoryHeading.vue";
export default {
  components: { productCategoryHeading },
  data() {
    return {};
  },
  async asyncData({ $axios, params, app }) {
    const categoryDetails = await $axios.get(
      `/productCategories/${params.id}`,
      {
        headers: {
          "Accept-Language": app.i18n.locale,
        },
      }
    );

    return {
      categoryDetails: categoryDetails.data.data,
    };
  },
};
</script>

<style scoped lang="scss">
.productCategory {
  .details {
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    border-radius: 10px;
    margin-top: 100px;
    margin-bottom: 100px;
  }
}
</style>
