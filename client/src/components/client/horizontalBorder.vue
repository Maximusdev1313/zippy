<script setup></script>

<template>
  <div class="horizontal-border">
    <div class="container">
      <div class="slogan">Save your money, change your life</div>
      <ul>
        <li class="click">
          <lord-icon
            src="https://cdn.lordicon.com/wmlleaaf.json"
            trigger="hover"
            colors="primary:#848484"
            style="width: 20px; height: 20px"
          >
          </lord-icon>
          <div class="subtitle">Buyurtmani kuzatish</div>
        </li>
        <li class="click">
          <lord-icon
            src="https://cdn.lordicon.com/xljvqlng.json"
            trigger="hover"
            colors="primary:#848484"
            style="width: 20px; height: 20px"
          >
          </lord-icon>
          Xaridlar
        </li>
        <li class="click">
          <lord-icon
            src="https://cdn.lordicon.com/hrjifpbq.json"
            trigger="hover"
            colors="primary:#848484"
            style="width: 20px; height: 20px"
          >
          </lord-icon>
          Account
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.horizontal-border {
  background-color: var(--color-background-soft);
  width: 100%;
  height: 40px;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--color-border);
  font-size: smaller;
}
ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
}
li {
  padding: 5px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-left: 1px solid var(--color-border);
  cursor: pointer;
}
li:hover {
  background-color: var(--color-background-soft);
}
</style>
