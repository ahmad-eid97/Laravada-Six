<template>
  <div class="insideCart">
    <div class="wrapper">
      <h2 v-if="!$store.state.cartItems.length">No items in cart yet!</h2>
      <div
        class="cartItem"
        v-for="item in $store.state.cartItems"
        :key="item.id"
      >
        <img v-if="item.images" :src="item.images[0]" alt="productImage" />
        <div class="details">
          <div>
            <h3>
              {{ item.title.substring(0, 20) }}
              {{ item.title.length > 20 && "..." }}
            </h3>
            <p>Qunatity: {{ item.quantity }}</p>
            <p>Price: {{ item.current_price }}</p>
            <div>
              <button @click="decrease(item)">-</button>
              <button @click="increase(item)">+</button>
            </div>
          </div>
          <i class="fa-solid fa-trash-can" @click="removeFromCart(item)"></i>
        </div>
      </div>
    </div>

    <div class="actions">
      <p class="total">
        Total: ${{
          $store.state.cartItems.reduce(
            (total, item) => total + item.current_price * item.quantity,
            0
          )
        }}
      </p>
      <button @click="clearCart">Clear Cart</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["openCart"],
  data() {
    return {};
  },
  methods: {
    removeFromCart(cartItem) {
      let cartItems = this.$store.state.cartItems;
      const updatedCart = cartItems.filter((item) => item.id !== cartItem.id);
      this.$store.state.cartItems = updatedCart;
      localStorage.setItem("laravadaCart", JSON.stringify(updatedCart));
      this.$toast.success("Product removed from cart successfully");
    },
    clearCart() {
      this.$store.state.cartItems = [];
      localStorage.removeItem("laravadaCart");
    },
    decrease(cartItem) {
      let cartItems = this.$store.state.cartItems;
      const itemFound = cartItems.find((item) => item.id === cartItem.id);
      if (itemFound.quantity === 1) {
        return this.removeFromCart(cartItem);
      }
      itemFound.quantity -= 1;
      localStorage.setItem("laravadaCart", JSON.stringify(cartItems));
    },
    increase(cartItem) {
      let cartItems = this.$store.state.cartItems;
      const itemFound = cartItems.find((item) => item.id === cartItem.id);
      itemFound.quantity += 1;
      localStorage.setItem("laravadaCart", JSON.stringify(cartItems));
    },
  },
};
</script>

<style scoped lang="scss">
.insideCart {
  position: relative;
  height: 100%;
  .wrapper {
    height: 100%;
    padding: 20px 10px 130px;
    overflow-y: auto;
  }
  h2 {
    text-align: center;
    font-size: 1.4rem;
  }
  .cartItem {
    display: flex;
    gap: 10px;
    border-bottom: 1px solid rgb(233, 233, 233);
    padding: 20px 0;
    img {
      width: 140px;
      min-width: 140px;
      height: 100px;
    }
    .details {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      h3,
      p {
        margin: 0;
      }
      h3 {
        font-size: 1.2rem;
      }
      p {
        opacity: 0.8;
      }
      button {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: rgb(236, 236, 236);
        border: 1px solid #ccc;
        color: rgb(119, 119, 119);
        &:hover {
          filter: brightness(0.9);
        }
      }
      i {
        width: 30px;
        height: 30px;
        border-radius: 5px;
        border: 1px solid var(--main-color);
        color: var(--main-color);
        display: grid;
        place-items: center;
        cursor: pointer;
        &:hover {
          background-color: var(--main-color);
          color: #fff;
        }
      }
    }
  }
  .actions {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    margin-bottom: 1px;
    padding: 0 5px;
    .total {
      text-align: center;
      background-color: rgb(235, 235, 235);
      padding: 10px 20px;
      font-size: 1.2rem;
      font-weight: bold;
      margin-bottom: 5px;
    }
    button {
      background: var(--main-color);
      border: 1px solid var(--main-color);
      color: #fff;
      font-size: 1rem;
      padding: 10px 20px;
      width: 100%;
      &:hover {
        color: var(--main-color);
        background-color: transparent;
      }
    }
  }
}
</style>
