<template>
  <input type="search" placeholder="Từ khóa..." @keyup="handleSearch" />
</template>
<script setup>
const router = useRouter();
const handleSearch = (e) => {
  router.push(`/todos?search=${e.target.value}`);
};
</script>
