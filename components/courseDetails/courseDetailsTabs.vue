<template>
  <div class="courseDetailsTabs">
    <div class="tabs">
      <span
        @click="currentTab = 'instructor'"
        :class="currentTab === 'instructor' ? 'active' : ''"
        >Instructor</span
      >
      <span
        @click="currentTab = 'video'"
        :class="currentTab === 'video' ? 'active' : ''"
        >video</span
      >
      <span
        @click="currentTab = 'reviews'"
        :class="currentTab === 'reviews' ? 'active' : ''"
        >Reviews</span
      >
    </div>
    <div v-if="currentTab === 'instructor'" class="instructor">
      <h3>
        <i class="fa-regular fa-chalkboard-user"></i> Instructor Name:
        {{ courseDetails.instructor_name }}
      </h3>
      <h4>
        <i class="fa-solid fa-user-tie"></i> Instructor Occupation:
        {{ courseDetails.instructor_occupation }}
      </h4>
      <p>{{ courseDetails.instructor_details }}</p>
    </div>

    <div v-if="currentTab === 'video'" class="video">
      <h3>Course Intro Video</h3>
      <div class="videoWrapper">
        <iframe
          width="560"
          height="315"
          :src="courseDetails.course_video.replace('watch?v=', 'embed/')"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>

    <div v-if="currentTab === 'reviews'">
      <reviews-tab :reviews="courseDetails.reviews" />
    </div>
  </div>
</template>

<script>
import reviewsTab from "../../components/courseDetails/reviewsTab.vue";
export default {
  props: ["courseDetails"],
  components: {
    reviewsTab,
  },
  data() {
    return {
      currentTab: "instructor",
    };
  },
};
</script>

<style scoped lang="scss">
.courseDetailsTabs {
  margin-top: 100px;
  .tabs {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    position: relative;
    margin-bottom: 50px;
    @include xs {
      margin-bottom: 20px;
    }
    span {
      border: 1px solid #ccc;
      border-radius: 30px;
      padding: 10px 30px;
      font-size: 1rem;
      cursor: pointer;
      /* opacity: 0.8; */
      position: relative;
      z-index: 2;
      background-color: #fff;
      &.active {
        background-color: var(--main-color);
        border-color: var(--main-color);
        color: #fff;
      }
      @include xs {
        padding: 8px 20px;
        font-size: 1.1rem;
      }
    }
    &:after {
      content: "";
      position: absolute;
      left: 0;
      width: 100%;
      border-bottom: 2px solid rgb(221, 221, 221);
      z-index: 1;
    }
  }
  .instructor,
  .video,
  .reviews {
    border: 1px solid rgb(230, 230, 230);
    border-radius: 10px;
    padding: 20px;
    h3 {
      text-align: center;
      margin: 10px 0 30px;
    }
  }
  .instructor {
    h3,
    h4 {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 1.4rem;
    }
    i {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: var(--main-color);
      color: #fff;
      display: grid;
      place-items: center;
      font-size: 1.1rem;
    }
    p {
      margin-top: 20px;
      font-size: 1.2rem;
      opacity: 0.8;
    }
  }
  .video {
    .videoWrapper {
      width: 600px;
      height: 400px;
      margin: auto;
      iframe {
        width: 100%;
        height: 100%;
        border-radius: 10px;
      }
      @include xs {
        width: 100%;
        height: 300px;
      }
    }
  }
}
</style>
