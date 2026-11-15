<script setup>
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const phone = ref('');
const adminEmail = 'abel@gmail.com'; // Replace with your admin email

const handleSignIn = () => {
    // Check if the email matches the admin's email
    if (email.value === adminEmail) {
        // Redirect to the admin page (replace '/admin' with your admin route)
        window.location.href = '/admin';
    } else {
        // Handle regular user sign-in (e.g., authenticate user)
        console.log('Sign in as regular user:', name.value, email.value, phone.value);
        window.location.href = '/Sell';
        // Add your authentication logic here
    }
};
</script>
<template>
    
    <div class="flex justify-center items-center min-h-screen bg-gray-100">
        <div class="bg-white p-6 rounded-md shadow-md w-full max-w-sm">
            <h2 class="text-2xl font-bold text-center mb-4">Sign In</h2>
            <form @submit.prevent="handleSignIn">
                <div class="mb-4">
                    <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        id="name"
                        v-model="name"
                        class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>
                <div class="mb-4">
                    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        v-model="email"
                        class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>
                <div class="mb-4">
                    <label for="phone" class="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        v-model="phone"
                        class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>
                <button type="submit" class="w-full bg-orange-600 text-white p-2 rounded-md">Sign In</button>
            </form>
            <p class="mt-4 text-center">
                Don't have an account? <a href="/create-account" class="text-orange-600">Create Account</a>
            </p>
        </div>
    </div>

</template>