<template>
  <h1>Login</h1>
  <form @submit.prevent="handleSubmit">
    <div>
      <input type="email" placeholder="Email" v-model="email" required />
    </div>
    <div>
      <input
        type="password"
        placeholder="Password"
        v-model="password"
        required
      />
    </div>
    <button>{{ isLoading ? "Loading..." : "Login" }}</button>
    <p v-if="message" style="color: red">{{ message }}</p>
  </form>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const email = ref("");
const password = ref("");
const message = ref("");
const isLoading = ref(false);
const router = useRouter();
const handleSubmit = async () => {
  isLoading.value = true;
  const response = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email.value,
      password: password.value,
    }),
  });
  isLoading.value = false;
  if (!response.ok) {
    message.value = "Invalid email or password";
    return;
  }
  const data = await response.json();
  localStorage.setItem("access_token", data.access_token);
  localStorage.setItem("refresh_token", data.refresh_token);
  router.push({ name: "home" });
};
</script>
