<template>
  <div
    class="horizontalSteps"
    v-if="steps.find((one) => one.key === 'steps_list')"
  >
    <div class="row gx-5 justify-content-center">
      <div
        class="col-sm-12 stepWrapper"
        :class="$i18n.locale === 'ar' ? 'arabic' : ''"
        v-for="step in steps.find((one) => one.key === 'steps_list').value"
        :key="step.number"
      >
        <div class="step">
          <img :src="step.icon" alt="step icon" />
          <span class="number" :class="$i18n.locale === 'ar' ? 'arabic' : ''">{{
            step.number
          }}</span>
          <div class="details">
            <h4>{{ step.title }}</h4>
            <p>
              {{ step.description }}
            </p>
            <span class="hoverLay"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["steps"],
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
    position: relative;
    &:nth-of-type(even) {
      .step {
        flex-direction: row-reverse;
        .details {
          border-right: 4px solid var(--step-hover-background);
          border-left: unset;
        }
      }
    }
    &.arabic {
      .step {
        .details {
          border-right: 4px solid var(--step-hover-background);
          border-left: unset;
        }
      }
      &:nth-of-type(even) {
        .step {
          .details {
            border-left: 4px solid var(--step-hover-background);
            border-right: unset;
          }
        }
      }
    }
  }
  .step {
    padding: 20px;
    position: relative;
    z-index: 2;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--text-color);
    img {
      height: 120px;
      position: relative;
      z-index: 2;
    }
    .number {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: var(--num-background);
      color: var(--num-text-color);
      display: grid;
      place-items: center;
      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
      font-weight: bold;
      position: relative;
      z-index: 1;
      &:after {
        content: "";
        position: absolute;
        top: 50%;
        left: 100%;
        border-bottom: 5px dashed var(--num-background);
        width: 100px;
      }
      &:before {
        content: "";
        position: absolute;
        top: 50%;
        right: 100%;
        border-bottom: 5px dashed var(--num-background);
        width: 100px;
      }
      &.arabic {
        right: unset;
        left: 0;
      }
      @include md {
        position: absolute;
        top: -20px;
        left: 50%;
        z-index: 3;
        &:after {
          content: none;
        }
        &:before {
          content: none;
        }
      }
      &:hover {
        background: var(--num-hover-background);
        color: var(--num-text-hover-color);
      }
    }
    .details {
      max-width: 800px;
      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
      padding: 20px;
      background: #fff;
      position: relative;
      z-index: 2;
      border-left: 4px solid var(--step-hover-background);
      .hoverLay {
        position: absolute;
        left: 0;
        bottom: 0 !important;
        width: 100%;
        height: 4px;
        background: var(--step-hover-background);
        z-index: -1;
        opacity: 0.1;
      }
      &:hover {
        .hoverLay {
          height: 100%;
        }
      }
      @include lg {
        max-width: 600px;
      }
    }
  }
}
</style>
