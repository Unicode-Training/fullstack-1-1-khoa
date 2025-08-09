<template>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eum nulla
    explicabo vitae. Fugiat itaque vero, quasi a distinctio amet dolor sint,
    suscipit architecto inventore vel ipsam provident odit eveniet.
  </p>
  <h3>{{ user.name }} <button @click="user.onChangeName">Change</button></h3>
  <h3>{{ user.email }} <button>Change</button></h3>
</template>
<script setup>
import { inject } from "vue";
const user = inject("user");
</script>
