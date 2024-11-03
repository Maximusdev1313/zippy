<script setup>
import { useClientStore } from "@/stores/clientStore";
const clientStore = useClientStore();
</script>

<template>
  <div class="header">
    <div class="container">
      <div class="wrapper">
        <div class="logo">
          <span class="logo-z">Z</span><span>ippy</span
          ><span class="dot">.</span>
        </div>
        <div class="main">
          <div class="burger">
            <lord-icon
              src="https://cdn.lordicon.com/jectmwqf.json"
              trigger="hover"
              stroke="bold"
              colors="primary:#848484,secondary:#eee966"
              style="width: 25px; height: 25px"
            >
            </lord-icon>
          </div>
          <div class="search">
            <input type="text" name="search" id="" placeholder="Qidirish" />
            <button type="button" class="search-button click">
              <lord-icon
                src="https://cdn.lordicon.com/wjyqkiew.json"
                trigger="click"
                stroke="bold"
                colors="primary:#242424,secondary:#eee966"
                style="width: 20px; height: 20px; padding: 0"
              >
              </lord-icon>
            </button>
          </div>
        </div>
        <nav>
          <ul>
            <li>
              <div class="card__wishlist">
                <lord-icon
                  src="https://cdn.lordicon.com/aydxrkfl.json"
                  trigger="hover"
                  colors="primary:#848484,secondary:#34bcec"
                  style="width: 25px; height: 25px"
                >
                </lord-icon>
              </div>
            </li>
            <li
              style="
                display: flex;
                justify-content: center;
                align-items: center;
              "
            >
              <div class="icon-block">
                <div class="quantity">35</div>
                <lord-icon
                  src="https://cdn.lordicon.com/ggirntso.json"
                  trigger="hover"
                  stroke="bold"
                  colors="primary:#b4b4b4,secondary:#545454"
                  style="width: 40px; height: 40px; position: absolute"
                >
                </lord-icon>
              </div>
              {{ clientStore.totalAmount.toFixed(2) }} so'm
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>
<style scoped>
.header {
  width: 100%;
  height: 90px;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: larger;
  background-color: var(--color-background-soft);
}
.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.main {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  font-size: 50px;
  font-weight: bolder;
}
.logo-z {
  font-family: "Dancing Script", cursive;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
}
.dot {
  color: brown;
}
.burger {
  margin: 0 20px;

  display: flex;
  align-items: center;
  cursor: pointer;
}
.search {
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
input {
  width: 400px;
  height: 100%;
  border: none;
  border: 1px var(--vt-c-yellow) solid;
  outline-color: var(--vt-c-yellow);
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  background-color: transparent;
}
/* input[type="text"]:focus {
  border: 1px solid var(--vt-c-yellow);
} */
.search-button {
  height: 100%;
  background-color: var(--vt-c-yellow);
  border: none;
  padding: 0 20px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
}

ul {
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
li {
  margin: 0 10px;
  padding: 5px 10px;
}
.icon-block {
  position: relative;
  width: 40px !important;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
}
.quantity {
  background-color: rgb(251, 255, 0);
  color: black;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  top: 0;
  left: 0;
}
</style>
