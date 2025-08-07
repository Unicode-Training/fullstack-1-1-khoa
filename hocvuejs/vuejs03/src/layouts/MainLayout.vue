<template>
  <header>
    <h2>Header</h2>
    <ul class="menu">
      <li>
        <RouterLink :to="{ name: 'home' }">Home</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'about' }">About</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'products' }">Products</RouterLink>
      </li>
      <template v-if="store.isLoading">
        <li>Loading...</li>
      </template>
      <template v-else>
        <template v-if="store.isAuthenticated">
          <li>Chào bạn: {{ store.user.name }}</li>
          <li><a href="#" @click.prevent="handleLogout">Đăng xuất</a></li>
        </template>

        <li v-else>
          <RouterLink :to="{ name: 'login' }">Login</RouterLink>
        </li>
      </template>
    </ul>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <h2>Footer</h2>
    <slot name="footer"></slot>
  </footer>
</template>
<script setup>
import { useRouter } from "vue-router";
import { useAuthStore } from "../store/auth";
const store = useAuthStore();
const router = useRouter();

const handleLogout = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  router.push({ name: "login" });
};
</script>
<style scoped>
.menu {
  display: flex;
  list-style: none;
  gap: 10px;
}
</style>
