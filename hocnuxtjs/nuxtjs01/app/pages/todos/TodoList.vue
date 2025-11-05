<template>
  <ul>
    <li v-for="todo in todoList" :key="todo.id">
      <input type="checkbox" /> {{ todo.title }}
      <button @click="handleDelete(todo.id)">&times;</button>
    </li>
  </ul>
</template>
<script setup>
defineProps(["todoList"]);
const message = ref("");
const todoList = inject("todoList");
const refreshTodoList = inject("refreshTodoList");
const config = useRuntimeConfig();
const handleDelete = async (id) => {
  try {
    await $fetch(`${config.public.SERVER_API}/todos/${id}`, {
      method: "DELETE",
    });
    refreshTodoList();
  } catch {
    message.value = "Không xóa được";
  }
};
</script>
