<template>
  <div
    class="wrapper"
    :class="
      !$store.state.showPopup ||
      !$store.state.websiteSettings.find((one) => one.key === 'popup_status') ||
      !$store.state.websiteSettings.find((one) => one.key === 'popup_status')
        .plain_value
        ? 'hide'
        : ''
    "
  >
    <div class="popup" :class="$i18n.locale === 'ar' ? 'arabic' : ''">
      <i class="fa-regular fa-xmark close" @click="closePopup"></i>
      <a
        :href="
          $store.state.websiteSettings.find((one) => one.key === 'popup_link')
            .plain_value
        "
        target="_blank"
      >
        <img
          :src="
            $store.state.websiteSettings.find(
              (one) => one.key === 'popup_image'
            ).plain_value
          "
          alt="image"
        />
      </a>
      <a
        :href="
          $store.state.websiteSettings.find((one) => one.key === 'popup_link')
            .plain_value
        "
        target="_blank"
      >
        <h4>
          {{
            $store.state.websiteSettings.find(
              (one) => one.key === "popup_title"
            ).plain_value
          }}
        </h4>
      </a>
      <a
        :href="
          $store.state.websiteSettings.find((one) => one.key === 'popup_link')
            .plain_value
        "
        target="_blank"
      >
        <p>
          {{
            $store.state.websiteSettings.find(
              (one) => one.key === "popup_description"
            ).plain_value
          }}
        </p>
      </a>
      <div class="subscriber">
        <input type="text" placeholder="Type your email" v-model="email" />
        <button @click="subscribe">Subscribe</button>
      </div>
    </div>
  </div>
</template>

<script>
import * as EmailValidator from "email-validator";
export default {
  data() {
    return {
      email: "",
    };
  },
  methods: {
    async subscribe() {
      if (!this.email) {
        return this.$toast.error("Email can't be empty!");
      }
      if (!EmailValidator.validate(this.email)) {
        return this.$toast.error("Email is invalid!");
      }

      this.$store.state.showLoader = true;
      const response = await this.$axios
        .post("/newsletter", {
          email: this.email,
        })
        .catch((err) => {
          this.$store.state.showLoader = false;
        });

      // if (response.data.success) {
      this.$store.state.showLoader = false;
      this.email = "";
      this.closePopup();
      return this.$toast.success("Email subscribed successfully");
      // } else {
      //   this.$store.state.showLoader = false;
      //   return this.$toast.error("Something went wrong!");
      // }
    },
    closePopup() {
      this.$store.commit("closePopup", false);
    },
  },
};
</script>

<style scoped lang="scss">
@keyframes show {
  0% {
    opacity: 0;
    transform: translateY(200px);
    z-index: -1;
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
    z-index: 999;
  }
}
.wrapper {
  position: fixed;
  z-index: 999;
  top: 0%;
  right: 0%;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.1);
  &.hide {
    display: none;
  }
}
.popup {
  z-index: -1;
  width: 450px;
  height: auto;
  background: #fff;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-top: 3px solid var(--main-color);
  opacity: 0;
  animation: show 4s forwards;
  i.close {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background: #ccc;
    color: #000;
    display: grid;
    place-content: center;
    cursor: pointer;
    font-weight: bold;
    &:hover {
      background: var(--main-color);
      color: #fff;
    }
  }
  img {
    width: 200px;
    max-height: 170px;
    margin-bottom: 15px;
    border-radius: 10px;
    object-fit: contain;
  }
  h4 {
    color: rgb(46, 46, 46);
  }
  h4,
  p {
    text-align: center;
  }
  p {
    font-size: 0.9rem;
    color: #000;
    opacity: 0.7;
  }
  .subscriber {
    display: flex;
    align-items: center;
    width: 100%;
    input {
      border-radius: 30px 0px 0px 30px;
      height: 40px;
      border: 1px solid rgb(224, 224, 224);
      outline: none;
      padding: 2px 20px;
      flex: 1;
    }
    button {
      background: var(--main-color);
      color: #fff;
      padding: 5px 20px;
      border-radius: 0px 30px 30px 0;
      border: none;
      height: 40px;
      font-weight: 600;
      font-size: 0.9rem;
      text-transform: uppercase;
    }
  }
  &.arabic {
    input {
      border-radius: 0px 30px 30px 0;
    }
    button {
      border-radius: 30px 0px 0px 30px;
    }
  }
  @include xs {
    width: 330px;
    input {
      padding: 2px 10px !important;
    }
  }
}
</style>
