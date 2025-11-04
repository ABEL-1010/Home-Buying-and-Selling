<script setup>
import { ref, defineEmits } from 'vue';

const emit = defineEmits();

const name = ref('');
const email = ref('');
const phone = ref('');
const role = ref('');

const handleCreateAccount = () => {
    // Emit the user data to the parent component
    emit('create-account', {
        name: name.value,
        email: email.value,
        phone: phone.value,
        role: role.value,
    });

    // Clear the inputs
    name.value = '';
    email.value = '';
    phone.value = '';
};
</script>

<template>
    <div class="flex justify-center items-center min-h-screen bg-gray-100">
        <div class="bg-white p-6 rounded-md shadow-md w-full max-w-sm">
            <h2 class="text-2xl font-bold text-center mb-4">Create Account</h2>
            <form @submit.prevent="handleCreateAccount">
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
                    <label for="role" class="block text-sm font-medium text-gray-700">Role</label>
                    <input
                        type="tel"
                        id="role"
                        v-model="role"
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
                <button type="submit" class="w-full bg-orange-600 text-white p-2 rounded-md">Create Account</button>
            </form>
            <p class="mt-4 text-center">
                Already have an account? <a href="/sign-in" class="text-orange-600">Sign In</a>
            </p>
        </div>
    </div>
</template>



<style scoped>
/* Optional: Add any additional styling here */
</style>
