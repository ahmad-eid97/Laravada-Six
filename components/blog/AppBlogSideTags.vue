<template>
  <div class="side-bar-widget" v-if="blogDetails.tags.length >= 1">
    <h3 class="title">Tag Cloud</h3>
    <ul class="side-bar-widget-tag">
      <li v-for="tag in blogDetails.tags" :key="tag">
        <a href="#" target="_blank">{{ tag.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AppBlogSideTags",
  props: ["blogDetails"],
};
</script>

<style>
.side-bar-widget .title {
  font-size: 20px;
  color: #212529;
  padding: 0;
  font-weight: 600;
  position: relative;
  display: inline-block;
  margin-bottom: 10px;
  background-color: transparent;
  width: 100%;
}
.side-bar-widget .side-bar-widget-tag {
  list-style: none;
  padding: 0;
  margin-top: 10px;
  margin-bottom: 20px;
}
.side-bar-widget .side-bar-widget-tag li {
  display: inline-flex;
  margin: 5px;
  color: #fff;
}
.side-bar-widget .side-bar-widget-tag li a {
  color: var(--main-color);
  padding: 7px 15px;
  background-color: transparent;
  border: 2px solid var(--main-color);
  font-size: 14px;
  font-weight: 400;
  border-radius: 20px;
  -webkit-transition: 0.7s;
  transition: 0.7s;
}
.side-bar-widget .side-bar-widget-tag li:hover a {
  color: #fff;
  background-color: var(--main-color);
}
</style>
