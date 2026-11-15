<script setup>
import giphy from '@/assets/img/agent-banner.webp';
import hasab from '@/assets/img/avatar-placeholder.jpg';
</script>
<template>
     <div class='my-10'>
        <h1 class="text-3xl font-bold text-center text-orange-800 ">Welcome to the Real Estate Agent!</h1>
        <p class="text-black text-center">What would you like to do?</p>
         
      </div>
      <div class="container-l lg:container mx-10 my-10">
        <div class="bg-white grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-white p-4 rounded-lg shadow-md flex flex-col justify-center mx-2"> 
              <h1 class="text-black font-bold pl-4 text-xl">Finding Agents</h1>
              <ul class="pl-6 my-4 text-black">
                <li> Experianced Agents </li>
                <li> Reasons You need agents</li>
                <li> Photographers</li>
              </ul>

              <nav>
                <a href="#target-section" class="text-blue-500 font-bold">For more</a>
              </nav>
            </div>
            <div class="bg-black p-4 rounded-lg shadow-md flex flex-col justify-center mx-2"> 
              <h1 class="text-white font-bold pl-4 text-xl">Free Agent</h1>
              <ul class="pl-6 my-4 text-white">
                <li> No cuts </li>
                <li> We are hiring agents</li>
                <li> Prerequisites</li>
              </ul>
              <nav>
                <a href="#target" class="text-blue-500 font-bold">For More</a>
              </nav>
            </div>
            <div class="bg-white p-4 rounded-lg shadow-md flex flex-col justify-center mx-2"> 
              <h1 class="text-black font-bold pl-4 text-xl">Current Market</h1>
              
              <ul class="pl-6 my-4 text-black">
                <li> Inflation</li>
                <li> currency</li>
                <li> Factors that affect price</li>
              </ul>
              <nav>
                <a href="#target-last" class="text-blue-500 font-bold">For More</a>
              </nav>
            </div>
        
          </div>
      </div>
      <div class="py-20 mx-20 mb-4 "
        :style="{ 
          backgroundImage: `url(${giphy})`, 
          backgroundRepeat: 'no-repeat', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          minHeight: '80vh', 
          height: '100%',
          minWidth: '80vh' 
          
      }">
      </div>
        <section id="target-section" class="py-4 my-10 bg-white">
            <h2 class="font-bold text-2xl text-center">Finding Agent</h2>
            <p class="font-bold text-center">Get help Finding an Agent</p>
            <div class="container-l lg:container mx-10 my-6">
              <div class="bg-white grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="bg-white p-4 rounded-lg shadow-md flex items-center">
                    <div class="relative w-16 h-16 mr-4"> 
                        <img :src="hasab" alt="Agent Image" class="absolute inset-0 w-full h-full rounded-full object-cover border-2 border-gray-300" /> 
                    </div>
                    <div>
                        <h3 class="text-xl font-bold pl-4">Abel Demoz</h3>
                        <h3 class="text-l font-bold pl-4">Mekelle</h3>
                        <p class="text-gray-600 pl-4">+251 928 820 425</p>
                    </div>
                </div>

                <div class="bg-white p-4 rounded-lg shadow-md flex items-center">
                    <div class="relative w-16 h-16 mr-4"> 
                        <img :src="hasab" alt="Agent Image" class="absolute inset-0 w-full h-full rounded-full object-cover border-2 border-gray-300" /> 
                    </div>
                    <div>
                        <h3 class="text-xl font-bold pl-4">Name Here</h3>
                        <h3 class="text-l font-bold pl-4">Mekelle</h3>
                        <p class="text-gray-600 pl-4">+251 928 820 425</p>
                    </div>
                </div>

              </div>
            </div> 
            <div class="py-6 px-6">
              <h2 class="text-2xl font-bold">Our Agents</h2>
              <p class="pt-4">
                Our agents are highly experienced, showcasing exceptional problem-solving skills, effective communication, empathy, patience, and adaptability. They possess a profound understanding of their field and exhibit meticulous attention to detail, ensuring precise and thorough service. Their time management skills enable them to meet deadlines without sacrificing quality, and their professional demeanor aligns with company protocols. They are committed to continual learning, staying updated with the latest developments, which enhances their ability to provide top-notch support and service.
              </p>
              <h2 class="font-bold pt-4">Just givea call to our photographers </h2>
              <p>0928820425</p>

            </div>     
        </section>
        <section id="target" class="py-10">
            <h2>Your Target Section</h2>
            <p>Content goes here...</p>
        </section>
        <section id="target-last" class="py-10">
            <h2 class="text-center text-2xl font-bold pt-4">Current Market</h2>
            <p class="px-4">The current housing market is characterized by moderate growth in home prices and elevated mortgage rates.<b class="text-orange-800 font-bold"> Factors influencing home prices</b> include <b>economic conditions, mortgage rates, housing supply, and demographic trends</b>. While recent indicators suggest a slowing in price growth due to increased inventory and affordability challenges, prices remain high.</p>

        </section>
              
  </template>
  
  
  

  