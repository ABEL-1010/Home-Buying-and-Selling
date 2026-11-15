<script setup>

</script>
<template>
    
    <div>
        <h2 class="text-xl font-bold">User Management</h2>
        <button @click="showAddUserModal">Add User</button>
        
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.role }}</td>
                    <td>
                        <button @click="editUser(user)">Edit</button>
                        <button @click="deleteUser(user.id)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <!-- Add/Edit User Modal -->
        <UserForm v-if="isModalOpen" :user="selectedUser" @close="isModalOpen = false" @save="fetchUsers" />
    </div>
</template>