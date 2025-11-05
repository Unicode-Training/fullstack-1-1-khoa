<template>
  <h1>About</h1>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam facilis
    blanditiis quaerat quis voluptatum. Sed minus velit illum nihil eveniet
    sequi porro harum iure qui in enim aliquam, est repellat.
  </p>
  <ul>
    <li v-for="todo in todoList">{{ todo.title }}</li>
  </ul>
</template>
<script setup>
import { watch } from "vue";
import { useScrollTop, useTodoList } from "../utils/utils";
const todoList = useTodoList();
const isScroll = useScrollTop();
watch(isScroll, () => {
  if (isScroll.value) {
    document.body.style.backgroundColor = "yellow";
  } else {
    document.body.style.backgroundColor = "white";
  }
});
</script>
