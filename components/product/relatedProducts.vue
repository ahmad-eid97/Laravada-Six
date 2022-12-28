<template>
  <div class="relatedProducts">
    <h1>Related Products</h1>

    <div class="row justify-content-center">
      <div
        v-for="product in relatedProducts"
        :key="product"
        class="col-md-6 col-lg-4 col-xl-3 mb-4"
      >
        <div class="job">
          <span
            v-if="product.category"
            class="category"
            :style="{ backgroundColor: random_rgba() }"
            >{{ product.category.name }}</span
          >
          <img
            v-if="product.images"
            :src="product.images[0]"
            alt="jobImage"
            @click="$router.push(localePath(`/career/${product.id}`))"
          />
          <h3 @click="$router.push(localePath(`/product/${product.id}`))">
            {{ product.title.substring(0, 50) }}
            {{ product.title.length > 50 ? "..." : "" }}
          </h3>
          <div class="price">
            <p class="pre">${{ product.previous_price }}</p>
            <p>${{ product.current_price }}</p>
          </div>
        </div>
      </div>

      <div class="col-lg-12 col-md-12 text-center">
        <div class="pagination-area">
          <a href="#" class="page-numbers">
            <i class="fa-solid fa-arrow-left"></i>
          </a>
          <span class="page-numbers current" aria-current="page">1</span>
          <a href="#" class="page-numbers">2</a>
          <a href="#" class="page-numbers">3</a>
          <a href="#" class="page-numbers">
            <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["relatedProducts"],
  data() {
    return {};
  },
  methods: {
    random_rgba() {
      var o = Math.round,
        r = Math.random,
        s = 255;
      return (
        "rgba(" +
        o(r() * s) +
        "," +
        o(r() * s) +
        "," +
        o(r() * s) +
        "," +
        "0.2" +
        ")"
      );
    },
  },
};
</script>

<style scoped lang="scss">
.relatedProducts {
  margin-top: 100px;
  h6,
  h1 {
    text-align: center;
  }
  h1 {
    margin-bottom: 50px;
  }
  .job {
    border: 1px solid #e5e6e7;
    padding: 40px 20px 20px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    margin-bottom: 20px;
    height: 100%;
    .category {
      position: absolute;
      top: 10px;
      right: 10px;
      padding: 0px 10px;
      border-radius: 5px;
    }
    img {
      width: 100%;
      height: 150px;
      object-fit: contain;
      margin-bottom: 10px;
      cursor: pointer;
    }
    h3 {
      cursor: pointer;
      text-align: center;
    }
    .price {
      display: flex;
      align-items: center;
      gap: 10px;
      p {
        font-size: 1.3rem;
        opacity: 0.7;
        margin: 0;
        &:not(.pre) {
          color: var(--main-color);
          font-weight: bold;
        }
        &.pre {
          text-decoration: line-through;
        }
      }
    }
  }
  .btn {
    display: grid;
    place-content: center;
    border: none;
    button {
      background-color: var(--main-color);
      color: #fff;
      padding: 10px 30px;
      border: 1px solid var(--main-color);
      border-radius: 20px;
      outline: none;
      &:hover {
        background-color: transparent;
        color: var(--main-color);
      }
    }
  }
}
</style>
