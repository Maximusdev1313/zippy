<script setup>
import { ref } from "vue";
import horizontalBorder from "../../components/client/horizontalBorder.vue";
const prods = ref([]);
const get = async () => {
  try {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => (prods.value = json));
  } catch (err) {
    console.log(err);
  }
};
get();
const isDarkMode = ref(false);

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value;
  const root = document.documentElement;
  if (isDarkMode.value) {
    root.classList.add("dark-theme");
  } else {
    root.classList.remove("dark-theme");
  }
};
</script>
<template>
  <div>
    <horizontalBorder />
    <!-- <button @click="toggleTheme" class="button" style="margin: 20px">
      Toggle Theme
    </button> -->
    <!-- <div v-for="prod in prods" :key="prod.id" class="card" style="margin: 10px">
      {{ prod.title }}
      <img :src="prod.image" alt="" width="100" height="100" />
      <button class="button">click</button>
    </div> -->
  </div>
</template>
