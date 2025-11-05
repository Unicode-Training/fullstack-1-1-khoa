<template>
  <div class="counter-wrap lg:pb-24 pb-12 bg-green-50 relative lg:py-24 py-20">
    <div
      class="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-24 lg:pb-20 pb-12"
    >
      <!-- title -->
      <div
        class="flex flex-col items-center text-center xl:w-2/3 lg:w-2/3 mx-auto justify-center pb-16"
      >
        <h2
          class="lg:text-5xl md:text-4xl text-3xl font-semibold tracking-tighter text-gray-900 mb-4 aos-init aos-animate"
        >
          Trusted by 150,000+ content creators agencies
        </h2>
        <p
          class="text-gray-600 text-lg font-medium max-w-xl lg:px-4 px-0 aos-init aos-animate"
        >
          Quizzes are working for them — and they can for you too.
        </p>
      </div>
      <div
        class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center gap-6"
        id="exsit-counter"
      >
        <!-- counter -->
        <div class="text-center flex flex-col aos-init aos-animate">
          <h2 class="lg:text-7xl text-5xl font-normal text-gray-900">
            <span class="exsit-counter">22.5</span>k
          </h2>
          <p class="text-lg text-gray-800 font-normal mb-0">
            Higher Conversion Rates
          </p>
        </div>
        <!-- counter -->
        <div
          class="text-center flex flex-col aos-init aos-animate"
          data-aos="zoom-in"
          data-aos-duration="400"
          data-delay="200"
        >
          <h2 class="lg:text-7xl text-5xl font-normal text-gray-900">
            +<span class="exsit-counter">65</span>m
          </h2>
          <p class="text-lg text-gray-800 font-normal mb-0">
            Backed by those who believe.
          </p>
        </div>
        <!-- counter -->
        <div class="text-center flex flex-col aos-init aos-animate">
          <h2 class="lg:text-7xl text-5xl font-normal text-gray-900">
            &gt;<span class="exsit-counter">99.2</span>%
          </h2>
          <p class="text-lg text-gray-800 font-normal mb-0">
            People who trust what we.
          </p>
        </div>
      </div>
    </div>

    <div
      class="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-4"
    >
      <div class="bg-white rounded-xl pb-0 lg:py-4">
        <div class="flex flex-wrap px-3 pt-3 justify-center">
          <!-- Brand Item -->
          <div
            class="w-1/2 md:w-1/3 lg:w-1/6 text-center mb-4 aos-init aos-animate"
          >
            <img loading="lazy" :src="logo1" alt="brand" class="h-7" />
          </div>
          <div
            class="w-1/2 md:w-1/3 lg:w-1/6 text-center mb-4 aos-init aos-animate"
          >
            <img loading="lazy" :src="logo2" alt="brand" class="h-7" />
          </div>
          <div
            data-delay="200"
            class="w-1/2 md:w-1/3 lg:w-1/6 text-center mb-4 aos-init aos-animate"
          >
            <img loading="lazy" :src="logo3" alt="brand" class="h-7" />
          </div>
          <div
            class="w-1/2 md:w-1/3 lg:w-1/6 text-center mb-4 aos-init aos-animate"
          >
            <img loading="lazy" :src="logo4" alt="brand" class="h-7" />
          </div>
          <div
            class="w-1/2 md:w-1/3 lg:w-1/6 text-center mb-4 aos-init aos-animate"
          >
            <img loading="lazy" :src="logo5" alt="brand" class="h-7" />
          </div>
          <div
            class="w-1/2 md:w-1/3 lg:w-1/6 text-center mb-4 aos-init aos-animate"
          >
            <img loading="lazy" :src="logo6" alt="brand" class="h-7" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import logo1 from "@/assets/images/b-1.png";
import logo2 from "@/assets/images/b-2.png";
import logo3 from "@/assets/images/b-3.png";
import logo4 from "@/assets/images/b-4.png";
import logo5 from "@/assets/images/b-5.png";
import logo6 from "@/assets/images/b-6.png";
</script>
