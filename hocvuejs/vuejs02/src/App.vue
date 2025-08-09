<template>
  <ThemeToggle />
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
import { provide, reactive, watch } from "vue";
import TodoAdd from "./components/TodoAdd.vue";
import TodoList from "./components/TodoList.vue";
import { onMounted, ref } from "vue";
import TodoSearch from "./components/TodoSearch.vue";
import ThemeToggle from "./components/ThemeToggle.vue";
const todoList = ref([]);
const isLoading = ref(true);
const error = ref(null);
const user = reactive({
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
  onChangeName: function () {
    this.name = "Hoàng An Unicode";
  },
});
provide("user", user);
const theme = ref(localStorage.getItem("themeMode") ?? "system");
provide("theme", theme);
watch(
  theme,
  () => {
    // console.log(theme.value);

    if (theme.value === "system") {
      const match = window.matchMedia("(prefers-color-scheme: dark)");
      if (match.matches) {
        //Theme tối
        document.querySelector("html").classList.add("dark");
      }
    }

    if (theme.value === "dark") {
      document.querySelector("html").classList.add("dark");
    }

    if (theme.value === "light") {
      document.querySelector("html").classList.remove("dark");
    }
  },
  {
    immediate: true,
  }
);
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
<style>
html.dark {
  background: #333;
  color: #efefef;
}
</style>
