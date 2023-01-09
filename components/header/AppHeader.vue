<template>
  <header>
    <div class="cart" :class="openCart ? 'opened' : ''">
      <div class="head">
        <i class="fa-regular fa-xmark" @click="openCart = false"></i>
        <button
          @click="goToCheckout"
          :disabled="$store.state.cartItems.length <= 0"
        >
          <i class="fa-regular fa-badge-check"></i> Checkout
        </button>
      </div>
      <cart />
    </div>
    <b-navbar :class="!topOfPage ? 'onScroll' : ''" toggleable="lg">
      <b-navbar-brand :href="localePath('/')" class="logo">
        <img src="/assets/images/logo.png" alt="logoImage" />
      </b-navbar-brand>

      <b-collapse
        id="navbar-toggle-collapse"
        class="ml-auto justify-content-end"
        is-nav
      >
        <b-navbar-nav class="align-items-center">
          <b-nav-item
            active-class="active"
            :to="localePath(`/${item.link}`)"
            exact
            v-for="item in $store.state.topMenu"
            :key="item.id"
          >
            <span v-if="!item.child.length">{{ item.label }}</span>

            <b-dropdown
              :text="item.label"
              block
              class="m-2 dropdownBtn"
              v-if="item.child.length"
            >
              <b-dropdown-item
                v-for="child in item.child"
                :key="child.id"
                :to="localePath('/' + child.link)"
                >{{ child.label }}</b-dropdown-item
              >
            </b-dropdown>
          </b-nav-item>
          <b-nav-item v-if="$store.state.user" @click="logout" class="outLarge">
            Logout
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
      <a to="contact" class="btn"> Free Qoute </a>
      <div class="d-flex align-items-center">
        <lang-switch></lang-switch>
        <div class="m-0 cartIcon" @click="openCart = !openCart">
          <span>{{ $store.state.cartItems.length }}</span>
          <i class="fa-regular fa-cart-plus"></i>
        </div>
        <div v-if="$store.state.user" class="logout" @click="logout">
          <i class="fa-regular fa-right-from-bracket"></i>
        </div>
        <b-navbar-toggle target="navbar-toggle-collapse">
          <template #default="{ expanded }">
            <span
              class="menu-trigger"
              :class="expanded ? 'active' : ''"
              id="menu03"
            >
              <span></span>
              <span></span>
              <span></span>
            </span>
          </template>
        </b-navbar-toggle>
      </div>
    </b-navbar>
  </header>
</template>

<script>
import cart from "../cart/cart.vue";
import langSwitch from "../langSwitch/langSwitch.vue";
// import DropdownMenu from '@innologica/vue-dropdown-menu'
export default {
  name: "AppHeader",
  components: {
    langSwitch,
    cart,
    // DropdownMenu
  },
  data() {
    return {
      show: false,
      show1: false,
      topOfPage: true,
      openCart: false,
    };
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  mounted() {},
  methods: {
    logout() {
      this.$swal({
        title: "Logout!",
        text: "Are you sure? You want to logout from your account!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#ff5e57",
        confirmButtonText: "Logout",
      }).then((result) => {
        // <--
        if (result.value) {
          // <-- if confirmed
          this.confirmLogout();
        }
      });
    },
    confirmLogout() {
      this.$store.commit("setUserData", null);
      this.$cookies.remove("cms-auth");
      this.$cookies.remove("cms-user");
      this.$router.push(this.localePath("/login"));
    },
    handleScroll() {
      if (window.pageYOffset > 200) {
        if (this.topOfPage) this.topOfPage = false;
      } else {
        if (!this.topOfPage) this.topOfPage = true;
      }
    },
    goToCheckout() {
      this.openCart = false;
      this.$router.push("/checkout");
    },
  },
};
</script>
<style lang="scss">
.swal2-container {
  padding: 0 !important;
}
.swal2-shown {
  padding: 0 !important;
}
.swal2-confirm:focus,
.swal2-cancel:focus {
  box-shadow: none !important;
}
.swal2-cancel {
  background: #e5e5e5 !important;
  color: rgb(51, 51, 51) !important;
}
header {
  box-shadow: rgba(0, 0, 0, 0.07) 0px 5px 5px 0px;
  padding: 10px 20px;
  @include sm {
    padding: 8px 5px !important;
  }
  .cart {
    width: 390px;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    transform: translateX(390px);
    background-color: #fff;
    z-index: 999999;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    .head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px;
      & > i {
        border: 1px solid var(--main-color);
        border-radius: 5px;
        width: 30px;
        height: 30px;
        display: grid;
        place-items: center;
        cursor: pointer;
        background-color: var(--main-color);
        color: #fff;
        &:hover {
          color: var(--main-color);
          background: transparent;
        }
      }
      button {
        padding: 5px 30px;
        font-size: 1.1rem;
        background-color: var(--main-color);
        color: #fff;
        border: 1px solid var(--main-color);
        display: flex;
        align-items: center;
        gap: 5px;
        i {
          font-size: 1.1rem;
        }
        &:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          &:hover {
            background-color: var(--main-color);
            color: #fff;
          }
        }
        &:hover {
          background-color: transparent;
          color: var(--main-color);
        }
      }
    }
    &.opened {
      transform: translateX(0);
    }
    @include xs {
      width: 350px;
    }
  }
  .cartIcon {
    border: 1px solid var(--main-color);
    border-radius: 5px;
    width: 45px;
    height: 45px;
    display: grid;
    place-items: center;
    cursor: pointer;
    position: relative;
    span {
      position: absolute;
      top: -15px;
      right: -10px;
      width: 30px;
      height: 30px;
      background-color: var(--main-color);
      border-radius: 50%;
      color: #fff;
      display: grid;
      place-content: center;
      font-size: 1.2rem;
      @include sm {
        font-size: 1rem;
      }
    }
    i {
      color: var(--main-color);
    }
    @include sm {
      width: 40px;
      height: 40px;
      margin: 0 0px !important;
    }
    &:hover {
      background-color: var(--main-color);
      i {
        color: #fff;
      }
    }
  }
}
.navbar-brand {
  margin: 0 0 0 24px;
}
.navbar-brand img {
  max-width: 160px;
}
.nav-item {
  position: relative;
  margin: 0 12px;
}
.logo {
  img {
    @include sm {
      width: 200px;
    }
  }
}
.outLarge {
  display: none;
  @include md {
    display: inline;
  }
}
.nav-item::after {
  content: " ";
  position: absolute;
  bottom: 0;
  left: 10px;
  right: 10px;
  height: 2px;
  transition: all calc(300 * 1ms) cubic-bezier(0.42, 0.01, 0.58, 1);
  z-index: 999999998;
  background-color: transparent;
}
.logout {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--main-color);
  color: #fff;
  display: grid;
  place-items: center;
  font-size: 1.2rem;
  cursor: pointer;
  margin: 0 15px;
  @include md {
    display: none;
  }
}
.nav-item.active::after,
.nav-item:hover:after {
  background-color: var(--main-color);
  left: 0px;
  right: 0px;
}
.nav-link {
  padding: 6px 6px 8px !important;
  font-size: 18px;
  font-weight: 500;
  justify-content: center;
  line-height: 28.8px;
  color: #000;
}
.active .nav-link,
.nav-link:hover {
  color: rgb(248, 96, 17);
}
header .phone {
  margin-left: 24px;
  font-size: 18px;
  font-weight: 500;
  line-height: 27.2px;
  text-decoration: none;
  color: #000;
}
header .phone i {
  color: rgb(248, 96, 17);
  font-size: 16px;
  margin-right: 11px;
}
header .btn {
  padding: 17px 40px;
  margin: 0 20px;
  color: rgb(248, 96, 17);
  background-color: #ffefe6;
  font-size: 18px;
  font-weight: 500;
  border-radius: 0;
  letter-spacing: -0.18px;
  line-height: 21px;
  border: none;
  border-radius: 10px;
}
header .btn:hover {
  color: #fff;
  background-color: rgb(248, 96, 17);
}
.navbar-toggler,
.navbar-toggler:focus {
  border: none;
  box-shadow: none;
  margin: 0;
}
.menu-trigger,
.menu-trigger span {
  display: inline-block;
  transition: all 0.4s;
  box-sizing: border-box;
}
.menu-trigger {
  position: relative;
  width: 20px;
  height: 16px;
  background: none;
  border: none;
  appearance: none;
  cursor: pointer;
}
.menu-trigger span {
  position: absolute;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #000;
  border-radius: 4px;
}
.menu-trigger span:nth-of-type(1) {
  top: 0;
}
.menu-trigger span:nth-of-type(2) {
  top: 6px;
}
.menu-trigger span:nth-of-type(3) {
  bottom: 0;
}
#menu03.active {
  transform: rotate(360deg);
}
#menu03.active span:nth-of-type(1) {
  transform: translateY(6px) rotate(-45deg);
}
#menu03.active span:nth-of-type(2) {
  transform: translateY(0) rotate(45deg);
}
#menu03.active span:nth-of-type(3) {
  opacity: 0;
}
.onScroll {
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 0 10px #aaa;
  background-color: #fff;
  top: 0;
  z-index: 10;
  left: 0;
  padding: 15px 20px;
}
@media screen and (max-width: 1049px) {
  header .phone {
    display: none;
  }
}

@media screen and (max-width: 991px) {
  nav {
    position: relative;
  }
  .navbar-collapse {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
  .navbar-collapse.show .navbar-nav {
    position: absolute;
    width: 100%;
    top: 50px;
    z-index: 999;
  }
  .nav-item {
    width: 100%;
    background: #fff;
    text-align: center;
  }

  .nav-item:after {
    content: none;
  }
  .nav-item.active .nav-link,
  .nav-item:hover .nav-link {
    color: rgb(248, 96, 17);
  }
  .nav-link {
    padding: 16px 20px !important;
    font-weight: 500;
    font-size: 18px;
    text-align: center;
  }
}
@include md {
  .btn {
    display: none;
  }
}
.dropdownBtn {
  margin: 0 !important;
  button {
    background: none !important;
    padding: 0 !important;
    text-transform: none !important;
    font-size: 1.1rem !important;
    font-family: unset !important;
    font-weight: 500 !important;
    box-shadow: none !important;
    border: none !important;
    min-width: 60px !important;
    position: relative;
    top: -3px;
    margin: 0 !important;
    color: #000;
    &:hover {
      color: var(--main-color);
    }
  }
  .dropdown-menu {
    top: 40px !important;
  }
}
</style>
