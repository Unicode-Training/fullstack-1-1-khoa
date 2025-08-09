<template>
  <div class="theme-btn">
    <button
      :class="{ active: theme === 'light' }"
      @click="handleChangeTheme('light')"
    >
      Light
    </button>
    <button
      :class="{ active: theme === 'dark' }"
      @click="handleChangeTheme('dark')"
    >
      Dark
    </button>
    <button
      :class="{ active: theme === 'system' }"
      @click="handleChangeTheme('system')"
    >
      System
    </button>
  </div>
</template>
<script setup>
import { inject } from "vue";
const theme = inject("theme");
const handleChangeTheme = (value) => {
  theme.value = value;
  localStorage.setItem("themeMode", value);
};
</script>
<style scoped>
.theme-btn .active {
  color: red;
}
</style>
