<template>
  <div class="courseIntro">
    <div class="row align-items-center">
      <div class="col-lg-6">
        <div class="gallery">
          <VueSlickCarousel
            :slidesToShow="1"
            :slidesToScroll="1"
            :arrows="true"
            :dots="false"
            v-if="courseDetails.images"
          >
            <div v-for="image in courseDetails.images" :key="image">
              <div class="item">
                <img :src="image" alt="courseImage" />
              </div>
            </div>
          </VueSlickCarousel>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="details">
          <div class="rate">
            <b-form-rating
              color="#f39c12"
              :inline="true"
              :no-border="true"
              :value="courseDetails.avg_reviews"
              readonly
            ></b-form-rating>
            <span>( {{ courseDetails.num_reviews }} Customer Reviews )</span>
          </div>

          <h2>{{ courseDetails.title }}</h2>

          <p>
            {{ courseDetails.summary }}
          </p>

          <div class="price">
            <p class="pre">${{ courseDetails.previous_price }}</p>
            <p>${{ courseDetails.current_price }}</p>
          </div>

          <button @click="addToCart">Enroll In Course</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  props: ["courseDetails"],
  components: { VueSlickCarousel },
  methods: {
    addToCart() {
      const item = {
        id: this.courseDetails.id,
        images: this.courseDetails.images,
        title: this.courseDetails.title,
        current_price: this.courseDetails.current_price,
        quantity: 1,
        type: "course",
      };
      let cartItems = localStorage.getItem("laravadaCart")
        ? JSON.parse(localStorage.getItem("laravadaCart"))
        : [];

      let aleradyExists = cartItems.find(
        (one) => one.id === item.id && one.title === item.title
      );
      if (aleradyExists) {
        // aleradyExists.quantity = aleradyExists.quantity + 1;
        this.$toast.error("You are already enrolld in this course");
        return;
      } else {
        cartItems.unshift(item);
      }
      this.$store.state.cartItems = cartItems;
      localStorage.setItem("laravadaCart", JSON.stringify(cartItems));
      this.$toast.success("You have been enrolled in this course successfully");
    },
  },
};
</script>

<style scoped lang="scss">
output {
  padding: 0;
}
.courseIntro {
  margin-top: 100px;
  .gallery {
    .item {
      width: 100%;
      height: 500px;
      img {
        width: 100%;
        height: 100%;
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
  .details {
    h2 {
      margin-top: 20px;
    }
    p {
      font-size: 1.2rem;
      opacity: 0.8;
    }
    .price {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 20px;
      p {
        font-size: 1.5rem;
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
    button {
      padding: 10px 40px;
      font-size: 1.1rem;
      border: 1px solid var(--main-color);
      color: #fff;
      background-color: var(--main-color);
      border-radius: 30px;
      &:hover {
        background-color: transparent;
        color: var(--main-color);
      }
    }
  }
}
</style>
