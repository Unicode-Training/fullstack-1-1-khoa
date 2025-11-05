<template>
  <NuxtPage />
</template>
<script setup>
definePageMeta({
  middleware: "auth",
  layout: "product",
});
</script>
