<template>
  <div class="loader">
    <div class="d-flex justify-content-center mb-3">
      <b-spinner label="Loading..."></b-spinner>
    </div>
    <h4>Loading...</h4>
  </div>
</template>

<style scoped lang="scss">
.loader {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 99999999999999999;
  h4 {
    opacity: 0.9;
  }
}
</style>
