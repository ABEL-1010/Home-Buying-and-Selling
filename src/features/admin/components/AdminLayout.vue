<script setup>
import pic from '@/assets/img/avatar-placeholder.jpg'
import { ref } from 'vue';


const adminName = ref('Abel Demoz');
</script>
<template>
    <header class="p-4 flex items-center justify-between bg-white shadow-md">
        <h1 class="text-2xl text-orange-900 font-bold">Dashboard</h1>
        <div class="flex items-center">
            <img
                :src="pic"  
                alt="Admin Profile"
                class="w-10 h-10 rounded-full mr-2"
            />
            <span class="text-lg text-gray-700">{{ adminName }}</span>
        </div>
    </header>
    <div class="flex min-h-screen bg-gray-100">
        <!-- Sidebar -->
        <div class="w-1/5 bg-white shadow-md p-4">
            <h2 class="text-xl font-bold mb-4">Admin Settings</h2>
            <ul class="space-y-2">
                <li>
                    <router-link to="/admin/user-management">
                        <button class="w-full text-black p-2 rounded-md hover:bg-orange-500">User Management</button>
                    </router-link>
                </li>
                <li>
                    <router-link to="/admin/site-settings">
                        <button class="w-full text-black p-2 rounded-md hover:bg-orange-500">Site Settings</button>
                    </router-link>
                </li>
                <li>
                    <router-link to="/admin/content-management">
                        <button class="w-full text-black p-2 rounded-md hover:bg-orange-500">Content Management</button>
                    </router-link>
                </li>
                <li>
                    <router-link to="/admin/analytics">
                        <button class="w-full text-black p-2 rounded-md hover:bg-orange-500">Reports</button>
                    </router-link>
                </li>
                <li>
                    <button class="w-full text-black p-2 rounded-md hover:bg-orange-500">Log Out</button>
                </li>
            </ul>
        </div>

        <!-- Main Content Area -->
        <div class="flex-1 p-6">
            <h1 class="text-2xl font-bold mb-4">Admin Dashboard</h1>
            
            <router-view />
        </div>
    </div>
    
</template>

