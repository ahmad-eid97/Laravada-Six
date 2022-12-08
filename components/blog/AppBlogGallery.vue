<template>
  <div class="side-bar-widget">
    <h3 class="title">Gallery</h3>
    <ul class="blog-gallery" v-if="blogDetails.gallery.length >= 1">
      <li
        v-for="(image, index) in blogDetails.gallery.slice(0, 6)"
        :key="index"
        style="display: inline-block; margin: 0 5px 5px 0"
      >
        <a @click="openGallery(index)">
          <i class="fa-solid fa-up-right-and-down-left-from-center"></i>
          <img :src="image" alt="image" />
        </a>
      </li>
    </ul>
    <CoolLightBox
      :items="blogDetails.gallery.map((one) => (one ? one : ''))"
      :index="imageIndex"
      @close="imageIndex = null"
    />
  </div>
</template>

<script>
export default {
  name: "AppBlogGallery",
  props: ["blogDetails"],
  components: {},
  data() {
    return {
      media: [
        "https://templates.hibootstrap.com/techex/default/assets/images/blog/blog-small-img1.jpg",
        "https://templates.hibootstrap.com/techex/default/assets/images/blog/blog-small-img2.jpg",
        "https://templates.hibootstrap.com/techex/default/assets/images/blog/blog-small-img3.jpg",
        "https://templates.hibootstrap.com/techex/default/assets/images/blog/blog-small-img4.jpg",
        "https://templates.hibootstrap.com/techex/default/assets/images/blog/blog-small-img5.jpg",
        "https://templates.hibootstrap.com/techex/default/assets/images/blog/blog-small-img6.jpg",
      ],
      imageIndex: null,
    };
  },
  methods: {
    openGallery(i) {
      this.imageIndex = i;
    },
  },
};
</script>

<style>
.side-bar-widget .blog-gallery {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding-left: 0;
  list-style-type: none;
  margin-left: -5px;
  margin-right: -5px;
  margin-top: 10px;
  margin-bottom: 25px;
}
.side-bar-widget .blog-gallery li {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 33.33%;
  flex: 0 0 33.33%;
  max-width: 30%;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 10px;
}
.side-bar-widget .blog-gallery li a {
  display: block;
  position: relative;
}
.side-bar-widget .blog-gallery li a::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: var(--main-color);
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  opacity: 0;
  visibility: hidden;
  border-radius: 12px;
}
.side-bar-widget .blog-gallery li a img {
  width: 100px;
  height: 100px;
  border-radius: 12px;
  object-fit: contain;
}
.side-bar-widget .blog-gallery li a i {
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 30%;
  right: 0;
  text-align: center;
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
  text-align: center;
  background-color: transparent;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  opacity: 0;
  visibility: hidden;
  font-size: 35px;
  font-family: boxicons;
  color: #fff;
}
.side-bar-widget .blog-gallery li a:hover::before {
  opacity: 0.5;
  visibility: visible;
}
.side-bar-widget .blog-gallery li a:hover i {
  opacity: 1;
  visibility: visible;
}
</style>
