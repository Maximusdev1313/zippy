<script setup>
import { ref } from "vue";
const prods = ref([]);
/**
 * Fetches products from the Fake Store API and updates the prods ref.
 *
 * @async
 * @function get
 */
const get = async () => {
  try {
    /**
     * Fetches data from the API and parses it as JSON.
     *
     * @see https://fakestoreapi.com/products
     */
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => (prods.value = json));
  } catch (err) {
    /**
     * Logs any errors that occur during the fetch operation.
     *
     * @param {Error} err
     */
    console.log(err);
  }
};
get();

/**
 * A ref to track whether the app is in dark mode.
 *
 * @type {Ref<boolean>}
 */
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
  <div>
    <button @click="toggleTheme" class="button click" style="margin: 20px">
      Toggle Theme
    </button>
    <!-- <div v-for="prod in prods" :key="prod.id" class="card" style="margin: 10px">
      {{ prod.title }}
      <img :src="prod.image" alt="" width="100" height="100" />
      <button class="button">click</button>
    </div> -->
  </div>
</template>
