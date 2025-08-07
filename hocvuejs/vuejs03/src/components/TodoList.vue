<template>
  <h1>TodoList</h1>
  <h2 v-if="store.isLoading">Loading...</h2>
  <h2 v-else-if="store.errors">{{ store.errors }}</h2>
  <ul v-else>
    <li v-for="todo in store.todoList">{{ todo.title }}</li>
  </ul>
</template>
<script setup>
import { useTodoListStore } from "../store/todo-list";
import { onMounted } from "vue";
const store = useTodoListStore();
onMounted(() => {
  store.getTodoList();
});
</script>
