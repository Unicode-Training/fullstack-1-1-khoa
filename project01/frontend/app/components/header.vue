<template>
  <header>
    <UDrawer direction="top" v-model:open="searchOpen" :overlay="false">
      <template #content>
        <div class="flex h-full items-center pt-5 w-[1300px] mx-auto">
          <input
            type="text"
            placeholder="Vui lòng nhập từ khóa..."
            class="flex-1 outline-0 text-xl"
          />
          <span
            @click="searchOpen = false"
            class="cursor-pointer text-3xl font-bold"
            >&times;</span
          >
        </div>
      </template>
    </UDrawer>
    <div v-if="config.data.top_bar" class="bg-[rgb(22,101,52)] text-white py-2">
      <div class="max-w-[1300px] mx-auto text-center text-[14px]">
        {{ config.data.top_bar }}
        <a
          v-if="config.data.top_bar_label"
          class="font-bold"
          :href="config.data.top_bar_link"
          >{{ config.data.top_bar_label }}</a
        >
      </div>
    </div>
    <div class="max-w-[1300px] mx-auto flex justify-between items-center py-3">
      <div>
        <a href="/">
          <img
            :src="runtimeConfig.public.BASE_MEDIA + config.data.logo.url"
            alt="Logo"
            class="dark:hidden"
          />
          <img
            src="https://uitheme.shop/exsit-tailwind/dist/images/logo/logo-green-white.png"
            alt="Logo"
            class="hidden dark:block"
          />
        </a>
      </div>
      <nav>
        <ul class="flex gap-10">
          <li v-for="item in config.data.Menu">
            <a
              :key="item.id"
              :target="item.menu_target"
              :href="item.menu_link"
              class="font-[600] text-[17px] text-[#111827] dark:text-white"
              >{{ item.menu_label }}</a
            >
          </li>
        </ul>
      </nav>
      <div class="flex gap-3 items-center">
        <span
          class="pi pi-search text-2xl cursor-pointer"
          @click="searchOpen = true"
        ></span>

        <ClientOnly>
          <template #fallback>Loading...</template>
          <UButton
            @click="isDark = !isDark"
            size="null"
            :class="'rounded-full px-6 py-2 bg-[#c8c6c6] text-[#333] hover:bg-[#c8c6c6] cursor-pointer flex gap-2 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-800'"
          >
            <div class="flex items-center gap-3" v-if="!isDark">
              <span class="pi pi-moon"></span>
              Dark
            </div>
            <div class="flex items-center gap-3" v-else>
              <span class="pi pi-sun"></span>
              Light
            </div>
          </UButton>
        </ClientOnly>
        <UButton
          class="bg-[rgb(22,101,52)] px-5 py-3 cursor-pointer hover:bg-[rgb(16,79,41)] text-white"
          size="null"
          >Register</UButton
        >
      </div>
    </div>
  </header>
</template>
<script setup>
const searchOpen = ref(false);
// import logo from "../assets/images/logo-green.png";
const runtimeConfig = useRuntimeConfig();
const { data: config } = useFetch(
  `${runtimeConfig.public.BACKEND_API}/global?populate=*`
);

const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set(_isDark) {
    colorMode.preference = _isDark ? "dark" : "light";
  },
});
</script>
