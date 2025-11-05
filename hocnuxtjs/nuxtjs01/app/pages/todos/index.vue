<template>
  <h1>Todo List App</h1>
  <h2 v-if="pending">Loading...</h2>
  <h2 v-else-if="error">Đã có lỗi xảy ra</h2>
  <TodoSearch />
  <TodoList />
  <TodoAdd />
</template>
<script setup>
import TodoAdd from "./TodoAdd.vue";
import TodoList from "./TodoList.vue";
import TodoSearch from "./TodoSearch.vue";
const config = useRuntimeConfig();
const route = useRoute();
const keyword = ref(route.query.search);
const debounce = (callback, timeout = 500) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback(...args);
    }, timeout);
  };
};
watch(
  () => route.query.search,
  debounce((value) => {
    keyword.value = value;
  })
);
const {
  data: todoList,
  refresh,
  pending,
  error,
} = await useFetch(`${config.public.SERVER_API}/todos`, {
  query: {
    q: keyword,
  },
});

provide("todoList", todoList);
provide("refreshTodoList", refresh);
</script>
