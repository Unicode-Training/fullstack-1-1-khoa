export default defineNuxtRouteMiddleware((to, from) => {
  console.log("logging global middleware");
});
