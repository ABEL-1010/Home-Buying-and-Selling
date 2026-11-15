<script setup>
import { RouterLink, useRoute } from 'vue-router';
import logo from '@/assets/img/logo.jpg';

const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
};
</script>

<template>
  <nav class="bg-white-800 border-b border-gray-500">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <div class="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
          <!-- Logo -->
          <RouterLink class="flex flex-shrink-0 items-center mr-4" to="/">
            <img class="h-8 w-12 rounded-full" :src="logo" alt="Yeha Homes" />
            <span class="hidden md:block text-black text-2xl font-bold ml-2"
              >Gojoy</span
            >
          </RouterLink>
          <div class="md:ml-auto">
            <div class="flex space-x-2">
              <RouterLink
                to="/"
                :class="[
                  isActiveLink('/')
                    ? 'bg-blue-200'
                    : 'hover:bg-blue-200 hover:text-white',
                  'text-black',
                  'px-3',
                  'py-2',
                  'rounded-md',
                ]"
                >Home</RouterLink
              >
              <RouterLink
                to="/Buy"
                :class="[
                  isActiveLink('/Buy')
                    ? 'bg-blue-200'
                    : 'hover:bg-blue-200 hover:text-white',
                  'text-black',
                  'px-3',
                  'py-2',
                  'rounded-md',
                ]"
                >Buy</RouterLink
              >
              <RouterLink
                to="/Sell"
                :class="[
                  isActiveLink('/Sell')
                    ? 'bg-blue-200'
                    : 'hover:bg-blue-200 hover:text-white',
                  'text-black',
                  'px-3',
                  'py-2',
                  'rounded-md',
                ]"
                >Sell</RouterLink
              >
              <RouterLink
                to="/Rent"
                :class="[
                  isActiveLink('/Rent')
                    ? 'bg-white-200'
                    : 'hover:bg-blue-200 hover:text-red',
                  'text-black',
                  'px-3',
                  'py-2',
                  'rounded-md',
                ]"
                >Rent</RouterLink
              >
              <RouterLink
                to="/Agent"
                :class="[
                  isActiveLink('/Agent')
                    ? 'bg-blue-200'
                    : 'hover:bg-blue-200 hover:text-white',
                  'text-black',
                  'px-3',
                  'py-2',
                  'rounded-md',
                ]"
                >Agent</RouterLink
              >
              <RouterLink
                to="/Signin"
                :class="[
                  isActiveLink('/Signin')
                    ? 'bg-blue-200'
                    : 'hover:bg-blue-200 hover:text-white',
                  'text-black',
                  'px-3',
                  'py-2',
                  'rounded-md',
                ]"
                >Signin</RouterLink
              >
              <RouterLink
                to="/Favourites"
                :class="[
                  isActiveLink('/Favourites')
                    ? 'bg-blue-200'
                    : 'hover:bg-blue-200 hover:text-white',
                  'text-black',
                  'px-3',
                  'py-2',
                  'rounded-md',
                ]"
                >Favourites</RouterLink
              >
              
            </div>
          
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
