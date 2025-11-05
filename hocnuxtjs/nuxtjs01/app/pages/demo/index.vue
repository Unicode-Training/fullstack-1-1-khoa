<template>
  <h1>Demo</h1>
  <h2>{{ auth.user.name }}</h2>
  <button @click="handleUpdateUser">Update User</button>
  <h3 v-if="error">{{ error }}</h3>
  <h3 v-if="status === 'pending'">Loading...</h3>
  <template v-else>
    <h3 v-for="post in posts.data" :key="post.id">
      <NuxtLink :to="`/demo/${post.id}`">
        {{ post.title }}
      </NuxtLink>
    </h3>
    <Pagination :pageSize="posts.total" :currentPage="page" />
  </template>
  <h3 v-for="todo in todoList">{{ todo.title }}</h3>
</template>
<script setup>
import Pagination from "./Pagination.vue";
const auth = useAuth();
const { todoList, fetchTodo } = useTodoList();

const LIMIT = 10;
const route = useRoute();
const page = computed(() => Number(route.query.page) || 1);
const postsKey = computed(() => `posts-${page.value}`);
const handleUpdateUser = () => {
  auth.value.user.name = "Khoa";
};
onMounted(() => {
  auth.value.message = "Dữ liệu từ demo";
  fetchTodo();
});
const {
  data: posts,
  error,
  status,
} = useAsyncData(
  postsKey,
  async () => {
    try {
      const response = await $fetch.raw(
        `https://jsonplaceholder.typicode.com/posts`,
        {
          params: {
            _limit: LIMIT,
            _page: page.value,
          },
        }
      );

      const totalRow = response.headers.get("x-total-count");
      const totalPage = Math.ceil(totalRow / LIMIT);
      return {
        total: totalPage,
        data: response._data,
      };
    } catch {
      throw new Error("Đã có lỗi xảy ra");
    }
  },
  {
    // watch: [page],
  }
);
</script>
