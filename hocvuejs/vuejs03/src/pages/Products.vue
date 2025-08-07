<template>
  <h1>Products</h1>
  <input type="search" v-model="search" placeholder="Search Products..." />
  <h3 v-if="$route.query.search">
    Bạn đang tìm kiếm: {{ $route.query.search }}
  </h3>
  <ul>
    <li v-for="product in products">
      <h3>{{ product.title }}</h3>
      <RouterLink
        :to="{ name: 'product-detail', params: { productId: product.id } }"
        >Chi tiết</RouterLink
      >
    </li>
  </ul>
</template>
<script setup>
import { ref, onMounted, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
const search = ref("");
const router = useRouter();
const route = useRoute();
const products = ref([]);
watch(search, () => {
  router.push({ query: { search: search.value } });
  getProducts(search.value);
});

const getProducts = async (search = "") => {
  let url = "https://dummyjson.com/products";
  if (search) {
    url = "https://dummyjson.com/products/search?q=" + search;
  }
  const response = await fetch(url);
  const data = await response.json();
  products.value = data.products;
};
onMounted(() => {
  getProducts(route.query.search || "");
  if (route.query.search) {
    search.value = route.query.search;
  }
});
</script>
