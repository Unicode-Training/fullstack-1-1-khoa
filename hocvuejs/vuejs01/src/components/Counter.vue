<template>
  <h1>Count: {{ count }}</h1>
  <button @click="count--">-</button>
  <button @click="handleIncrement">+</button>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from "vue";
const count = ref(0);
const handleIncrement = () => {
  count.value++;
};
onMounted(() => {
  console.log("Mounted");
});
onUnmounted(() => {
  console.log("Unmounted");
  //Cleanup
  // - Xóa event
  // - Xóa timer
  // - Hủy biến, storage,...
});
</script>
