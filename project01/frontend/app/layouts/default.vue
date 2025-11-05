<template>
  <Header />
  <main>
    <slot></slot>
  </main>
  <footer>Footer</footer>
</template>
<script setup>
import "primeicons/primeicons.css";
import Header from "~/components/header.vue";
</script>
