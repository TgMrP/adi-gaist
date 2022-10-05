<template>
  <div class="overflow-x-hidden">
    <NavbarSite />
   

    <slot />
  </div>
</template>

<script setup>
import Navbar from "~~/components/navbar/NavbarSite.vue";

</script>

<style lang="scss">
html {
  direction: rtl;
}
</style>
