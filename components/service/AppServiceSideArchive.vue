<template>
  <div class="side-bar-widget">
    <h3 class="title">Our Services</h3>
    <div class="side-bar-categories" v-if="serviceDetails.features.length >= 1">
      <ul>
        <li v-for="feature in serviceDetails.features" :key="feature">
          <i class="fa-solid fa-circle-dot"></i>
          <a href="#" target="_blank">{{ feature }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppServiceSideArchive",
  props: ["serviceDetails"],
};
</script>

<style>
.side-bar-widget .title {
  font-size: 20px;
  color: #252525;
  padding: 0;
  font-weight: 600;
  position: relative;
  display: inline-block;
  margin-bottom: 10px;
  background-color: transparent;
  width: 100%;
}
.side-bar-widget .side-bar-categories {
  margin-bottom: 15px;
}
.side-bar-widget .side-bar-categories ul {
  padding: 0;
  margin: 0;
  list-style-type: none;
}
.side-bar-widget .side-bar-categories ul li {
  position: relative;
  font-size: 15px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 10px;
}
.side-bar-widget .side-bar-categories ul li i {
  color: var(--main-color);
}
.side-bar-widget .side-bar-categories ul li a {
  display: inline-block;
  color: #444;
  font-weight: 400;
  padding: 5px 0 5px 0px;
  font-weight: 600;
  position: relative;
  width: 100%;
}
.side-bar-widget .side-bar-categories ul li a:hover {
  color: var(--main-color);
}
.side-bar-widget .side-bar-categories ul li a span {
  right: 30px;
  position: absolute;
  top: 10px;
  color: #444;
}
</style>
