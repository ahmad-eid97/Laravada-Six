<template>
  <div class="checkout">
    <checkout-heading />
    <div class="container">
      <div class="row wrapper">
        <div class="col-lg-7">
          <div class="items">
            <h2><i class="fa-duotone fa-cart-plus"></i> Items</h2>
            <h3 class="empty" v-if="$store.state.cartItems.length <= 0">
              No Items In Your Cart To Checkout!
            </h3>
            <div
              class="cartItem"
              v-for="item in $store.state.cartItems"
              :key="item.id"
            >
              <img
                v-if="item.images"
                :src="item.images[0]"
                alt="productImage"
              />
              <div class="details">
                <div>
                  <h3>{{ item.title }}</h3>
                  <p v-if="!item.type">Qunatity: {{ item.quantity }}</p>
                  <p>Price: {{ item.current_price }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="delivery">
            <h2>Delivery</h2>
            <b-form-group v-slot="{ ariaDescribedby }">
              <b-form-radio
                v-model="deliveryMethod"
                :aria-describedby="ariaDescribedby"
                name="some-radios"
                value="A"
                >Delivery</b-form-radio
              >
              <b-form-radio
                v-model="deliveryMethod"
                :aria-describedby="ariaDescribedby"
                name="some-radios"
                value="B"
                >Pickup</b-form-radio
              >
            </b-form-group>
          </div>

          <div class="info">
            <h2>Delivery Info</h2>
            <input
              type="text"
              placeholder="Your delivery address"
              v-model="deliveryAddress"
            />
            <select v-model="deliveryArea">
              <option value="">select delivery area</option>
              <option value="nearby">nearby</option>
              <option value="faraway">faraway</option>
            </select>
          </div>

          <div class="customer">
            <h2>Customer</h2>
            <input type="text" placeholder="Your Name" v-model="name" />
            <input
              type="number"
              placeholder="Your Phone Number"
              v-model="phone"
            />
          </div>

          <div class="comment">
            <h2>comment</h2>
            <textarea
              type="text"
              placeholder="Your delivery address"
              v-model="comment"
            ></textarea>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="sendBox">
            <h2>Checkout</h2>
            <p class="total">
              Total: ${{
                $store.state.cartItems.reduce(
                  (total, item) => total + item.current_price * item.quantity,
                  0
                )
              }}
            </p>
            <div class="field">
              <input type="checkbox" id="terms" />
              <label for="terms"
                >I agree to the Terms of Service and Privacy Policy.</label
              >
            </div>
            <button
              @click="sendWhatsappOrder"
              :disabled="$store.state.cartItems.length <= 0"
            >
              <i class="fa-brands fa-whatsapp"></i> SEND WHATSAPP ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import checkoutHeading from "../../components/checkout/checkoutHeading.vue";
export default {
  components: { checkoutHeading },
  data() {
    return {
      deliveryMethod: "",
      deliveryAddress: "",
      deliveryArea: "",
      name: "",
      phone: "",
      comment: "",
    };
  },
  methods: {
    sendWhatsappOrder() {
      const orderedItems = JSON.parse(localStorage.getItem("laravadaCart"));

      const {
        deliveryMethod,
        deliveryAddress,
        deliveryArea,
        name,
        phone,
        comment,
      } = this;

      if (
        !deliveryMethod ||
        !deliveryAddress ||
        !deliveryArea ||
        !name ||
        !phone ||
        !comment
      )
        return this.$toast.error("Please fill all fields!");

      const whatsappMessage = encodeURI(`
          Hi, I'd like to place an order 👇

  🛵🔜🏡
  Delivery Order No: 602

  ---------
${orderedItems.map(
  (item) =>
    `
  🔘${item.quantity} X ${item.title} - $${item.current_price}

  `
)}
  ---------
  🗒 Sub total: $${orderedItems.reduce(
    (total, item) => total + item.current_price * item.quantity,
    0
  )}
  🛵 Delivery: $10.00
  🧾 Total: $${orderedItems.reduce(
    (total, item) => total + item.current_price * item.quantity,
    10
  )}
  ---------

  🗒 Comment
  ${this.comment}

  📍 Delivery Details

  Customer name: ${this.name}
  Customer phone: ${this.phone}
  Address: ${this.deliveryAddress}
  
  Delivery Area: ${this.deliveryArea}
              
  Laravada will confirm your order upon receiving the message.
    
  💳 Payment Options
  We accept Cash On Deliver and direct payments. DEMO PAYMENT
      `);

      localStorage.removeItem("laravadaCart");

      this.$store.state.cartItems = [];

      location.href = `https://api.whatsapp.com/send?phone=+38971605048&text=${whatsappMessage}`;
    },
  },
};
</script>

<style scoped lang="scss">
.checkout {
  .wrapper {
    margin-top: 100px;
    .items,
    .sendBox,
    .delivery,
    .info,
    .customer,
    .comment {
      box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      padding: 5px 20px 20px;
      margin-bottom: 20px;
      h2 {
        margin-top: 20px;
        color: var(--main-color);
        font-size: 1.4rem;
      }
    }
    .items {
      .empty {
        text-align: center;
        font-size: 1.3rem;
        opacity: 0.8;
      }
      .cartItem {
        display: flex;
        gap: 15px;
        align-items: center;
        border-bottom: 1px solid rgb(233, 233, 233);
        padding: 20px 0;
        &:last-of-type {
          border-bottom: none;
        }
        img {
          width: 150px;
          min-width: 150px;
          height: 120px;
          object-fit: contain;
        }
        .details {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: space-between;
          h3 {
            font-size: 1.3rem;
          }
          h3,
          p {
            margin: 0;
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
            font-size: 1.3rem;
            color: rgb(119, 119, 119);
            &:hover {
              filter: brightness(0.9);
            }
          }
        }
      }
    }
    .delivery {
      font-size: 1.1rem;
      .custom-control.custom-radio {
        display: flex;
        align-items: center;
        gap: 10px;
      }
    }
    .info,
    .customer,
    .comment {
      input,
      select,
      textarea {
        padding: 10px 15px;
        width: 100%;
        margin-bottom: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
        outline: none;
      }
    }
    .sendBox {
      h2 {
        margin-bottom: 20px;
      }
      .total {
        padding: 10px 20px;
        text-align: center;
        background-color: rgb(233, 233, 233);
        border-radius: 10px;
        font-size: 1.2rem;
        font-weight: bold;
      }
      .field {
        label {
          font-size: 1.1rem;
        }
      }
      button {
        width: 100%;
        padding: 10px 20px;
        margin: 10px 0 10px;
        font-size: 1rem;
        font-weight: bold;
        background-color: #26af74;
        color: #fff;
        border: none;
        display: flex;
        align-items: center;
        gap: 10px;
        justify-content: center;
        border-radius: 10px;
        i {
          font-size: 1.5rem;
        }
        &:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        &:hover {
          filter: brightness(0.9);
        }
      }
    }
  }
}
</style>
