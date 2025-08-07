import { defineStore } from "pinia";
import { ref } from "vue";
export const useTodoListStore = defineStore("todoList", () => {
  const todoList = ref([]);
  const isLoading = ref(true);
  const errors = ref(null);
  const getTodoList = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      todoList.value = data;
    } catch (error) {
      errors.value = error;
    } finally {
      isLoading.value = false;
    }
  };
  return { todoList, getTodoList, isLoading, errors };
});
