<template>
  <div class="productGallery">
    <VueSlickCarousel
      :slidesToShow="1"
      :slidesToScroll="1"
      :arrows="true"
      :dots="false"
      v-if="productDetails.images"
    >
      <div v-for="image in productDetails.images" :key="image">
        <div class="item">
          <img :src="image" alt="eventImage" />
        </div>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  props: ["productDetails"],
  components: { VueSlickCarousel },
};
</script>

<style scoped lang="scss">
.productGallery {
  width: 95%;
  .item {
    padding-left: 20px;
    width: 100%;
    height: 500px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    @include md {
      margin-bottom: 30px;
    }
    @include xs {
      height: 300px;
    }
  }
  @include xs {
    width: 90%;
    margin: 0 10px 0;
  }
}
</style>
