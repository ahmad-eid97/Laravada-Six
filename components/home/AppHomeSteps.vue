<template>
  <div class="steps" v-if="steps.length">
    <div class="container">
      <h1>{{ steps.find((one) => one.key === "steps_title").value }}</h1>
      <p>
        {{ steps.find((one) => one.key === "steps_description").value }}
      </p>

      <horizontal-steps
        v-if="
          steps.find((one) => one.key === 'steps_type').value === 'horizontal'
        "
        :steps="steps"
      />

      <vertical-steps
        v-if="
          steps.find((one) => one.key === 'steps_type').value === 'vertical'
        "
        :steps="steps"
      />
    </div>
  </div>
</template>

<script>
import horizontalSteps from "../HorizontalSteps/HorizontalSteps.vue";
import verticalSteps from "../VerticalSteps/VerticalSteps.vue";

export default {
  props: ["steps"],
  components: {
    horizontalSteps,
    verticalSteps,
  },
  data() {
    return {};
  },
  mounted() {
    document
      .querySelector(".steps")
      .style.setProperty(
        "--steps-bg",
        this.steps.find((one) => one.key === "steps_background_active_section")
          .value === "color"
          ? this.steps.find(
              (one) => one.key === "steps_background_color_section"
            ).value
          : `url(${
              this.steps.find(
                (one) => one.key === "steps_background_image_section"
              ).value
            })`
      );

    document
      .querySelector(".steps")
      .style.setProperty(
        "--steps-fontSize",
        `${
          this.steps.find((one) => one.key === "steps_font_size_section").value
        }px`
      );

    if (
      this.steps.find((one) => one.key === "steps_border_position_section") &&
      this.steps.find((one) => one.key === "steps_border_position_section")
        .value === "both"
    ) {
      document
        .querySelector(".steps")
        .style.setProperty(
          "--steps-border-top",
          `${
            this.steps.find((one) => one.key === "steps_border_size_section")
              .value
          }px ${
            this.steps.find((one) => one.key === "steps_border_type_section")
              .value
          } ${
            this.steps.find((one) => one.key === "steps_border_color_section")
              .value
          }`
        );

      document
        .querySelector(".steps")
        .style.setProperty(
          "--steps-border-bottom",
          `${
            this.steps.find((one) => one.key === "steps_border_size_section")
              .value
          }px ${
            this.steps.find((one) => one.key === "steps_border_type_section")
              .value
          } ${
            this.steps.find((one) => one.key === "steps_border_color_section")
              .value
          }`
        );
    } else if (
      this.features.find(
        (one) => one.key === "steps_border_position_section"
      ) &&
      this.features.find((one) => one.key === "steps_border_position_section")
        .value === "top"
    ) {
      document
        .querySelector(".steps")
        .style.setProperty(
          "--steps-border-top",
          `${
            this.steps.find((one) => one.key === "steps_border_size_section")
              .value
          }px ${
            this.steps.find((one) => one.key === "steps_border_type_section")
              .value
          } ${
            this.steps.find((one) => one.key === "steps_border_color_section")
              .value
          }`
        );
    } else if (
      this.steps.find((one) => one.key === "steps_border_position_section") &&
      this.steps.find((one) => one.key === "steps_border_position_section")
        .value === "top"
    ) {
      document
        .querySelector(".steps")
        .style.setProperty(
          "--steps-border-bottom",
          `${
            this.steps.find((one) => one.key === "steps_border_size_section")
              .value
          }px ${
            this.steps.find((one) => one.key === "steps_border_type_section")
              .value
          } ${
            this.steps.find((one) => one.key === "steps_border_color_section")
              .value
          }`
        );
    }
  },
};
</script>

<style scoped lang="scss">
.steps {
  --steps-bg: #fff;
  --steps-fontSize: 20px;
  --steps-border-top: 0px solid #fff;
  --steps-border-bottom: 0px solid #fff;

  background: var(--steps-bg);
  border-top: var(--steps-border-top);
  border-bottom: var(--steps-border-bottom);
  background-repeat: no-repeat;
  background-size: cover;
  padding: 50px 0 0 0;

  h1 {
    font-size: var(--steps-fontSize);
    text-align: center;
  }
  p {
    text-align: center;
  }
}
</style>
