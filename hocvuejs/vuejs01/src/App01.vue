<template>
  <!-- <div>
    <h1>Học Vue không khó: {{ title }}</h1>
    <h2>
      <a :href="url" v-bind:title="title" v-bind:target="getTarget()">Ahihi</a>
    </h2>
    <div
      :class="{
        image: true,
        active: true,
      }"
      :style="{
        border: '1px solid red',
        borderRadius: '10px',
      }"
    >
      <img
        v-if="status"
        src="https://fastly.picsum.photos/id/42/536/354.jpg?hmac=UKlfQOfBeXv8Cm4j9y5b-QIyo7GETTbKjg9updd5bJc"
        alt=""
      />
      <p v-else>Không có ảnh</p>
    </div>

    <div v-show="status">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero ad eos
      tempora cum officiis, amet, fuga omnis, obcaecati dolor explicabo ipsum
      pariatur modi consequatur neque fugit odit perspiciatis? Beatae, aperiam?
    </div>

    <template v-if="users.length > 0">
      <h3>Danh sách người dùng</h3>
      <ul>
        <li v-for="user in users">{{ `${user.name} - ${user.email}` }}</li>
      </ul>
    </template>
  </div> -->

  <button @click="handleClick('Unicode')">Click me</button>
</template>

<script setup>
const handleClick = (title) => {
  console.log("Click me", title);
};
// const title = "Unicode";
// const url = "https://google.com";
// const getTarget = () => "_blank";
// const status = true;
// const users = [
//   {
//     id: 1,
//     name: "User 1",
//     email: "user1@gmail.com",
//   },
//   {
//     id: 2,
//     name: "User 2",
//     email: "user2@gmail.com",
//   },
//   {
//     id: 3,
//     name: "User 3",
//     email: "user3@gmail.com",
//   },
// ];
</script>
