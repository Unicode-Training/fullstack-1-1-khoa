<template>
  <h1>{{ data.title }}</h1>
  <p>{{ data.price }} - {{ data.description }}</p>
  <button @click="handleClick">Mua ngay</button>
  <p v-if="msg">{{ msg }}</p>
</template>
<script setup>
const route = useRoute();
const msg = ref("");
const id = route.params.id;
const { data } = await useFetch(`https://dummyjson.com/products/${id}`);

useSeoMeta({
  title: data.value.title,
  description: data.value.description.slice(0, 150),
});

const handleClick = () => {
  msg.value = "Thanh toán thành công";
};
</script>
