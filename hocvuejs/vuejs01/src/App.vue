<template>
  <div class="main">
    <div class="sidebar" ref="sidebarRef">
      <h3>Sidebar</h3>
      <div class="line" @mousedown="handleMouseDown"></div>
    </div>
    <div class="content">
      <h2>Content</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
        accusamus, vitae perferendis repellat id sit quod quas voluptate cum
        maxime consectetur voluptates. Atque facilis quod soluta non,
        voluptatibus modi quo.
      </p>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const sidebarRef = ref(null);
const handleMouseDown = () => {
  document.addEventListener("mousemove", handleMouseMove);
  document.addEventListener("mouseup", handleMouseUp);
};
const handleMouseMove = (e) => {
  const clientX = e.clientX;
  sidebarRef.value.style.width = clientX + "px";
};
const handleMouseUp = () => {
  //Xóa event mousemove
  document.removeEventListener("mousemove", handleMouseMove);
  document.removeEventListener("mouseup", handleMouseUp);
};
</script>
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body,
html,
#app {
  height: 100%;
}

.main {
  display: flex;
  height: 100%;
}
.sidebar {
  width: 250px;
  height: 100%;
  background: #efefef;
  position: relative;
}
.line {
  position: absolute;
  width: 4px;
  right: 0;
  top: 0;
  height: 100%;
  background: gray;
  cursor: ew-resize;
  opacity: 0;
}
.sidebar:hover .line {
  opacity: 1;
}
.content {
  flex: 1;
  padding: 15px;
}
</style>
