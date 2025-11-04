<script setup>
import pho from '@/assets/img/R.jpg';
import AllRight from '@/assets/img/AllRight.jpg';
import asdf from '@/assets/img/asdf.jpg';
import thinking from '@/assets/img/thinking.jpg';
</script>

<template>
    <section class="py-4 bg-cover bg-center py-20 mb-4 " :style="{ backgroundImage: `url(${asdf})`}">
    <div class="container-xl lg:container m-auto">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 pt-6 rounded-lg">
      <div class="bg-white p-6 rounded-lg shadow-md h-80 flex flex-col items-center justify-center "> 
        <h2 class="text-2xl font-bold">Buy Home</h2>
        <p class="mt-2 mb-4">Amuna yemxeu ygobniyuna</p>
        <img :src="AllRight" alt="house" class="mt-4 h-60 w-40 object-cover rounded-full border-2 border-grey-100"/>
        <a href="jobs.html"
          class="inline-block bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-gray-700 mt-6">
          Browse Homes
        </a>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-md h-80 flex flex-col items-center justify-center"> 
        <h2 class="text-2xl font-bold">Sell Homes</h2>
        <p class="mt-2 mb-4">Aya! kershi adlika, geza nieka</p>
        <img :src="pho" alt="house" class="mt-4 h-60 w-40 object-cover rounded-full border-2 border-grey-100"/>
        <a href="add-job.html"
          class="inline-block bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-gray-600 mt-6">
          Sell Homes
        </a>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-md h-80 flex flex-col items-center justify-center"> 
        <h2 class="text-2xl font-bold">Rent Home</h2>
        <p class="mt-2 mb-4">Zekare Delikum Kedemakum</p>
        <img :src="pho" alt="house" class="mt-4 h-60 w-40 object-cover rounded-full border-2 border-grey-100"/>
        <a href="add-job.html"
          class="inline-block bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-gray-600 mt-6">
          Rent Homes
        </a>
      </div>
    </div>
  </div>
</section>
</template>