<script setup>
import { ref } from 'vue';

const users = ref([
    { id: 1, name: 'Abel', email: 'abel@example.com', role: 'Admin' },
    { id: 2, name: 'AbelD', email: 'abel2@example.com', role: 'Editor' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Viewer' }
]);

const showAddUserModal = ref(false);
const showEditUserModal = ref(false);
const newUser = ref({ name: '', email: '', role: '' });
const currentUser = ref({ id: null, name: '', email: '', role: '' });

const addUser = () => {
    const newId = users.value.length ? users.value[users.value.length - 1].id + 1 : 1;
    users.value.push({ id: newId, ...newUser.value });
    newUser.value = { name: '', email: '', role: '' };
    showAddUserModal.value = false;
};

const editUser = (user) => {
    currentUser.value = { ...user }; // Copy the user data for editing
    showEditUserModal.value = true; // Open the edit modal
};

const updateUser = () => {
    const index = users.value.findIndex(user => user.id === currentUser.value.id);
    if (index !== -1) {
        users.value[index] = { ...currentUser.value }; // Update the user data
    }
    showEditUserModal.value = false; // Close the modal
};

const deleteUser = (id) => {
    users.value = users.value.filter(user => user.id !== id); // Remove the user by id
};
</script>

<template>
    <div>
        <h2 class="text-xl font-bold mb-4">User Management</h2>
        <button @click="showAddUserModal = true" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mb-4">
            <i class="fas fa-user-plus"></i> Add User
        </button>
        
        <table class="min-w-full bg-white">
            <thead>
                <tr>
                    <th class="py-2 px-4 border-b">ID</th>
                    <th class="py-2 px-4 border-b">Name</th>
                    <th class="py-2 px-4 border-b">Email</th>
                    <th class="py-2 px-4 border-b">Role</th>
                    <th class="py-2 px-4 border-b">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td class="py-2 px-4 border-b">{{ user.id }}</td>
                    <td class="py-2 px-4 border-b">{{ user.name }}</td>
                    <td class="py-2 px-4 border-b">{{ user.email }}</td>
                    <td class="py-2 px-4 border-b">{{ user.role }}</td>
                    <td class="py-2 px-4 border-b">
                        <button @click="editUser(user)" class="text-yellow-500 hover:text-yellow-700">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button @click="deleteUser(user.id)" class="text-red-500 hover:text-red-700 ml-2">
                            <i class="fas fa-trash"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>

        <!-- Add User Modal -->
        <div v-if="showAddUserModal" class="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
            <div class="bg-white p-6 rounded-lg shadow-lg w-96">
                <h3 class="text-xl font-semibold mb-4">Add User</h3>
                <form @submit.prevent="addUser">
                    <div class="mb-4">
                        <label class="block text-gray-700">Name</label>
                        <input v-model="newUser.name" type="text" class="w-full px-4 py-2 border rounded-lg" required>
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700">Email</label>
                        <input v-model="newUser.email" type="email" class="w-full px-4 py-2 border rounded-lg" required>
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700">Role</label>
                        <input v-model="newUser.role" type="text" class="w-full px-4 py-2 border rounded-lg" required>
                    </div>
                    <div class="flex justify-end">
                        <button type="button" @click="showAddUserModal = false" class="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 mr-2">Cancel</button>
                        <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add</button>
                    </div>
                </form>
            </div>
        </div>

        <!-- Edit User Modal -->
        <div v-if="showEditUserModal" class="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
            <div class="bg-white p-6 rounded-lg shadow-lg w-96">
                <h3 class="text-xl font-semibold mb-4">Edit User</h3>
                <form @submit.prevent="updateUser">
                    <div class="mb-4">
                        <label class="block text-gray-700">Name</label>
                        <input v-model="currentUser.name" type="text" class="w-full px-4 py-2 border rounded-lg" required>
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700">Email</label>
                        <input v-model="currentUser.email" type="email" class="w-full px-4 py-2 border rounded-lg" required>
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700">Role</label>
                        <input v-model="currentUser.role" type="text" class="w-full px-4 py-2 border rounded-lg" required>
                    </div>
                    <div class="flex justify-end">
                        <button type="button" @click="showEditUserModal = false" class="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 mr-2">Cancel</button>
                        <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>