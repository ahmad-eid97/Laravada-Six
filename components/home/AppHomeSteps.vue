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
    console.log(this.steps);
  },
};
</script>

<style scoped lang="scss">
.steps {
  h1 {
    text-align: center;
  }
  p {
    text-align: center;
  }
}
</style>
