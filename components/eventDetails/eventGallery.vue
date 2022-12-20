<template>
  <div class="eventGallery">
    <img :src="eventDetails.image" alt="eventImage" />
  </div>
</template>

<script>
export default {
  props: ["eventDetails"],
};
</script>

<style scoped lang="scss">
.eventGallery {
  margin-bottom: 20px;
  img {
    width: 100%;
    max-height: 600px;
  }
}
</style>
