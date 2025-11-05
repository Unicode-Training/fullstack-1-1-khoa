<template>
  <h1>Upload Image</h1>
  <input type="file" @change="handleChoosenFile" />
  <button :disabled="status === 'pending'" @click="handleUpload">
    {{ status ? "Uploading..." : "Upload" }}
  </button>
  <p v-if="message">{{ message }}</p>
  <img width="300" v-if="imageUrl" :src="imageUrl" alt="" />
</template>
<script setup>
const file = ref();
const message = ref("");
const imageUrl = ref("");
const status = ref("");
const handleChoosenFile = (event) => {
  file.value = event.target.files[0];
};
const handleUpload = async () => {
  if (!file.value) {
    return (message.value = "Vui lòng chọn file");
  }
  const formData = new FormData();
  formData.append("image", file.value);
  try {
    status.value = "pending";
    const response = await $fetch(`/api/uploads/image`, {
      method: "POST",
      body: formData,
    });
    if (response.path) {
      imageUrl.value = response.path;
      message.value = "Upload thành công";
    }
  } catch (error) {
    if (error.message.includes("file type")) {
      message.value = "Định dạng không được phép";
    }
    if (error.message.includes("too large")) {
      message.value = "Dung lượng vượt quá";
    }
  } finally {
    status.value = "";
  }
};
</script>
