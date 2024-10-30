<script setup>
import { ref, toRefs } from "vue";

import { useClientStore } from "../../stores/clientStore";

const clientStore = useClientStore();
const props = defineProps({
  products: {
    type: Object,
    required: false,
  },
});
const { products } = toRefs(props);
</script>

<template>
  <div class="wrapper">
    <div class="card" v-for="product in products" :key="product.id">
      <div class="container">
        <div class="flex">
          <div class="card__category">
            {{ product.category }}
          </div>
          <div class="card__wishlist">
            <lord-icon
              src="https://cdn.lordicon.com/aydxrkfl.json"
              trigger="hover"
              colors="primary:#848484,secondary:#34bcec"
              style="width: 25px; height: 25px"
            >
            </lord-icon>
          </div>
        </div>
        <div class="card__title">
          {{ product.title }}
        </div>
        <div class="card__image">
          <img :src="product.image" alt="" />
        </div>
        <div class="card__price">
          <div class="manufacturer-name">Artel</div>
          <div class="card__discount-persent">Chegirma: 10%</div>
          <div class="card__actual-price">{{ product.price }} so'm</div>
        </div>
        <div
          class="card__buy-button button click button-yellow"
          @click="clientStore.addProductToCart(product)"
        >
          <lord-icon
            src="https://cdn.lordicon.com/jprtoagx.json"
            trigger="hover"
            state="hover-oscillate-full"
            colors="primary:#848484,secondary:#34bcec"
            style="width: 30px; height: 30px"
          >
          </lord-icon>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.wrapper {
  width: 100%;
  display: flex;
  /* justify-content: space-around; */
  align-items: center;
  flex-wrap: wrap;
  column-gap: 10px;
}
.card {
  width: 250px;
  height: auto;
  background-color: var(--color-background-soft);
  margin: 15px 5px;
  text-transform: capitalize;
  border-radius: 15px;
  border-right: 1px solid var(--color-border);
  border-top: 1px solid var(--color-border);
}
.card:hover {
  box-shadow: 0.1px 1px 15px 0.1px rgba(163, 159, 159, 0.73);
  -webkit-box-shadow: 0.1px 1px 15px 0.1px rgba(163, 159, 159, 0.73);
  -moz-box-shadow: 0.1px 1px 15px 0.1px rgba(163, 159, 159, 0.73);
  transition: 0.3s;
}
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.container > div {
  margin: 10px 0;
}
.card__image {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  width: 200px;
  margin: 10px 0;
  height: 200px;
}

.card__category {
  color: var(--color-text);
  font-size: small;
}
.card__title {
  width: 230px;
  font-size: larger;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: var(--color-text-blue);
}
.card__price {
  font-size: larger;
}
.card__buy-button {
  width: 100%;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
}
.manufacturer-name {
  color: var(--color-text);
  font-size: small;
}
</style>
