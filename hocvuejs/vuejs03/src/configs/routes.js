import { authMiddleware } from "../middlewares/auth";
import About from "../pages/About.vue";
import Home from "../pages/Home.vue";
import ProductDetail from "../pages/ProductDetail.vue";
import Products from "../pages/Products.vue";
import Login from "../pages/Login.vue";

export const routes = [
  {
    path: "/",
    component: Home,
    name: "home",
  },
  {
    path: "/about",
    component: About,
    name: "about",
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/san-pham",
    beforeEnter: authMiddleware,
    children: [
      {
        name: "products",
        path: "",
        component: Products,
      },
      {
        path: ":productId",
        component: ProductDetail,
        name: "product-detail",
      },
    ],
  },
];
