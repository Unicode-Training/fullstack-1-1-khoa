<template>
  <form @submit.prevent="handleAdd">
    <input type="text" placeholder="Todo..." v-model="title" />
    <button :disabled="isLoading">
      {{ isLoading ? "Loading..." : "Add" }}
    </button>
  </form>
</template>
<script setup>
import { ref } from "vue";
const emits = defineEmits();
const title = ref("");
const isLoading = ref(false);
const addTodo = async (todo) => {
  isLoading.value = true;
  const response = await fetch(`http://localhost:3000/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  if (response.ok) {
    //Thêm thành công
    emits("add-todo", todo);
    title.value = "";
  }
  isLoading.value = false;
};
const handleAdd = () => {
  if (!title.value) {
    return alert("Vui lý nhập dữ liệu");
  }
  const todo = { title: title.value };
  addTodo(todo);
};
</script>
