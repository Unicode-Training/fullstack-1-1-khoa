<template>
  <input type="text" v-model="name" />
  <h1>Count: {{ count }}</h1>
  <button @click="handleIncrement">+</button>
  <h2>{{ messages }}</h2>
</template>
<script setup>
import { ref, computed, watch } from "vue";

const count = ref(0);
const name = ref("");
const messages = computed(() => {
  console.log(count.value);
  if (count.value < 10) {
    return "Nhỏ";
  } else if (count.value < 20) {
    return "Trung bình";
  } else {
    return "Lớn";
  }
});
const handleIncrement = () => {
  count.value++;
};
watch(messages, (current) => {
  console.log(current);
});
</script>
