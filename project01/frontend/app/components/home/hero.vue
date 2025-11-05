<template>
  <div
    class="h-[80vh] flex bg-cover"
    :style="{ backgroundImage: `url(${bannerUrl})` }"
  >
    <div class="w-[1300px] mx-auto h-full flex items-center">
      <div class="w-1/2 text-[#333] dark:text-white">
        <h1 class="text-7xl font-bold">
          Ready to transform your financial life
        </h1>
        <p class="text-lg py-3">
          When you join our journey, you are choosing a partner who believes in
          a healthier, more balanced you. When you join our journey. Quizzes are
          working for them — and they can for you too. or a modern web app gives
          you full control.
        </p>
        <div class="flex gap-3">
          <UButton
            class="bg-[rgb(22,101,52)] px-5 py-4 cursor-pointer hover:bg-[rgb(16,79,41)] flex gap-2 dark:text-white"
            size="null"
            >Start trial for 14 days <span class="pi pi-arrow-up-right"></span
          ></UButton>
          <UButton
            class="bg-[#fff] text-[#333] hover:bg-[#d5d3d3] px-5 py-4 cursor-pointer dark:bg-[var(--ui-bg)] dark:text-white"
            size="null"
            >Explore more</UButton
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import bannerUrl from "~/assets/images/banner-bg-2.webp";
</script>
