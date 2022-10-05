<template>
  <Swiper :slides-per-view="1">
    <SwiperSlide
      class="adiSlide"
      v-for="(slide, i) in slides"
      :key="`slide-${i}`"
    >
      <div class="image">
        <img :src="slide.image" alt="" />
      </div>
      <div aria-hidden="true" class="overlay" />
      <div class="textContainer">
        <h2 v-motion-roll-visible-right>{{ slide.title }}</h2>
        <p v-motion-slide-visible-bottom>
          {{ slide.body }}
        </p>
        <a href="#">{{ slide.button }}</a>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

const slides = [
  {
    image:
      "https://static.wixstatic.com/media/3af71d_6f38c595926748eb8e1471abf13cabf1~mv2.jpg/v1/fill/w_1768,h_669,al_c,q_85,enc_auto/3af71d_6f38c595926748eb8e1471abf13cabf1~mv2.jpg",
    title: "From Inspiration to Reality",
    body: `הסטודיו לעיצוב של עדי גייסט מתמחה בשיפוץ דירות, תכנון ועיצוב דירות תמ"א, דירות קבלן, עיצוב בתים פרטיים וחללים מסחריים, ונותן מענה תכנוני ועיצובי ללקוחות פרטיים ועסקיים, החל משלב התכנון והקונספט, וכלה בסטיילינג והלבשת החלל.`,
    button: "לפרויקט ברמא'ג",
  },
  {
    image:
      "https://static.wixstatic.com/media/3af71d_21c84171ff044d0489ecd21ef65fb1a5~mv2.jpg/v1/fit/w_1740,h_817,q_90/3af71d_21c84171ff044d0489ecd21ef65fb1a5~mv2.webp",
    title: "From Inspiration to Reality",
    body: `הסטודיו לעיצוב של עדי גייסט מתמחה בשיפוץ דירות, תכנון ועיצוב דירות תמ"א, דירות קבלן, עיצוב בתים פרטיים וחללים מסחריים, ונותן מענה תכנוני ועיצובי ללקוחות פרטיים ועסקיים, החל משלב התכנון והקונספט, וכלה בסטיילינג והלבשת החלל.`,
    button: "לפרויקט בחולון",
  },
  {
    image:
      "https://static.wixstatic.com/media/3af71d_b885a6dc35fe46a298467118ecb1a232~mv2.jpg/v1/fit/w_1600,h_817,q_90/3af71d_b885a6dc35fe46a298467118ecb1a232~mv2.webp",
    title: "From Inspiration to Reality",
    body: `הסטודיו לעיצוב של עדי גייסט מתמחה בשיפוץ דירות, תכנון ועיצוב דירות תמ"א, דירות קבלן, עיצוב בתים פרטיים וחללים מסחריים, ונותן מענה תכנוני ועיצובי ללקוחות פרטיים ועסקיים, החל משלב התכנון והקונספט, וכלה בסטיילינג והלבשת החלל.`,
    button: "לפרויקט נתניה",
  },
];
</script>

<style lang="scss" scoped>
.adiSlide {
  @apply relative bg-gray-800 py-32 px-6 sm:py-40 sm:px-12 lg:px-16;

  .overlay {
    @apply absolute inset-0 bg-gray-900 bg-opacity-50;
  }

  .image {
    @apply absolute inset-0 overflow-hidden;

    img {
      @apply h-full w-full object-cover object-center;
    }
  }

  .textContainer {
    @apply relative mx-auto flex max-w-3xl flex-col items-center text-center;

    h2 {
      @apply text-3xl font-bold tracking-tight text-white sm:text-4xl;
    }

    p {
      @apply mt-3 text-xl text-white;
    }

    a {
      @apply mt-8 block w-full rounded-md border border-transparent bg-white py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto;
    }
  }
}
</style>
