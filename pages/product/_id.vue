<template>
  <div class="productDetails">
    <product-header />
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <product-gallery :productDetails="productDetails" />
        </div>
        <div class="col-lg-6">
          <product-details :productDetails="productDetails" />
        </div>
      </div>
      <product-tabs :productDetails="productDetails" />
      <related-products :relatedProducts="relatedProducts" />
    </div>
  </div>
</template>

<script>
import productHeader from "../../components/product/productHeader.vue";
import productGallery from "../../components/product/productGallery.vue";
import productDetails from "../../components/product/productDetails.vue";
import productTabs from "../../components/product/productTabs.vue";
import relatedProducts from "../../components/product/relatedProducts.vue";

export default {
  components: {
    productHeader,
    productGallery,
    productDetails,
    relatedProducts,
    productTabs,
  },
  async asyncData({ $axios, app, params }) {
    const PRODUCTS_DETAILS = await $axios.get(`/products/${params.id}`, {
      headers: {
        "Accept-Language": app.i18n.locale,
      },
    });

    const RELATED_PRODUCTS = await $axios.get("/products", {
      headers: {
        "Accept-Language": app.i18n.locale,
      },
    });

    return {
      productDetails: PRODUCTS_DETAILS.data.data,
      relatedProducts: RELATED_PRODUCTS.data.data.products.slice(0, 4),
    };
  },
};
</script>

<style scoped lang="scss">
.productDetails {
  .container {
    margin-top: 100px;
  }
}
</style>
