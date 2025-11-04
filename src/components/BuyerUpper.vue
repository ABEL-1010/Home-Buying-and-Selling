<script setup>
import { ref, computed } from 'vue';
import homep from '@/assets/img/homep.jpg';
import homeS from '@/assets/img/HomeS.jpg';

const propertyType = ref('');
const bedrooms = ref(0);
const bathrooms = ref(0);
const searchQuery = ref(''); // Add search query ref

// Define properties with names and locations
const properties = ref([
  {
    id: 1,
    type: "Apartment",
    name: "Adihawsi",
    location: "Mekelle",
    price: "500,000 birr",
    image: homep,
  },
  {
    id: 2,
    type: "Apartment",
    name: "Adiha",
    location: "Mekelle",
    price: "500,000 birr",
    image: homeS,
  },
  {
    id: 3,
    type: "Home",
    name: "Diaspora",
    location: "Mekelle",
    price: "1,000,000 birr",
    image: homeS,
  },
  {
    id: 4,
    type: "Home",
    name: "70Kare",
    location: "Mekelle",
    price: "1,500,000 birr",
    image: homeS,
  },
]);

// Computed property to filter properties based on searchQuery
const filteredProperties = computed(() => {
  if (!searchQuery.value) return properties.value; // Return all if no search query
  return properties.value.filter(property =>
    property.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    property.location.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

// Function to apply filters (you can implement your filtering logic here)
const applyFilters = () => {
  // Perform the filtering logic here
};

// Function to reset filters (you can implement your reset logic here)
const resetFilters = () => {
  // Reset the filters to their initial values
};

</script>

<template>
  <nav class="bg-orange-900 border-b border-gray-500">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <h1 class="text-2xl font-bold text-white">Properties</h1>
        
        <div class="flex space-x-4 items-center">
          <div>
            <label class="text-white">Property Type:</label>
            <select v-model="propertyType" class="border rounded p-2">
              <option>House</option>
              <option>Apartment</option>
              <option>Land</option>
              <option>Commercial</option>
            </select>
          </div>
          <div>
            <label class="text-white">Bedrooms:</label>
            <input type="number" v-model="bedrooms" min="0" class="border rounded p-2" />
          </div>
          <div>
            <label class="text-white">Bathrooms:</label>
            <input type="number" v-model="bathrooms" min="0" class="border rounded p-2" />
          </div>
        </div>
      </div>
    </div>
  </nav>

  <div class="flex justify-center mt-8">
    <div class="shadow-md w-full max-w-lg">
      <input
        type="text"
        placeholder="Search for City, Address"
        class="w-full text-black p-2 border border-gray-700 rounded-md"
        v-model="searchQuery"  
      />
      
    </div>
  </div>
  
  <div class="container-xl lg:container m-2">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-2 rounded-xl relative">
      <div v-for="property in filteredProperties" :key="property.id" class="p-4 bg-white rounded-xl shadow-md relative">
        <div class="mb-6">
          <div class="text-gray-600 my-2">{{ property.type }}</div>
          <h3 class="text-xl font-bold">{{ property.name }}</h3>
        </div>
        <div class="mb-5">
          <div class="relative h-48"> 
            <img :src="property.image" alt="homep" class="absolute inset-0 w-full h-full rounded-lg object-cover" /> 
          </div>
        </div>
        <div class="border border-gray-100 mb-3"></div>
        <div class="flex justify-between items-center mb-2"> 
          <h3 class="text-green-500 mb-2">{{ property.price }}</h3>
          <div class="text-orange-700">
            <i class="pi pi-map-marker text-orange-700"></i>
            {{ property.location }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>