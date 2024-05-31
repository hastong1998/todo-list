<template>
    <div>
        <h2>Add New Todo</h2>
        <form @submit.prevent="addNewTodo">
            <div class="mb-3">
                <label for="title" class="form-label">Title</label>
                <input type="text" class="form-control" id="title" v-model="title" required>
            </div>
            <div class="mb-3">
                <label for="description" class="form-label">Description</label>
                <textarea class="form-control" id="description" v-model="description" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Add Todo</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: '',
            description: ''
        };
    },
    methods: {
        addNewTodo() {
            const newTodo = {
                id: Date.now(),
                title: this.title,
                description: this.description,
                createdAt: new Date().toLocaleString(),
                status: 'todo'
            };
            this.$store.dispatch('addTodo', newTodo);
            this.title = '';
            this.description = '';
        }
    }
};
</script>