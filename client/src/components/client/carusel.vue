<template>
  <div class="carousel">
    <div class="carousel-inner container">
      <section
        v-for="(item, index) in items"
        :key="index"
        :class="['item', { active: index === activeIndex }]"
      >
        <div class="content">
          <h2 class="subtitle">{{ item.subText }}</h2>
          <h1 class="title">{{ item.mainText }}</h1>
          <button type="button" class="button button-yellow click">
            start Buying
          </button>
        </div>

        <img :src="item.image" alt="" class="img" />
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const items = ref([
  {
    mainText: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    subText: "SHOP TO GET WHAT YOU LOVE",
    colorClass: "red",
    image:
      "https://www.pngall.com/wp-content/uploads/13/Samsung-Galaxy-PNG-Photos.png",
  },
  {
    mainText: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    subText: "SHOP TO GET WHAT YOU LOVE",
    colorClass: "red",
    image:
      "https://images.samsung.com/is/image/samsung/p6pim/bd/sm-m336bzbrbkd/gallery/bd-galaxy-m33-5g-8128-gb-sm-m336bzbrbkd-thumb-532510284?$344_344_PNG$",
  },
  {
    mainText: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    subText: "SHOP TO GET WHAT YOU LOVE",
    colorClass: "red",
    image:
      "https://www.pngall.com/wp-content/uploads/13/Samsung-Galaxy-PNG-Photos.png",
  },
  {
    mainText: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    subText: "SHOP TO GET WHAT YOU LOVE",
    colorClass: "red",
    image:
      "https://www.pngall.com/wp-content/uploads/13/Samsung-Galaxy-PNG-Photos.png",
  },
  {
    mainText: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    subText: "SHOP TO GET WHAT YOU LOVE",
    colorClass: "red",
    image:
      "https://www.pngall.com/wp-content/uploads/13/Samsung-Galaxy-PNG-Photos.png",
  },
]);

const activeIndex = ref(0);

const setActive = (index) => {
  activeIndex.value = index;
};

const prev = () => {
  activeIndex.value =
    activeIndex.value > 0 ? activeIndex.value - 1 : items.value.length - 1;
};

const next = () => {
  activeIndex.value =
    activeIndex.value < items.value.length - 1 ? activeIndex.value + 1 : 0;
};

onMounted(() => {
  setInterval(() => {
    next();
  }, 5000); // 10 seconds
});
</script>

<style scoped>
.carousel {
  width: 100%;
  height: 500px;
  background-image: url("https://www.shutterstock.com/image-photo/minimal-abstract-white-background-smooth-600nw-2266712555.jpg");
  background-size: cover;
  display: flex;
  align-items: center;
}
.carousel-inner {
  display: flex;
  overflow: hidden;
}

.item {
  min-width: 100%;
  transition: transform 0.5s ease;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.item.active {
  transform: translateX(0);
}

.item:not(.active) {
  display: none;
}
.title {
  font-size: 40px;
  font-weight: normal;
  color: var(--vt-c-indigo);
}
.subtitle {
  color: #34bcec;
  font-weight: bold;
}
button {
  margin: 10px;
}
.content {
  width: 50%;
}
.img {
  max-width: 50%;
}
</style>
