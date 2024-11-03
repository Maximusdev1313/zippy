<script setup>
import { RouterLink, RouterView } from "vue-router";
import horizontalBorder from "./components/client/horizontalBorder.vue";
import Header from "./components/client/header.vue";
</script>

<template>
  <div>
    <header>
      <horizontalBorder />

      <div class="wrapper">
        <Header />
      </div>
    </header>

    <RouterView class="view" />
  </div>
</template>

<style scoped>
header {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 999;
}
</style>
