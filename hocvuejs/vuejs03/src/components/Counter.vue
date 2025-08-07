<template>
  <h1>Count: {{ count }}</h1>
  <button @click="handleDecrement">-</button>
  <button @click="handleIncrement">+</button>
</template>
<script setup>
import { storeToRefs } from "pinia";
import { useCounterStore } from "../store/counter";
const store = useCounterStore();
const { count } = storeToRefs(store);
const { increment, decrement } = store;
const handleIncrement = () => {
  increment();
};
const handleDecrement = () => {
  decrement();
};
</script>
