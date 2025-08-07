<template>
  <h2 v-if="isLoading">Loading...</h2>
  <template v-else>
    <h1>{{ product.title }}</h1>
    <button @click="$router.push({ name: 'products' })">Back</button>
    <div>
      <img lazy :src="product.images?.[0]" alt="" style="width: 300px" />
    </div>
    <div>
      <img
        lazy
        v-for="i in product.images.length - 1"
        :src="product.images?.[i]"
        alt=""
        style="width: 100px; height: 100px; object-fit: cover"
      />
    </div>
    <p>
      {{ product.description }}
    </p>
    <p>Price: {{ product.price }}</p>
  </template>
</template>
<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
const { params } = useRoute();
const product = ref({});
const isLoading = ref(true);
const productId = params.productId;
const getProduct = async () => {
  const response = await fetch(`https://dummyjson.com/products/${productId}`);
  const data = await response.json();
  product.value = data;
  isLoading.value = false;
};
onMounted(getProduct);
</script>
