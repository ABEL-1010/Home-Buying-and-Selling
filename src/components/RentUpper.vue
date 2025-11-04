<script setup>
 import phto from '@/assets/img/M.jpg'
 import photo from '@/assets/img/R.jpg'
 import spouse from '@/assets/img/spouse.jpg'
 import healthy from '@/assets/img/healthy.jpg'
 import { ref } from 'vue';
  
  const LocationR = ref('');
  const priceR = ref(0);
  const propertyType = ref('');
  const bedroomsR = ref(0);
  const bathroomsR = ref(0);
  const squareFootageR = ref(0);
  const descriptionR = ref('');

  
  const onFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      imagePreview.value = URL.createObjectURL(file);
    }
  };
  const submitForm = () => {
  };

</script>
<template>

    <header class="bg-orange-900 text-white p-4 ">
        <h1 class="text-2xl font-bold">Property for Rent in Tigray</h1>
    </header>
    <section class="py-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 rounded-lg">
            <!-- Left Part  -->
            <div class="bg-white col-span-3">
                <div class="bg-gray-200">
                    <h2 class="mt-4 font-bold text-center pt-3 pb-3">Our Sites</h2>
                    <p class="pl-4 mb-4 pb-4 ">There are flats, houses, land and commercial property for rent in Tigray. 
                        The property have been listed by estate agents who can 
                        be contacted using the contact information provided for each property listing.for more contact our 
                    there is no Contrast effect here! delalo tay ygebru hemak gezawuti nareeyu adkem yeblekum emo last 
                    z tsebuq lblewo yerikum.  no no abana hemu yeley.

                    </p>
                </div>
                <div class="bg-gray-200">
                    <h2 class="mt-4 font-bold pl-3 pt-3">Places</h2>
                    <div class="links m-4 pl-4  ">
                        <a href="#link1">Home</a> | 
                        <a href="#link2">Bussines center</a> | 
                        <a href="#link3">WareHouse</a> |
                        <a href="#link4">Land</a> 
                    </div>
                    </br>
                    <div class="links2 m-4 pl-4 pb-4">
                        <a href="#link10">Mekelle</a> | 
                        <a href="#link20">Adigrat</a> | 
                        <a href="#link30">Axum</a> | 
                        <a href="#link40">Adwa</a> |
                        <a href="#link50">Alamata</a> |
                        <a href="#link60">Shire</a> |
                        <a href="#link70">Korem</a> | 
                        <a href="#link80">Hawzen</a> |
                        <a href="#link90">Humera</a> 
                    </div>
                </div>  
                <div class="bg-light-blue">
                    <h1 class="mt-4 text-xl font-bold">Renting</h1>
                    <h4 class="m-2 text-xl p-3"> Advice renters from our experties</h4> 

                    <!--link labzia ktmexee mgbar na hover of Rent(counseling elka)-->
                </div>

                <div class="container-xl lg:container m-auto">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                        <div class="bg-white col-span-1 relative border border-gray-300 rounded-lg shadow-md">
                            <img :src="phto" alt="Description" class="w-full h-60 object-cover rounded-t-lg" />
                            <h1 class="text-xl font-bold pt-4 pl-6">Furnished</h1>
                            <p class="pb-4 px-3">There are flats, houses, land and commercial property for rent in Tigray. 
                                The property have been listed by estate agents who can</p>
                        </div>
                         
                        <div class="bg-white col-span-1 relative border border-gray-300 rounded-lg shadow-md">
                            <img :src="photo" alt="Description" class="w-full h-60 object-cover rounded-t-lg" />
                            <h1 class="text-xl font-bold pt-4 pl-6">Kids School Distance</h1>
                            <p class="pb-4 px-3">There are flats, houses, land and commercial property for rent in Tigray. 
                                The property have been listed by estate agents who can</p>
                        </div>
                        <div class="bg-white col-span-1 relative border border-gray-300 rounded-lg shadow-md">
                            <img :src="spouse" alt="Description" class="w-full h-60 object-cover rounded-t-lg" />
                            <h1 class="text-xl font-bold pt-4 pl-6">New Spouses</h1>
                            <p class="pb-4 px-3">There are flats, houses, land and commercial property for rent in Tigray. 
                                The property have been listed by estate agents who can</p>
                        </div>
                        <div class="bg-white col-span-1 relative border border-gray-300 rounded-lg shadow-md">
                            <img :src="healthy" alt="Description" class="w-full h-60 object-cover rounded-t-lg" />
                            <h1 class="text-xl font-bold pt-4 pl-6">Healthy community</h1>
                            <p class="pb-4 px-3">There are flats, houses, land and commercial property for rent in Tigray. 
                                The property have been listed by estate agents who can</p>
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>
             <div class="bg-white col-span-1">
                <div class="bg-gray-300">
                    <h2 class="mt-4 text-xl text-center p-3">Fill This</h2>
                </div>
                <form @submit.prevent="submitForm" class="w-full">
                    
                    <div>
                        <label>Location:</label>
                        <input type="text" v-model="LocationR" required class="border rounded p-2 w-full" />
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
                            <input type="number" v-model="bedroomsR" min="0" class="border rounded p-2 w-full" />
                        </div>
                        <div>
                            <label>Bathrooms:</label>
                            <input type="number" v-model="bathroomsR" min="0" class="border rounded p-2 w-full" />
                        </div>
                    </div>
                    <div class="md:grid md:grid-cols-2 gap-4">
                        <div>
                            <label>Sqm/kare:</label>
                            <input type="number" v-model="squareFootageR" class="border rounded p-2 w-full" />
                        </div>
                        <div>
                            <label>Price:</label>
                            <input type="number" v-model="priceR" required class="border rounded p-2 w-full" />
                        </div>
                    </div>
                    <div> 
                        <label>Description:</label>
                        <textarea v-model="descriptionR" class="border rounded p-2 w-full"></textarea>
                    </div>
                    <div class="item-center">
                        <button type="submit" class="bg-blue-500 text-white rounded px-4 py-2 mt-4">Submit</button>
                    </div>
                </form>
             </div>
        
        </div>
    </section>
</template>