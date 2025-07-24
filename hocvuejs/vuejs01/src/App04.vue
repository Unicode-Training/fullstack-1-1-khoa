<template>
  <h1>Watch</h1>
  <form @submit.prevent="handleAdd">
    <input type="text" v-model="todo" placeholder="Todo..." />
    <button>Add</button>
  </form>
  <ul>
    <li v-for="todo in todoList">{{ todo }}</li>
  </ul>
  <button @click="handleReset">Reset</button>
</template>
<script setup>
import { ref, watch, watchEffect } from "vue";
const todo = ref("");
const todoList = ref([]);
const count = ref(0);
const handleAdd = () => {
  todoList.value.push(todo.value);
  todo.value = "";
  count.value++;
};
const handleReset = () => {
  todoList.value = [];
  count.value = 0;
};
// watch(
//   todoList,
//   (current) => {
//     console.log("Theo dõi sự thay đổi todoList", current);
//   },
//   {
//     deep: true, //theo dõi sâu
//     immediate: true,
//   }
// );
// watch(
//   count,
//   (current, old) => {
//     console.log("Theo dõi sự thay đổi của count", current, old);
//   },
//   {
//     immediate: true,
//   }
// );

watchEffect(() => {
  //   console.log(count.value);
  //   console.log(todoList.value.length);
});
</script>
