<template>
    <div class="home">
        <app-blogs-heading></app-blogs-heading>
        <app-blogs-items :blogs="blogs"></app-blogs-items>
    </div>
</template>

<script>
import AppBlogsHeading from '../../components/blogs/AppBlogsHeading.vue'
import AppBlogsItems from '../../components/blogs/AppBlogsItems.vue'
export default {
  name: 'Blogs',
  components: { AppBlogsHeading, AppBlogsItems },
  async asyncData({ $axios }) {
    return await $axios.get('/blogs?latest=1').then((res) => {
      return {
        blogs: res.data.data
      }
    });
  },
  mounted() {
  }
}
</script>

<style>

</style>