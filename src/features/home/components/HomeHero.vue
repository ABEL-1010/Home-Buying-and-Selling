<script setup>
import { ref } from 'vue';
import bgl from '@/assets/img/hero-background.jpg';
import HomeS from '@/assets/img/listing-sample-1.jpg';


const searchQuery = ref('');  // Reactive variable for the search input

const performSearch = () => {
  if (searchQuery.value) {
    // Handle the search logic here
    console.log('Searching for:', searchQuery.value);
    // You can trigger a search API call or filter results based on the query
  }
};
</script>

<template>
  <section
      class="bg-cover py-20 mb-4 relative"
      :style="{ backgroundImage: `url(${bgl})`, minHeight: '90vh', width: '100%' }">
      <div class="absolute inset-0 bg-black opacity-10"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div class="text-center">
              <h2 class="text-2xl font-bold text-black ">
                  Home Buying and<br> Selling in tigray
              </h2>
              <p class="my-4 text-xl text-black">
                  Buy, sell and rent homes in Mekelle! Yeha Homes!
              </p>
          </div>
          <div class="mt-4 rounded-md shadow-md w-full max-w-lg opacity-200 relative">
            <input
                type="text"
                placeholder="Enter City, Address"
                class="w-full p-2 border border-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 pr-10"
                @keydown.enter="performSearch"
                v-model="searchQuery"
            />
            <i class="fas fa-search absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
        </div>
          <div class="absolute bottom-1 left-1/2 transform -translate-x-1/2">
            <img :src="HomeS" alt="Home" class="max-w-xs rounded-md shadow-md" />
        </div>
      </div>
  </section>
</template>