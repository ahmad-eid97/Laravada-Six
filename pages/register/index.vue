<template>
  <div class="home">
    <app-register-heading></app-register-heading>
    <app-register-form></app-register-form>
  </div>
</template>

<script>
import AppRegisterForm from "../../components/Register/AppRegisterForm.vue";
import AppRegisterHeading from "../../components/Register/AppRegisterHeading.vue";
export default {
  middleware: ["guest"],
  name: "Register",
  components: {
    AppRegisterHeading,
    AppRegisterForm,
  },
};
</script>

<style></style>
