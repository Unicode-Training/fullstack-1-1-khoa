<template>
  <button
    :key="page"
    v-for="page in pageSize"
    :class="{
      active: page === currentPage,
    }"
    @click="handleChangePage(page)"
  >
    {{ page }}
  </button>
  <h3>
    {{ auth.message }}
  </h3>
</template>
<script setup>
defineProps(["pageSize", "currentPage"]);
const router = useRouter();
const auth = useAuth();
const handleChangePage = (page) => {
  router.push(`/demo?page=${page}`);
};
</script>
<style scoped>
.active {
  color: red;
}
</style>
