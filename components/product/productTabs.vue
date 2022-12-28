<template>
  <div class="productTabs">
    <div class="tabs">
      <span
        @click="currentTab = 'description'"
        :class="currentTab === 'description' ? 'active' : ''"
        >Description</span
      >
      <span
        @click="currentTab = 'reviews'"
        :class="currentTab === 'reviews' ? 'active' : ''"
        >Reviews</span
      >
    </div>
    <div v-if="currentTab === 'description'" class="description">
      <p class="text">{{ productDetails.description }}</p>
    </div>

    <div v-if="currentTab === 'reviews'" class="reviews">
      <product-reviews :reviews="productDetails.reviews" />
    </div>
  </div>
</template>

<script>
import productReviews from "./productReviews.vue";
export default {
  props: ["productDetails"],
  components: {
    productReviews,
  },
  data() {
    return {
      currentTab: "description",
    };
  },
};
</script>

<style scoped lang="scss">
.productTabs {
  margin-top: 100px;
  .tabs {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    position: relative;
    margin-bottom: 50px;
    @include xs {
      margin-bottom: 20px;
    }
    span {
      border: 1px solid #ccc;
      border-radius: 30px;
      padding: 10px 30px;
      font-size: 1.1rem;
      cursor: pointer;
      /* opacity: 0.8; */
      position: relative;
      z-index: 2;
      background-color: #fff;
      &.active {
        background-color: var(--main-color);
        border-color: var(--main-color);
        color: #fff;
      }
      @include xs {
        padding: 8px 20px;
        font-size: 1.1rem;
      }
    }
    &:after {
      content: "";
      position: absolute;
      left: 0;
      width: 100%;
      border-bottom: 2px solid rgb(221, 221, 221);
      z-index: 1;
    }
  }
  .description,
  .reviews {
    border: 1px solid rgb(230, 230, 230);
    border-radius: 10px;
    padding: 20px;
    p.text {
      font-size: 1.2rem;
      margin: 0;
    }
    h3 {
      text-align: center;
      margin: 10px 0 30px;
    }
  }
  .instructor {
    h3,
    h4 {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    i {
      width: 45px;
      height: 45px;
      border-radius: 50%;
      background-color: var(--main-color);
      color: #fff;
      display: grid;
      place-items: center;
      font-size: 1.3rem;
    }
    p {
      margin-top: 20px;
      font-size: 1.2rem;
      opacity: 0.8;
    }
  }
  .video {
    .videoWrapper {
      width: 600px;
      height: 400px;
      margin: auto;
      iframe {
        width: 100%;
        height: 100%;
        border-radius: 10px;
      }
      @include xs {
        width: 100%;
        height: 300px;
      }
    }
  }
}
</style>
