<script setup>
import think from '@/assets/img/thinking.jpg'
import Hasab from '@/assets/img/Hasab.jpg'

import { ref } from 'vue';
  
  const Location = ref('');
  const price = ref(0);
  const propertyType = ref('');
  const bedrooms = ref(0);
  const bathrooms = ref(0);
  const squareFootage = ref(0);
  const description = ref('');
  const imagePreview = ref(null);
  const Area = ref('');
  
  const onFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      imagePreview.value = URL.createObjectURL(file);
    }
  };
  const submitForm = () => {
    // Handle form submission logic here
    console.log("Form submitted with the following data:", {
        Location: Location.value,
        price: price.value,
        propertyType: propertyType.value,
        bedrooms: bedrooms.value,
        bathrooms: bathrooms.value,
        squareFootage: squareFootage.value,
        description: description.value,
        Area: Area.value,
    });
};

</script>
<template>
    <header class="bg-orange-900 text-white p-4 ">
        <h1 class="text-2xl font-bold">Property for Sale in Mekelle</h1>
    </header>
 <section class="py-4">
    <div class="bg-white container-xl lg:container m-auto">
        <div class="flex">
            <div class="bg-white p-6 rounded-lg shadow-md w-1/4"> 
                <form @submit.prevent="submitForm" class="w-full">
                    <header class="bg-gray-300 text-black text-center">
                        <h3 class="text-xl p-3">Fill the Form</h3>
                    </header>
                    <div>
                        <label>Location:</label>
                        <input type="text" v-model="Location" required class="border rounded p-2 w-full" />
                    </div>
                    <div>
                        <label>Property Type:</label>
                        <select v-model="propertyType" class="border rounded p-2 w-full">
                            <option>House</option>
                            <option>Apartment</option>
                            <option>Land</option>
                            <option>Commercial</option>
                        </select>
                    </div>
                    <div class="md:grid md:grid-cols-2 gap-4">
                        <div>
                            <label>Bedrooms:</label>
                            <input type="number" v-model="bedrooms" min="0" class="border rounded p-2 w-full" />
                        </div>
                        <div>
                            <label>Bathrooms:</label>
                            <input type="number" v-model="bathrooms" min="0" class="border rounded p-2 w-full" />
                        </div>
                    </div>
                    <div class="md:grid md:grid-cols-2 gap-4">
                        <div>
                            <label>Sqm/kare:</label>
                            <input type="number" v-model="squareFootage" class="border rounded p-2 w-full" />
                        </div>
                        <div>
                            <label>Min Price:</label>
                            <input type="number" v-model="price" required class="border rounded p-2 w-full" />
                        </div>
                    </div>
                    <div> 
                        <label>Description:</label>
                        <textarea v-model="description" class="border rounded p-2 w-full"></textarea>
                    </div>
                    <div>
                        <label>Upload Images:</label>
                        <input type="file" @change="onFileChange" multiple class="border rounded p-2 w-full" />
                    </div>
                    <div class="item-center">
                        <button type="submit" class="bg-blue-500 text-white rounded px-4 py-2 mt-4">Submit</button>
                    </div>
                </form>
                
            </div>
              

            <div class="bg-white p-6 rounded-lg shadow-md w-3/4"> 
                <h2 class="text-blue-500 text-center">Home Values // Post for Sale by Owner // Sellers Guide // Estimate Your Home</h2>
                <h2 class="px-6 text-2xl font-bold">Home Values</h2>
                <div class="px-3">
                        <label>Address:</label>
                        <select v-model="Area" class="border rounded p-2">
                            <option>70 kare</option>
                            <option>Adihawsi</option>
                            <option>Adishumdhun</option>
                            <option>Diaspora</option>
                            <option>Adiha</option>
                        </select>
                        <div v-if="Area === 'Diaspora'" class="flex items-center bg-gray-100 my-8 p-8 w-full h-64"> 
                            <div class="relative w-1/3 h-full mr-4"> 
                                <img :src="think" alt="Diaspora" class="absolute inset-0 w-full h-full rounded-lg object-cover" /> 
                            </div>
                            <div class="flex flex-col justify-center w-2/3">
                                <h2 class="text-xl font-semibold">Homes in Diaspora are expensive</h2>
                                <p class="text-gray-600">Consider the various options available in this area.</p>
                            </div>
                        </div>
                        <div v-if="Area === 'Adishumdhun'" class="flex items-center bg-gray-100 my-8 p-8 w-full h-64"> 
                            <div class="relative w-1/3 h-full mr-4"> 
                                <img :src="think" alt="Adishumdhun" class="absolute inset-0 w-full h-full rounded-lg object-cover" /> 
                            </div>
                            <div class="flex flex-col justify-center w-2/3">
                                <h2 class="text-xl font-semibold">Homes in Diaspora are expensive</h2>
                                <p class="text-gray-600">Consider the various options available in this area.</p>
                            </div>
                        </div>    
                </div>
            </div>

        </div>
    </div>
</section>
<div class="bg-white container-xl lg:container m-auto">
        <div class="flex">
            <div class="bg-white p-6 rounded-lg shadow-md w-1/4">
                <header class="bg-gray-300 text-black text-center w-full mb-4">
                    <h3 class="text-xl p-3">Available Properties</h3>
                </header>
                <table class="min-w-full border-collapse ">
                    <thead>
                        <tr class="border-b border-gray-300">
                            <th class="p-2">Property</th>
                            <th class="p-2">Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b border-gray-300">
                            <td class="p-2">Homes</td>
                            <td class="p-2">{{ homeCount }}</td>
                        </tr>
                        <tr class="border-b border-gray-300">
                            <td class="p-2">Land</td>
                            <td class="p-2">{{ landCount }}</td>
                        </tr>
                        <tr class="border-b border-gray-300">
                            <td class="p-2">Commercial</td>
                            <td class="p-2">{{ commercialCount }}</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr class="border-b border-gray-300">
                            <th class="p-2">Land Type</th>
                            <th class="p-2">Count</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b border-gray-300">
                            <td class="p-2">Commercial</td>
                            <td class="p-2">{{ commercialLandCount }}</td>
                        </tr>
                        <tr class="border-b border-gray-300">
                            <td class="p-2">Industrial</td>
                            <td class="p-2">{{ industrialLandCount }}</td>
                        </tr>
                        <tr class="border-b border-gray-300">
                            <td class="p-2">Residential</td>
                            <td class="p-2">{{ ResidentialLandCount }}</td>
                        </tr>
                        <tr class="border-b border-gray-300">
                            <td class="p-2">All Land</td>
                            <td class="p-2">{{ allLandCount }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>    
                
       

</template>