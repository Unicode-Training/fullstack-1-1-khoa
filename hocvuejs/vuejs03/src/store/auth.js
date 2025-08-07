import { defineStore } from "pinia";
import { ref } from "vue";
export const useAuthStore = defineStore("auth", () => {
  const user = ref({});
  const isAuthenticated = ref(false);
  const isLoading = ref(false);
  const updateUser = (data) => {
    user.value = data;
  };
  const updateAuthenticated = (status) => {
    isAuthenticated.value = status;
  };
  const updateLoading = (status) => {
    isLoading.value = status;
  };
  return {
    user,
    isAuthenticated,
    isLoading,
    updateUser,
    updateAuthenticated,
    updateLoading,
  };
});
