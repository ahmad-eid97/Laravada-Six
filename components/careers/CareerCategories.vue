<template>
  <div class="categories">
    <h6>Popular Categories</h6>
    <h1>Browse Top Categories</h1>

    <div class="row justify-content-center">
      <div
        v-for="category in careerCategories"
        :key="category"
        class="col-md-4 col-lg-3 col-xl-2 mb-4"
        @click="$router.push(`/career-category/${category.id}`)"
      >
        <div class="category" :style="{ backgroundColor: random_rgba() }">
          <i :class="category.icon"></i>
          <h5>{{ category.name }}</h5>
          <p>{{ category.jobs_count }} jobs</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["careerCategories"],
  data() {
    return {};
  },
  methods: {
    random_rgba() {
      var o = Math.round,
        r = Math.random,
        s = 255;
      return (
        "rgba(" +
        o(r() * s) +
        "," +
        o(r() * s) +
        "," +
        o(r() * s) +
        "," +
        "0.2" +
        ")"
      );
    },
  },
};
</script>

<style scoped lang="scss">
.categories {
  margin-top: 100px;
  h6,
  h1 {
    text-align: center;
  }
  h1 {
    margin-bottom: 50px;
  }
  .category {
    background-color: #f0efef;
    padding: 40px 20px 20px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    margin-bottom: 20px;
    height: 100%;
    i {
      width: 60px;
      height: 60px;
      background-color: #fff;
      border-radius: 50%;
      display: grid;
      place-content: center;
      font-size: 1.2rem;
      margin-bottom: 10px;
    }
    h5 {
      text-align: center;
      cursor: pointer;
    }
  }
  .btn {
    display: grid;
    place-content: center;
    border: none;
    button {
      background-color: var(--main-color);
      color: #fff;
      padding: 10px 30px;
      border: 1px solid var(--main-color);
      border-radius: 20px;
      outline: none;
      &:hover {
        background-color: transparent;
        color: var(--main-color);
      }
    }
  }
}
</style>
