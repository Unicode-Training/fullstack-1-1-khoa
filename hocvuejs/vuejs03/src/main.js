import { createApp } from "vue";
import { createPinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router";
// import './style.css'
import App from "./App.vue";
import { routes } from "./configs/routes";

import { useCounterStore } from "./store/counter";
import { useAuthStore } from "./store/auth";
import { axiosAuth } from "./configs/axios";
const pinia = createPinia();

//gọi counterStore --> Lỗi

const app = createApp(App).use(pinia);

//Gọi storepinia --> Hoạt động
// const counterStore = useCounterStore();
// console.log(counterStore);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   console.log("beforeEach");
//   next();
// });

router.beforeEach(async (to, from, next) => {
  //Xử lý lấy thông tin user

  const store = useAuthStore();

  try {
    store.updateLoading(true);
    const response = await axiosAuth.get(
      `https://api.escuelajs.co/api/v1/auth/profile`
    );
    store.updateAuthenticated(true);
    store.updateUser(response.data);
  } catch {
    store.updateAuthenticated(false);
    store.updateUser({});
  } finally {
    store.updateLoading(false);
  }

  next();
});

router.afterEach(async (to, from) => {
  // console.log(`to: ${to.name}, from: ${from.name}`);
  if (to.name === "home") {
    document.title = "Trang chủ";
  }
  if (to.name === "about") {
    document.title = "Giới thiệu";
  }

  if (to.name === "products") {
    document.title = "Sản phẩm";
  }

  if (to.name === "product-detail") {
    const productId = to.params.productId;
    const response = await fetch(`https://dummyjson.com/products/${productId}`);
    const data = await response.json();
    document.title = data.title;
  }
});

app.use(router);

app.mount("#app");
