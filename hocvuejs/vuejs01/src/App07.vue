<template>
  <!-- <h1>Lifecycle: {{ count }}</h1>
  <button @click="count++">+</button> -->
  <Counter v-if="isShow" />
  <hr />
  <button @click="isShow = !isShow">Toggle</button>

  <div>
    <audio :src="audio" controls ref="audioRef"></audio>
  </div>
  <button @click="handePlay">Play</button>
  <button @click="handlePause">Pause</button>
</template>
<script setup>
import { ref } from "vue";
import audio from "./audio/yeu-voi-vang.mp3";
import Counter from "./components/Counter.vue";
const isShow = ref(true);
const audioRef = ref(null);
const handePlay = () => {
  //audioRef.value --> DOM Element
  audioRef.value.play();
};
const handlePause = () => {
  audioRef.value.pause();
};

// import { onMounted, onUnmounted, onUpdated, ref } from "vue";
// const count = ref(0);
// console.log("Init");
// onMounted(() => {
//   console.log("Mounted");
// });
// onUpdated(() => {
//   console.log("Updated");
// });
// onUnmounted(() => {
//   console.log("Unmounted");
// });
</script>
