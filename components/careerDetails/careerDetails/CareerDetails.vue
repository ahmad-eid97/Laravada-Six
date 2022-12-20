<template>
  <div class="careerDetails">
    <div class="prief">
      <div class="details">
        <img v-if="jobDetails.photo" :src="jobDetails.photo" alt="jobImage" />
        <div>
          <h4>{{ jobDetails.title }}</h4>
        </div>
      </div>
      <div class="btns">
        <button class="apply">Apply To This Job</button>
        <button>View Company</button>
      </div>
    </div>

    <div class="allDetails">
      <h5 v-if="jobDetails.description">Job description</h5>
      <p>
        {{ jobDetails.description }}
      </p>
      <h5>Job Responsibilities:</h5>
      <ul>
        <li
          v-for="jobRes in jobDetails.job_responsibilities.split(`\r\n`)"
          :key="jobRes"
        >
          <i class="fa-regular fa-check"></i>
          {{ jobRes }}
        </li>
      </ul>
      <div class="requirements" v-if="jobDetails.educational_requirements">
        <h5>Educational Requirements</h5>
        <div
          v-for="requirement in jobDetails.educational_requirements.split(
            '\r\n'
          )"
          :key="requirement"
        >
          <p>{{ requirement }}</p>
        </div>
      </div>
      <div class="requirements" v-if="jobDetails.experience_requirements">
        <h5>Experience Requirements</h5>
        <div
          v-for="requirement in jobDetails.experience_requirements.split(
            '\r\n'
          )"
          :key="requirement"
        >
          <p>{{ requirement }}</p>
        </div>
      </div>
      <h5 v-if="jobDetails.skills">Key Skills</h5>
      <div class="tags" v-if="jobDetails.skills">
        <span v-for="skill in jobDetails.skills.split('\r\n')" :key="skill">{{
          skill
        }}</span>
      </div>
    </div>

    <div class="sectionFooter">
      <div class="icons">
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-linkedin-in"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-solid fa-share-nodes"></i>
      </div>
      <div class="btns">
        <button>Save This Job</button>
        <button class="apply">Apply Job</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["jobDetails"],
  data() {
    return {};
  },
  mounted() {
    console.log(this.jobDetails);
  },
};
</script>

<style scoped lang="scss">
.careerDetails {
  margin-top: 100px;
  .prief {
    background-color: #fff;
    border-radius: 5px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    gap: 20px;
    @include xs {
      flex-direction: column;
      .btns {
        margin-top: 15px;
      }
    }
    .details {
      display: flex;
      align-items: center;
      gap: 20px;
      p {
        margin: 0;
      }
      img {
        width: 150px;
        height: 100px;
        object-fit: contain;
      }
    }
    .btns {
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: center;
      gap: 10px;
      button {
        padding: 10px 20px;
        border: 1px solid #ccc;
        background: transparent;
        border-radius: 5px;
        min-width: 200px;
        &.apply {
          background: var(--main-color);
          color: #fff;
          border-color: var(--main-color);
          &:hover {
            background-color: transparent;
            color: var(--main-color);
          }
        }
      }
    }
  }
  .allDetails {
    background-color: #fff;
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 20px;
    ul {
      padding: 0;
      list-style: none;
      li {
        display: flex;
        gap: 10px;
        margin-bottom: 5px;
        i {
          color: #2ecc71;
        }
      }
    }
    .requirements {
      div {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        p {
          grid-column: span 2;
          opacity: 0.7;
        }
        span {
          grid-column: span 6;
        }
      }
    }
    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      span {
        background-color: #f3f3f3;
        padding: 5px 10px;
        border-radius: 5px;
      }
    }
  }
  .sectionFooter {
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icons {
      display: flex;
      align-content: center;
      gap: 15px;
      i {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 1px solid #ccc;
        display: grid;
        place-content: center;
        cursor: pointer;
        opacity: 0.7;
      }
    }
    .btns {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      button {
        padding: 10px 20px;
        border: 1px solid #ccc;
        background: transparent;
        border-radius: 5px;
        &.apply {
          background: var(--main-color);
          color: #fff;
          border-color: var(--main-color);
          &:hover {
            background-color: transparent;
            color: var(--main-color);
          }
        }
      }
    }
    @include sm {
      flex-direction: column;
      .btns {
        margin-top: 15px;
      }
    }
  }
}
</style>
