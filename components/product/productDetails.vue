<template>
  <div class="productDetails">
    <h1>{{ productDetails.title }}</h1>
    <p class="desc">
      {{ productDetails.description }}
    </p>
    <div class="price">
      <p class="pre">${{ productDetails.previous_price }}</p>
      <p>${{ productDetails.current_price }}</p>
    </div>
    <!-- <p class="cost">${{ eventDetails.ticket_cost }} / per ticket</p>
    <p class="content">Organizer: {{ eventDetails.organizer }}</p>
    <p class="content">venue: {{ eventDetails.venue }}</p>
    <p class="content">{{ eventDetails.content }}</p> -->
    <button @click="addToCart">ADD TO CART</button>
  </div>
</template>

<script>
export default {
  props: ["productDetails"],
  methods: {
    addToCart() {
      const item = {
        id: this.productDetails.id,
        images: this.productDetails.images,
        title: this.productDetails.title,
        current_price: this.productDetails.current_price,
        quantity: 1,
      };
      let cartItems = localStorage.getItem("laravadaCart")
        ? JSON.parse(localStorage.getItem("laravadaCart"))
        : [];

      let aleradyExists = cartItems.find((one) => one.id === item.id);
      if (aleradyExists) {
        aleradyExists.quantity = aleradyExists.quantity + 1;
      } else {
        cartItems.unshift(item);
      }
      this.$store.state.cartItems = cartItems;
      localStorage.setItem("laravadaCart", JSON.stringify(cartItems));
      this.$toast.success("Product added to cart successfully");
    },
  },
};
</script>

<style scoped lang="scss">
.productDetails {
  h1 {
    font-size: 2.5rem;
  }
  .desc {
    opacity: 0.8;
    font-size: 1.1rem;
  }
  .price {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
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
  .cost,
  .content {
    font-size: 1.3rem;
  }
  .cost {
    color: var(--main-color);
  }
  button {
    padding: 10px 40px;
    background-color: var(--main-color);
    color: #fff;
    font-size: 1rem;
    border: 1px solid var(--main-color);
    &:hover {
      color: var(--main-color);
      border-color: var(--main-color);
      background-color: transparent;
    }
  }
}
</style>
