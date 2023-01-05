<template>
  <section class="services-style-area pt-100 pb-70">
    <div class="container">
      <div class="section-title text-center">
        <span class="sp-color2">Our Services</span>
        <h2>We Provide a Wide Variety of It Services</h2>
        <p class="margin-auto mx-auto">
          Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat
          ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh
          vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam
          nec
        </p>
      </div>
      <div
        class="row pt-45 justify-content-center"
        v-if="allServices.services.length >= 1"
      >
        <div
          v-for="service in allServices.services"
          :key="service.id"
          class="col-lg-3 col-sm-6 col-md-4 mb-4"
          @click="$router.push(localePath(`/service/${service.id}`))"
        >
          <div class="services-card services-style-bg">
            <div class="icon">
              <i :class="service.icon"></i>
            </div>
            <h3>
              <router-link to="service">{{ service.title }}</router-link>
            </h3>
            <p>{{ service.short_description }}</p>
            <router-link to="service" class="learn-btn"
              >Learn More
              <i class="bx bx-chevron-right"></i>
            </router-link>
          </div>
        </div>
      </div>
      <div class="col-lg-12 col-md-12 text-center">
        <div class="pagination-area">
          <b-pagination
            v-model="allServices.meta.current_page"
            :total-rows="allServices.meta.total"
            :per-page="allServices.meta.per_page"
            aria-controls="my-table"
            @change="changePage"
          ></b-pagination>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["services"],
  data() {
    return {
      allServices: this.services,
    };
  },
  methods: {
    async changePage(pageNum) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      const response = await this.$axios.get(`/services?page=${pageNum}`);
      this.allServices = response.data.data;
    },
  },
};
</script>

<style>
.services-style-area .section-title {
  margin: 0 auto;
  padding: 0;
  position: relative;
  text-align: center;
}

.services-style-area .section-title span {
  margin-bottom: 8px;
  font-weight: 600;
  display: block;
  color: var(--main-color);
}
.services-style-area .section-title h2 {
  max-width: 600px;
  color: #252525;
  font-size: 35px;
  font-weight: 800;
  letter-spacing: -1px;
  line-height: 42px;
  text-align: left;
  margin-top: 10px;
  margin-right: auto;
  margin-bottom: 15px;
  margin-left: auto;
  text-align: center;
}

.services-style-area .section-title p {
  max-width: 600px;
}
.services-card {
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.07);
  padding: 40px 30px 35px;
  border-radius: 12px;
  background-color: #fff;
  position: relative;
  z-index: 1;
  margin-bottom: 30px;
  color: #252525;
  height: 100%;
  cursor: pointer;
}
.services-card h3 a {
  color: #252525;
  font-size: 22px;
}
.services-card:hover h3 a,
.services-card:hover p {
  color: #fff;
}
.services-card::before {
  content: "";
  position: absolute;
  z-index: -1;
  bottom: 0;
  right: 0;
  width: 90px;
  height: 90px;
  background-color: var(--main-color);
  border-radius: 12px;
  opacity: 0.1;
  -webkit-transition: 0.7s;
  transition: 0.7s;
}

.services-card::after {
  content: "";
  position: absolute;
  z-index: -1;
  bottom: 0;
  right: 0;
  width: 75px;
  height: 75px;
  background-color: var(--main-color);
  border-radius: 12px;
  opacity: 0.1;
  -webkit-transition: 0.7s;
  transition: 0.7s;
}
.services-card:hover::before {
  width: 100%;
  height: 100%;
  border-radius: 12px;
  opacity: 1;
}
.services-card .icon {
  font-size: 45px;
  width: 80px;
  height: 80px;
  line-height: 80px;
  color: #fff;
  background-color: var(--main-color);
  border-radius: 12px;
  display: inline-block;
  text-align: center;
  margin-bottom: 12px;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}
.services-card:hover .icon {
  font-size: 45px;
  width: 80px;
  height: 80px;
  line-height: 80px;
  color: var(--main-color);
  background-color: #fff;
  border-radius: 12px;
  display: inline-block;
  text-align: center;
  margin-bottom: 12px;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}
.services-card a {
  color: #212934;
}
.services-card:hover a {
  color: #fff;
}
</style>
