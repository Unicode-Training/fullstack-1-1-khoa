<template>
  <input type="search" placeholder="Từ khóa..." @keyup="handleSearch" />
</template>
<script setup>
const emits = defineEmits();
const debounce = (func, timeout = 500) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};
const handleSearch = debounce((e) => {
  const value = e.target.value;
  emits("search", value);
});
</script>
