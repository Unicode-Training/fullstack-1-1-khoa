<template>
  <h1>Count: {{ counter.count }}</h1>
  <button @click="handleIncrement">+</button>
  <h2>Kết quả</h2>
  <ul>
    <li v-for="message in counter.messages">{{ message }}</li>
  </ul>
</template>
<script setup>
import { ref, reactive } from "vue";

// const counter = ref({
//   count: 0,
//   messages: [],
// });

const counter = reactive({
  count: 0,
  messages: [],
});
let i = 0;
const handleIncrement = () => {
  //   counter.value.count++;
  //   if (counter.value.count % 5 === 0) {
  //     counter.value.messages.push(`Đã thêm lần ${++i}`);
  //   }
  counter.count++;
  if (counter.count % 5 === 0) {
    counter.messages.push(`Đã thêm lần ${++i}`);
  }
};
</script>
