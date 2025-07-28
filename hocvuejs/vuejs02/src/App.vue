<template>
  <h1>CALL API</h1>
  <TodoSearch @search="handleSearch" />
  <TodoList
    :isLoading="isLoading"
    :error="error"
    :todoList="todoList"
    @remove-todo="getTodoList"
    :key="todoList.length"
  />
  <TodoAdd @add-todo="getTodoList" />
</template>
<script setup>
import TodoAdd from "./components/TodoAdd.vue";
import TodoList from "./components/TodoList.vue";
import { onMounted, ref } from "vue";
import TodoSearch from "./components/TodoSearch.vue";
const todoList = ref([]);
const isLoading = ref(true);
const error = ref(null);
const handleSearch = (value) => {
  getTodoList(value);
};
const getTodoList = async (keyword = "") => {
  try {
    let url = `http://localhost:3000/todos`;
    if (keyword) {
      url = `http://localhost:3000/todos?q=${keyword}`;
    }
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error");
    }
    const data = await response.json();
    todoList.value = data;
  } catch {
    error.value = "Đã có lỗi xảy ra";
  } finally {
    isLoading.value = false;
  }
};
onMounted(getTodoList);

//Provide, Inject
//Pinia
//Router
</script>
