import { useAuthStore } from "../store/auth";

export const authMiddleware = (to, from, next) => {
  const store = useAuthStore();
  console.log(store.isLoading, store.isAuthenticated);

  if (store.isLoading) {
    return;
  }
  if (!store.isAuthenticated) {
    return next({ name: "login" });
  }
  next();
};
