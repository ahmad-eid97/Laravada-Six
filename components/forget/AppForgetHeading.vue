<template>
  <div class="page-heading">
    <div class="row justify-content-center m-0">
      <h3 class="col-12 text-center title">Forget Password</h3>
      <div class="col-12 text-center">
        <div class="breadcrumb">
          <nuxt-link :to="localePath('/')"> Home </nuxt-link>
          <a href="">
            <i class="fa-solid fa-angles-right"></i>
          </a>
          <nuxt-link :to="localePath('/forget')"> Forget Password </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppForgetHeading",
};
</script>

<style></style>
