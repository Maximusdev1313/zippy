<script setup>
import { onBeforeMount, ref } from "vue";
import Carusel from "../../components/client/carusel.vue";
import simpleCard from "@/components/client/simpleCard.vue";
import { useClientStore } from "../../stores/clientStore";

const clientStore = useClientStore();
onBeforeMount(() => {
  clientStore.getProducts();
});
const isDarkMode = ref(false);

/**
 * Toggles the app's theme between light and dark modes.
 *
 * @function toggleTheme
 */
const toggleTheme = () => {
  /**
   * Toggles the isDarkMode ref.
   */
  isDarkMode.value = !isDarkMode.value;

  /**
   * Gets the root HTML element.
   *
   * @type {HTMLElement}
   */
  const root = document.documentElement;

  /**
   * Adds or removes the dark-theme class from the root element based on the isDarkMode ref.
   */
  if (isDarkMode.value) {
    root.classList.add("dark-theme");
  } else {
    root.classList.remove("dark-theme");
  }
};
</script>
<template>
  <div class="wrapper">
    <Carusel style="margin-top: 130px" />
    <div class="container">
      <div class="title">Products</div>
      <simpleCard :products="clientStore.products" />
    </div>
    <button
      @click="toggleTheme"
      class="button button-yellow click"
      style="margin: 20px"
    >
      Toggle Theme
    </button>
    <!-- <div v-for="prod in prods" :key="prod.id" class="card" style="margin: 10px">
      {{ prod.title }}
      <img :src="prod.image" alt="" width="100" height="100" />
      <button class="button">click</button>
    </div> -->
  </div>
</template>
<style scoped></style>
