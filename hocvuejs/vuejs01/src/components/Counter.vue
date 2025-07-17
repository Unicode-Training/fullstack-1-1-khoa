<template>
  <h1>Count: {{ count }}</h1>
  <button @click="count--">-</button>
  <button @click="handleIncrement">+</button>
</template>
<script setup>
import { ref } from "vue";
const count = ref(0);
const handleIncrement = () => {
  count.value++;
};
</script>
