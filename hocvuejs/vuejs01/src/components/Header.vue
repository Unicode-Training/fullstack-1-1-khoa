<template>
  <h2>Header: {{ ahihi }}</h2>
  <ul>
    <li v-for="menu in menus">{{ menu }}</li>
  </ul>
  <button @click="handleClick">Click me</button>
  <!-- <button @click="$emit('clickMe', 'Clicked me')">Click me</button> -->
</template>
<script setup>
const { title: ahihi, menus } = defineProps(["title", "menus"]);
// defineEmits();
const emits = defineEmits();
const handleClick = () => {
  emits("clickMe", "Clicked me");
};
</script>
