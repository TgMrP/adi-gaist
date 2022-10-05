<script setup lang="ts">
import { ref, computed } from "vue";
import { useMouseInElement } from "@vueuse/core";
const target = ref(null);
const { elementX, elementY, isOutside, elementHeight, elementWidth } =
  useMouseInElement(target);
const cardTransform = computed(() => {
  const MAX_ROTATION = 6;
  const rX = (
    MAX_ROTATION / 2 -
    (elementY.value / elementHeight.value) * MAX_ROTATION
  ).toFixed(2); // handles x-axis
  const rY = (
    (elementX.value / elementWidth.value) * MAX_ROTATION -
    MAX_ROTATION / 2
  ).toFixed(2); // handles y-axis
  return isOutside.value
    ? ""
    : `perspective(${elementWidth.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`;
});
</script>

<template>
  <div
    class="card mt-8"
    ref="target"
    :style="{
      transform: cardTransform,
      transition: 'transform 0.25s ease-out',
    }"
  >
    <section class="image">
      <img src="https://learnvue.co/img/matt-maribojoc.png" alt="" />
      <h2>@mattmaribojoc</h2>
    </section>
    <p>
      גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט ליבם סולגק.
      בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי
      מורגם בורק? לתיג ישבעס.
    </p>
  </div>
</template>

<style scoped>
.card {
  @apply container mx-auto w-full p-8 rounded shadow-2xl bg-gray-900 text-white;

  .image {
    @apply flex items-center;

    img {
      @apply w-8 h-8 mr-4 rounded;
    }
  }

  h2 {
    @apply text-2xl;
  }

  p {
    @apply mt-4;
  }
}
</style>
