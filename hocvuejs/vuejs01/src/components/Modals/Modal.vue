<template>
  <div class="modal">
    <div @click="handleClose" class="modal-close">&times;</div>
    <div class="modal-dialog">
      <h3>Modal Title</h3>
      <div class="modal-body">
        <form @submit.prevent="handleSubmit">
          <div>
            <label>Tiêu đề</label> <br />
            <input type="text" v-model="form.title" placeholder="Tiêu đề..." />
          </div>
          <div>
            <label>Nội dung</label> <br />
            <textarea
              v-model="form.content"
              placeholder="Nội dung..."
            ></textarea>
          </div>
          <button>Lưu</button>
        </form>
      </div>
    </div>
    <div @click="handleClose" class="modal-overlay"></div>
  </div>
</template>
<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.modal .modal-dialog {
  max-width: 80%;
  margin: 0 auto;
  background: #fff;
  position: fixed;
  top: 5%;
  left: 0;
  right: 0;
  z-index: 999;
  border-radius: 10px;
  border: 1px solid #ddd;
  padding: 10px;
}
.modal .modal-overlay {
  position: fixed;
  inset: 0;
  background: #00000071;
  z-index: 99;
}
.modal .modal-close {
  position: fixed;
  top: 0;
  left: 0;
  width: 30px;
  height: 30px;
  z-index: 999;
  background: rgba(128, 128, 128, 0.576);
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
  font-size: 1.5rem;
}
</style>
<script setup>
import { ref, watch } from "vue";

const emits = defineEmits();
const { initForm } = defineProps(["initForm"]);

const form = ref({});
const handleClose = () => {
  emits("close-modal");
  emits("form-change", form.value);
};
const handleSubmit = () => {
  emits("submit", form.value);
};
watch(
  () => initForm,
  (data) => {
    form.value = data;
  },
  {
    deep: true,
    immediate: true,
  }
);
document.addEventListener("keyup", (e) => {
  if (e.key === "Escape") {
    handleClose();
  }
});
</script>
