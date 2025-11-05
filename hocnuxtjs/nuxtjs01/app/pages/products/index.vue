<template>
  <h1>Sản phẩm</h1>
  <ul>
    <li v-for="product in data.products" :key="product.id">
      {{ product.title }} - {{ product.price }} -
      <RouterLink href :to="`/products/${product.id}`">Chi tiết</RouterLink>
    </li>
  </ul>
</template>
<script setup>
const { data } = await useFetch("https://dummyjson.com/products");
</script>
