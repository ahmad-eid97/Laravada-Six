<template>
  <div class="shop">
    <shop-header />
    <div class="container">
      <featured-products :productsList="productsList" />
      <products-categories :productsCategories="productsCategories" />
    </div>
  </div>
</template>

<script>
import shopHeader from "../../components/shop/shopHeader.vue";
import FeaturedProducts from "../../components/shop/featuredProducts.vue";
import productsCategories from "../../components/shop/productsCategories.vue";

export default {
  components: {
    shopHeader,
    FeaturedProducts,
    productsCategories,
  },
  async asyncData({ $axios, app, params }) {
    const PRODUCTS_LIST = await $axios.get(`/products`, {
      headers: {
        "Accept-Language": app.i18n.locale,
      },
    });

    const PRODUCTS_CATEGORIES = await $axios.get("/productCategories", {
      headers: {
        "Accept-Language": app.i18n.locale,
      },
    });

    return {
      productsList: PRODUCTS_LIST.data.data,
      productsCategories: PRODUCTS_CATEGORIES.data.data.categories,
    };
  },
};
</script>
