<template>
  <div class="side-bar-widget">
    <h3 class="title">Latest Blog</h3>
    <div class="widget-popular-post" v-if="latestBlogs.blogs.length >= 1">
      <article
        v-for="blog in latestBlogs.blogs.slice(0, 4)"
        :key="blog.id"
        class="item"
        @click="$router.push(localePath(`/blog/${blog.id}`))"
      >
        <a :href="localePath(`/blog/${blog.id}`)" class="thumb">
          <img class="full-image cover bg1" role="img" :src="blog.image" />
        </a>
        <div class="info">
          <h4 class="title-text">
            <a href="#" target="_blank">
              {{ blog.title }}
            </a>
          </h4>
          <p>{{ blog.publish_date }}</p>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppBlogSideBlogs",
  props: ["latestBlogs"],
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
.side-bar-widget .widget-popular-post {
  position: relative;
  overflow: hidden;
  padding: 0;
  margin-top: 10px;
  margin-bottom: 20px;
}
.side-bar-widget .widget-popular-post .item {
  overflow: hidden;
  margin-bottom: 13px;
  padding-bottom: 8px;
  border-bottom: 1px solid #e2e2e2;
  display: flex;
  align-items: center;
  gap: 15px;
}
.side-bar-widget .widget-popular-post .item .thumb {
  /* float: left;
  overflow: hidden;
  position: relative;
  margin-right: 15px; */
}
.side-bar-widget .widget-popular-post .item .thumb .full-image {
  width: 80px;
  height: 80px;
  display: inline-block;
  background-size: cover !important;
  background-repeat: no-repeat;
  background-position: center center !important;
  position: relative;
  background-color: #070b3b;
  border-radius: 12px;
}
.side-bar-widget .widget-popular-post .item .info {
  overflow: hidden;
  padding: 0;
}
.side-bar-widget .widget-popular-post .item .info .title-text {
  margin-bottom: 0;
  line-height: 1.5;
  font-size: 18px;
  font-weight: 500;
  max-width: 210px;
}
.side-bar-widget .widget-popular-post .item .info .title-text a {
  display: inline-block;
  color: #252525;
  margin-bottom: 5px;
}
.side-bar-widget .widget-popular-post .item .info p {
  font-size: 15px;
  margin-bottom: 0;
  max-width: 180px;
  color: var(--main-color);
}
</style>
