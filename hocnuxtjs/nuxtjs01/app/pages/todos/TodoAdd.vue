<template>
  <form @submit.prevent="handleAdd">
    <input type="text" v-model="title" placeholder="Nhập tiêu đề..." />
    <button>Thêm</button>
  </form>
  <p v-if="msg" style="color: red">{{ msg }}</p>
</template>
<script setup>
const title = ref("");
const msg = ref("");
const refreshTodoList = inject("refreshTodoList");
const config = useRuntimeConfig();
const handleAdd = async () => {
  try {
    await $fetch(`${config.public.SERVER_API}/todos`, {
      method: "POST",
      body: {
        title: title.value,
        completed: false,
      },
    });
    title.value = "";
    refreshTodoList();
  } catch {
    msg.value = "Không thêm được";
  }
};
</script>
