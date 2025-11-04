<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const posts = ref([
    { id: 1, title: 'First Post', content: 'This is the first post.', file: null },
    { id: 2, title: 'Second Post', content: 'This is the second post.', file: null },
]);

const showAddPostModal = ref(false);
const showEditPostModal = ref(false);
const newPost = ref({ title: '', content: '', file: null });
const currentPost = ref({ id: null, title: '', content: '', file: null });

const addPost = () => {
    const newId = posts.value.length ? posts.value[posts.value.length - 1].id + 1 : 1;
    posts.value.push({ id: newId, ...newPost.value });
    newPost.value = { title: '', content: '', file: null };
    showAddPostModal.value = false;
 //   router.push('/sell'); // Redirect to /sell after adding a post
};

const editPost = (post) => {
    currentPost.value = { ...post }; // Copy the post data for editing
    showEditPostModal.value = true; // Open the edit modal
};

const updatePost = () => {
    const index = posts.value.findIndex(post => post.id === currentPost.value.id);
    if (index !== -1) {
        posts.value[index] = { ...currentPost.value }; // Update the post data
    }
    showEditPostModal.value = false; // Close the modal
};

const deletePost = (id) => {
    posts.value = posts.value.filter(post => post.id !== id); // Remove the post by id
};
</script>

<template>
    <div>
        <h2 class="text-xl font-bold mb-4">Content Management</h2>
        <button @click="showAddPostModal = true" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mb-4">
            Add Post
        </button>
        
        <table class="min-w-full bg-white">
            <thead>
                <tr>
                    <th class="py-2 px-4 border-b">ID</th>
                    <th class="py-2 px-4 border-b">Title</th>
                    <th class="py-2 px-4 border-b">Content</th>
                    <th class="py-2 px-4 border-b">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="post in posts" :key="post.id">
                    <td class="py-2 px-4 border-b">{{ post.id }}</td>
                    <td class="py-2 px-4 border-b">{{ post.title }}</td>
                    <td class="py-2 px-4 border-b">{{ post.content }}</td>
                    <td class="py-2 px-4 border-b">
                        <button @click="editPost(post)" class="text-yellow-500 hover:text-yellow-700">
                            Edit
                        </button>
                        <button @click="deletePost(post.id)" class="text-red-500 hover:text-red-700 ml-2">
                            Delete
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>

        <!-- Add Post Modal -->
        <div v-if="showAddPostModal" class="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
            <div class="bg-white p-6 rounded-lg shadow-lg w-96">
                <h3 class="text-xl font-semibold mb-4">Add Post</h3>
                <form @submit.prevent="addPost">
                    <div class="mb-4">
                        <label class="block text-gray-700">Title</label>
                        <input v-model="newPost.title" type="text" class="w-full px-4 py-2 border rounded-lg" required>
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700">Content</label>
                        <textarea v-model="newPost.content" class="w-full px-4 py-2 border rounded-lg" required></textarea>
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700">File</label>
                        <input type="file" @change="event => newPost.file = event.target.files[0]" class="w-full px-4 py-2 border rounded-lg">
                    </div>
                    <div class="flex justify-end">
                        <button type="button" @click="showAddPostModal = false" class="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 mr-2">Cancel</button>
                        <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add</button>
                    </div>
                </form>
            </div>
        </div>

        <!-- Edit Post Modal -->
        <div v-if="showEditPostModal" class="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
            <div class="bg-white p-6 rounded-lg shadow-lg w-96">
                <h3 class="text-xl font-semibold mb-4">Edit Post</h3>
                <form @submit.prevent="updatePost">
                    <div class="mb-4">
                        <label class="block text-gray-700">Title</label>
                        <input v-model="currentPost.title" type="text" class="w-full px-4 py-2 border rounded-lg" required>
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700">Content</label>
                        <textarea v-model="currentPost.content" class="w-full px-4 py-2 border rounded-lg" required></textarea>
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700">File</label>
                        <input type="file" @change="event => currentPost.file = event.target.files[0]" class="w-full px-4 py-2 border rounded-lg">
                    </div>
                    <div class="flex justify-end">
                        <button type="button" @click="showEditPostModal = false" class="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 mr-2">Cancel</button>
                        <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
