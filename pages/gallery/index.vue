<template>
  <div class="gallery">
    <gallery-heading />
    <div class="container">
      <div class="galleryWrapper">
        <h1>Our Gallery Albums</h1>

        <div class="albums">
          <div class="row justify-content-center">
            <div
              class="col-lg-6 mb-4"
              v-for="gallery in galleries.galleries"
              :key="gallery.id"
            >
              <div class="album">
                <h2>{{ gallery.title }}</h2>
                <!-- <p>{{ album.description }}</p> -->
                <div class="images">
                  <div
                    class="image"
                    v-for="(image, idx) in gallery.images"
                    :key="idx"
                  >
                    <img :src="image" alt="gallery image" />
                    <span
                      @click="
                        openGallery(items.findIndex((one) => one === image))
                      "
                      ><i class="fa-duotone fa-eye"></i
                    ></span>
                  </div>
                </div>
                <CoolLightBox
                  :items="items"
                  :index="imageIndex"
                  @close="imageIndex = null"
                />
              </div>
            </div>
          </div>
          <div class="col-lg-12 col-md-12 text-center">
            <div class="pagination-area">
              <b-pagination
                v-model="galleries.meta.current_page"
                :total-rows="galleries.meta.total"
                :per-page="galleries.meta.per_page"
                aria-controls="my-table"
                @change="changePage"
              ></b-pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import galleryHeading from "../../components/gallery/galleryHeading.vue";

export default {
  components: {
    galleryHeading,
  },
  async asyncData({ $axios, app }) {
    const galleries = await $axios.get(`/galleries`, {
      headers: {
        "Accept-Language": app.i18n.locale,
      },
    });

    return {
      galleries: galleries.data.data,
    };
  },
  data() {
    return {
      // allGalleries: this.galleries,
      items: [],
      imageIndex: null,
    };
  },
  methods: {
    openGallery(i) {
      this.imageIndex = i;
    },
    async changePage(pageNum) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      const response = await this.$axios.get(`/galleries?page=${pageNum}`);
      this.galleries = response.data.data;
    },
  },
  beforeMount() {
    this.galleries.galleries.forEach((gallery) => {
      this.items.push(...gallery.images);
    });
  },
};
</script>

<style scoped lang="scss">
.gallery {
  background-color: rgb(243, 243, 243);
  padding-bottom: 50px;
}
.galleryWrapper {
  margin-top: 100px;
  h1 {
    text-align: center;
    margin-bottom: 50px;
  }
  .albums {
    .album {
      padding: 20px;
      box-shadow: inset 4px 4px 4px #cbced1, inset -4px -4px 4px #fff;
      border-radius: 10px;
      margin-bottom: 30px;
      height: 100%;
      h2 {
        text-align: center;
        opacity: 0.8;
        margin-bottom: 20px;
      }
      .images {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 15px;
        .image {
          width: 150px;
          height: 120px;
          border-radius: 5px;
          position: relative;
          display: grid;
          place-items: center;
          box-shadow: 13px 13px 20px #cbced1, -13px -13px 20px #fff;
          img {
            width: 140px;
            height: 110px;
            border-radius: 5px;
            object-fit: contain;
          }
          span {
            background: rgba(#f86011, 0.5);
            width: 100%;
            height: 0%;
            position: absolute;
            z-index: -1;
            display: grid;
            place-items: center;
            border-radius: 5px;
            opacity: 0;
            transition: all 0.3s ease-in-out;
            cursor: pointer;
            i {
              font-size: 1.5rem;
              width: 40px;
              height: 40px;
              background-color: #fff;
              border-radius: 50%;
              color: var(--main-color);
              display: grid;
              place-items: center;
            }
          }
          &:hover {
            transform: rotate(-10deg) scale(0.9);
            span {
              opacity: 1;
              z-index: 2;
              height: 100%;
            }
          }
        }
      }
    }
  }
}
</style>
