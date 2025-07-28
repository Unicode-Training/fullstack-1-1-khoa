<template>
  <h3 v-if="isLoading">Loading...</h3>
  <h3 v-else-if="error">{{ error }}</h3>
  <ul v-else>
    <li v-for="todo in todoList">
      {{ todo.title }} <button @click="handleRemove(todo.id)">&times;</button>
    </li>
  </ul>
</template>
<script setup>
defineProps(["todoList", "isLoading", "error"]);
const emits = defineEmits();
const handleRemove = async (id) => {
  const response = await fetch(`http://localhost:3000/todos/${id}`, {
    method: "DELETE",
  });
  if (response.ok) {
    emits("remove-todo", id);
  }
};
</script>
