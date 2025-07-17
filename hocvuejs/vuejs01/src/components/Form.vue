<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label for="">Email</label>
      <input type="email" v-model="form.email" placeholder="Email..." />
      <span v-if="error.email" class="error">{{ error.email }}</span>
    </div>
    <div>
      <label for="">Password</label>
      <input
        type="password"
        v-model="form.password"
        placeholder="Password..."
      />
      <span v-if="error.password" class="error">{{ error.password }}</span>
    </div>
    <button>Submit</button>
  </form>
  <template v-if="users.length">
    <h2>Danh sách người dùng</h2>
    <ul>
      <li v-for="user in users">
        {{ user.email }} - {{ user.password }} <button>&times;</button>
      </li>
    </ul>
  </template>
</template>
<style scoped>
.error {
  color: red;
  font-size: 11px;
}
</style>
<script setup>
import { ref } from "vue";
const form = ref({
  email: "",
  password: "",
});
const error = ref({});
const users = ref([]);
const handleSubmit = () => {
  const { email, password } = form.value;
  error.value = {};
  if (!email) {
    error.value.email = "Email is required";
  }
  if (!password) {
    error.value.password = "Password is required";
  }

  if (!Object.keys(error.value).length) {
    //Không lỗi
    users.value.push({
      email,
      password,
    });
    //reset form
    form.value = {
      email: "",
      password: "",
    };
  }
};
</script>
