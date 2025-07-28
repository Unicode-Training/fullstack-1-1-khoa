<template>
  <button @click="isOpenModal = !isOpenModal">Thêm mới</button>

  <h2>Danh sách bài viết</h2>
  <template v-for="post in posts">
    <div class="post-item">
      <h3>{{ post.title }}</h3>
      <p>{{ post.content }}</p>
    </div>
  </template>

  <Modal
    v-if="isOpenModal"
    @close-modal="handleClose"
    @submit="handleSubmit"
    @form-change="handleFormChange"
    :init-form="initForm"
  />
</template>

<script setup>
import { ref, watch } from "vue";
import Modal from "./components/Modals/Modal.vue";
const isOpenModal = ref(false);
const posts = ref([]);
const initForm = ref({});

const handleClose = () => {
  isOpenModal.value = false;
};
const handleSubmit = (data) => {
  posts.value.push(data);
};
const handleFormChange = (data) => {
  initForm.value = data;
};
watch(
  posts,
  () => {
    isOpenModal.value = false;
  },
  {
    deep: true,
  }
);
</script>
