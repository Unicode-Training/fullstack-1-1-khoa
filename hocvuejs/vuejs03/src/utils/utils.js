import { onMounted, ref } from "vue";
export const useTodoList = () => {
  const todoList = ref([]);
  onMounted(async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    todoList.value = data;
  });
  return todoList;
};

export const useScrollTop = () => {
  const isScroll = ref(false);
  onMounted(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        isScroll.value = true;
      } else {
        isScroll.value = false;
      }
    });
  });
  return isScroll;
};
//Composable
