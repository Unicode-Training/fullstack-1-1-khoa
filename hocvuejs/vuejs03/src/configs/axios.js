import axios from "axios";
import { useRouter } from "vue-router";
import { useAuthStore } from "../store/auth";
export const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com",
});

export const axiosAuth = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1",
});

axiosAuth.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("access_token");
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

axiosAuth.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const refreshToken = localStorage.getItem("refresh_token");
    const store = useAuthStore();
    if (
      error.response.status === 401 &&
      !error.response.config.url.includes("/auth/refresh-token") &&
      refreshToken
    ) {
      //Lỗi access token --> Cần phải refresh token
      const newToken = await getNewToken(refreshToken);
      if (!newToken) {
        //Xử lý đăng xuất
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        store.updateUser({});
        store.updateAuthenticated(false);
      } else {
        //Lưu vào localStorage
        localStorage.setItem("access_token", newToken.access_token);
        localStorage.setItem("refresh_token", newToken.refresh_token);
        //Xử lý gọi lại request bị failed
        error.config.headers.Authorization = `Bearer ${newToken.access_token}`;
        return axiosAuth.request(error.config); //Tự động lại request (Tính năng của axios)
      }
    }
  }
);

const getNewToken = async (refreshToken) => {
  if (!refreshToken) {
    return false;
  }
  try {
    const response = await axiosAuth.post("/auth/refresh-token", {
      refreshToken,
    });
    const data = response.data;
    return data;
  } catch {
    return false;
  }
};
