<template>
  <div
    class="horizontalSteps"
    v-if="steps.find((one) => one.key === 'steps_list')"
  >
    <div class="row gx-5 justify-content-center">
      <div
        class="col-md-6 col-lg-4 stepWrapper mb-5"
        :class="$i18n.locale === 'ar' ? 'arabic' : ''"
        v-for="step in steps.find((one) => one.key === 'steps_list').value"
        :key="step.number"
      >
        <div class="step">
          <img :src="step.icon" alt="step icon" />
          <span class="number" :class="$i18n.locale === 'ar' ? 'arabic' : ''">{{
            step.number
          }}</span>
          <h4>{{ step.title }}</h4>
          <p>
            {{ step.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["steps"],
  data() {
    return {};
  },
  mounted() {
    // SET SCSS VARIABLES FOR DYNAMIC COLORS AND BACKGROUND
    document
      .querySelector(".horizontalSteps")
      .style.setProperty(
        "--text-color",
        this.steps.find((one) => one.key === "steps_text_color").value
      );

    document
      .querySelector(".horizontalSteps")
      .style.setProperty(
        "--text-hover-color",
        this.steps.find((one) => one.key === "steps_text_hover_color").value
      );

    document
      .querySelector(".horizontalSteps")
      .style.setProperty(
        "--num-text-color",
        this.steps.find((one) => one.key === "steps_number_text_color").value
      );

    document
      .querySelector(".horizontalSteps")
      .style.setProperty(
        "--num-text-hover-color",
        this.steps.find((one) => one.key === "steps_number_text_hover_color")
          .value
      );

    document
      .querySelector(".horizontalSteps")
      .style.setProperty(
        "--step-background",
        this.steps.find((one) => one.key === "steps_background_color").value
      );

    document
      .querySelector(".horizontalSteps")
      .style.setProperty(
        "--step-hover-background",
        this.steps.find((one) => one.key === "steps_background_hover_color")
          .value
      );

    document
      .querySelector(".horizontalSteps")
      .style.setProperty(
        "--num-background",
        this.steps.find((one) => one.key === "steps_number_background_color")
          .value
      );

    document
      .querySelector(".horizontalSteps")
      .style.setProperty(
        "--num-hover-background",
        this.steps.find(
          (one) => one.key === "steps_number_background_hover_color"
        ).value
      );
  },
};
</script>

<style scoped lang="scss">
.horizontalSteps {
  --text-color: #000;
  --text-hover-color: #fff;
  --step-background: #fff;
  --step-hover-background: var(--main-color);
  --num-text-color: #fff;
  --num-text-hover-color: var(--main-color);
  --num-background: var(--main-color);
  --num-hover-background: #fff;
  padding: 50px 0;
  .stepWrapper {
    * {
      transition: all 0.3s ease-in-out !important;
    }
    position: relative;
    &:after {
      content: "";
      position: absolute;
      top: 50%;
      left: 90%;
      border-bottom: 5px dashed #ccc;
      width: 100px;
    }
    &:nth-of-type(3n) {
      &:after {
        content: none;
        border-bottom: none;
      }
    }
    &:last-of-type {
      &:after {
        content: none;
        border-bottom: none;
      }
    }
    @include md {
      &:nth-of-type(3n) {
        &:after {
          content: "";
          border-bottom: 5px dashed #ccc;
        }
      }
      &:nth-of-type(2n) {
        &:after {
          content: none;
          border-bottom: none;
        }
      }
    }
    @include sm {
      &:after {
        content: none;
        border-bottom: none;
      }
    }
    &.arabic {
      &:after {
        content: none;
        border-bottom: none;
      }
      &::before {
        content: "";
        position: absolute;
        top: 50%;
        right: 90%;
        border-bottom: 5px dashed #ccc;
        width: 100px;
      }
      &:nth-of-type(3n) {
        &:before {
          content: none;
          border-bottom: none;
        }
      }
      &:last-of-type {
        &:before {
          content: none;
          border-bottom: none;
        }
      }
      @include md {
        &:nth-of-type(3n) {
          &:before {
            content: "";
            border-bottom: 5px dashed #ccc;
          }
        }
        &:nth-of-type(2n) {
          &:before {
            content: none;
            border-bottom: none;
          }
        }
      }
      @include sm {
        &:before {
          content: none;
          border-bottom: none;
        }
      }
    }
  }
  .step {
    color: var(--text-color);
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
    background: var(--step-background);
    padding: 20px;
    position: relative;
    z-index: 2;
    height: 100%;
    img {
      height: 120px;
      margin-bottom: 10px;
    }
    .number {
      position: absolute;
      top: 0;
      right: 0;
      width: 40px;
      height: 40px;
      /* border-radius: 50%; */
      background: var(--num-background);
      color: var(--num-text-color);
      display: grid;
      place-items: center;
      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
      font-weight: bold;
      &.arabic {
        right: unset;
        left: 0;
      }
    }
    &::before {
      content: "";
      position: absolute;
      z-index: -1;
      bottom: 0;
      right: 0;
      width: 90px;
      height: 90px;
      background-color: var(--step-hover-background);
      /* border-radius: 12px; */
      opacity: 0.1;
      -webkit-transition: 0.7s;
      transition: 0.7s;
    }
    &::after {
      content: "";
      position: absolute;
      z-index: -1;
      bottom: 0;
      right: 0;
      width: 75px;
      height: 75px;
      background-color: var(--step-hover-background);
      /* border-radius: 12px; */
      opacity: 0.1;
      -webkit-transition: 0.7s;
      transition: 0.7s;
    }
    &:hover::before {
      width: 100%;
      height: 100%;
      /* border-radius: 12px; */
      opacity: 1;
    }
    &:hover {
      color: var(--text-hover-color);
      .number {
        background: var(--num-hover-background);
        color: var(--num-text-hover-color);
        width: 60px;
        height: 60px;
        font-size: 1.2rem;
      }
    }
  }
}
</style>
