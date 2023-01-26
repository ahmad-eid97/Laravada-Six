<template>
  <div class="subscribe">
    <div class="container wrapper">
      <h3>Subscribe to get in touch</h3>
      <div class="action">
        <input type="text" placeholder="Type Email" v-model="email" />
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

      if (response.data.success) {
        this.$store.state.showLoader = false;
        this.email = "";
        return this.$toast.success("Email subscribed successfully");
      } else {
        this.$store.state.showLoader = false;
        return this.$toast.error("Something went wrong!");
      }
    },
  },
};
</script>

<style scoped lang="scss">
.subscribe {
  background: var(--main-color);
  padding: 20px 10px;
  margin-top: 0px;
  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: unset !important;
    padding: 0;
    h3 {
      margin-bottom: 0;
      color: #fff;
      @include md {
        margin-bottom: 10px;
      }
    }
    .action {
      display: flex;
      align-items: center;
      input {
        border-radius: 0;
        width: 400px;
        height: 45px;
        border: none;
        padding: 0 15px;
        outline: none;
        @include xs {
          width: 200px;
        }
      }
      button {
        height: 45px;
        border: none;
        background: #000;
        color: #fff;
        padding: 5px 20px;
      }
    }
    @include md {
      flex-direction: column;
    }
  }
}
</style>
