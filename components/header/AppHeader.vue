<template>
  <header>
    <b-navbar :class="!topOfPage ? 'onScroll' : ''" toggleable="lg">
      <b-navbar-brand href="/">
        <img src="/assets/images/logo.png" alt="logoImage" />
      </b-navbar-brand>

      <b-collapse
        id="navbar-toggle-collapse"
        class="ml-auto justify-content-end"
        is-nav
      >
        <b-navbar-nav class="align-items-center">
          <b-nav-item :to="localePath('/')">Home</b-nav-item>
          <b-nav-item :to="localePath('/services')">Services</b-nav-item>
          <b-nav-item :to="localePath('/team')">Why Us</b-nav-item>
          <b-nav-item :to="localePath('/testimonials')"
            >Case Studies</b-nav-item
          >
          <b-nav-item :to="localePath('/about')">About</b-nav-item>
          <b-nav-item :to="localePath('/blogs')">Blog</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
      <a href="#" class="phone">
        <i class="fa-solid fa-phone"></i>
        +11111111111
      </a>
      <a to="contact" class="btn"> Free Qoute </a>
      <lang-switch></lang-switch>
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
    </b-navbar>
  </header>
</template>

<script>
import langSwitch from "../langSwitch/langSwitch.vue";
// import DropdownMenu from '@innologica/vue-dropdown-menu'
export default {
  name: "AppHeader",
  components: {
    langSwitch,
    // DropdownMenu
  },
  data() {
    return {
      show: false,
      show1: false,
      topOfPage: true,
    };
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  mounted() {},
  methods: {
    handleScroll() {
      if (window.pageYOffset > 200) {
        if (this.topOfPage) this.topOfPage = false;
      } else {
        if (!this.topOfPage) this.topOfPage = true;
      }
    },
  },
};
</script>
<style lang="scss">
header {
  box-shadow: rgba(0, 0, 0, 0.07) 0px 5px 5px 0px;
  padding: 0;
}
.navbar-brand {
  margin: 0 0 0 24px;
}
.navbar-brand img {
  max-width: 230px;
}
.nav-item {
  position: relative;
  margin: 0 12px;
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
  margin: 20px;
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
</style>
