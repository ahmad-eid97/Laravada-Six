<template>
  <section class="brands">
    <div
      class="row m-0 align-items-center justify-content-center"
      v-if="partners.length >= 1"
    >
      <div class="col-12">
        <div class="heading">
          <h2>Our Partners</h2>
          <p>Quisque aliquet, libero consequat elementum convallis.</p>
        </div>
      </div>
      <div
        v-for="brand in partners"
        :key="brand"
        class="col-sm-3 col-md-2 brand"
      >
        <img :src="brand.image" :alt="brand.title" />
        <h5>{{ brand.title }}</h5>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AppHomeBrands",
  props: ["partners"],
  data() {
    return {};
  },
};
</script>
<style lang="scss">
.brands {
  padding-bottom: 85.4px;
  padding-left: 32px;
  padding-right: 32px;
  padding-top: 24.4px;
}
.brands .heading {
  margin: 10px 0 70px;
}
.brands .heading h2 {
  margin: 12px 0 16px;
  font-size: 54px;
  font-weight: 500;
  letter-spacing: -1.944px;
  line-height: 61.5667px;
  text-align: center;
}

.brands .heading p {
  font-size: 24px;
  font-weight: 400;
  letter-spacing: -0.24px;
  line-height: 35.5167px;
  margin-bottom: 20px;
  text-align: center;
}

@include xs {
  .brands .heading h2 {
    font-size: 34px;
    line-height: 40px;
  }

  .brands .heading p {
    font-size: 20px;
    line-height: 30px;
  }
}

.brands .brand {
  text-align: center;
  margin-bottom: 15px;
}

.brands .brand img {
  /* width: 148px; */
  height: 80px;
  margin: 0 auto;
  cursor: pointer;
}
</style>
