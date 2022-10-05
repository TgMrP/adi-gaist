<template>
  <section id="slider">
    <HomePageSlider />
  </section>
  <CardMove />
  <section id="about-adi">
    <AboutAdi />
  </section>
</template>

<script setup>
import HomePageSlider from "~~/components/slider/HomePageSlider.vue";
import AboutAdi from "../components/homepage/AboutAdi.vue";
import CardMove from "~~/components/examples/cardMove.vue";
</script>
