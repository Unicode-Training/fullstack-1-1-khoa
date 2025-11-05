<template>
  <button @click="$router.back()">Back</button>
  <button @click="$router.push(`/demo/${Number(id) + 1}`)">Next</button>
  <h3 v-if="status === 'pending'">Loading...</h3>
  <template v-else>
    <h1>{{ post.name }}</h1>
    <p>
      {{ post.body }}
    </p>
  </template>
</template>
<script setup>
const route = useRoute();
const id = route.params.id;
const postKey = computed(() => `post-${id}`);
const { data: post, status } = useAsyncData(
  postKey,
  () => $fetch(`https://jsonplaceholder.typicode.com/posts/${id}`),
  {
    transform: (post) => {
      //Sửa lại response
      return {
        name: post.title,
        ...post,
      };
    },
  }
);
</script>
