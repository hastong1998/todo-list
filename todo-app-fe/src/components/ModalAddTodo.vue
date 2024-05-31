<template>
    <div class="modal fade" id="addTodoModal" tabindex="-1" aria-labelledby="addTodoModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title text-black" id="addTodoModalLabel">Add New Todo</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" id="close_modal_button"
                        aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="addNewTodo">
                        <div class="mb-3">
                            <label for="title" class="form-label text-left text-black font-weight-bold ">Title</label>
                            <input type="text" class="form-control" id="title" v-model="title" required>
                        </div>
                        <div class="mb-3">
                            <label for="description"
                                class="form-label text-black text-left font-weight-bold ">Description</label>
                            <textarea class="form-control" id="description" v-model="description" required></textarea>
                        </div>
                        <div class="mb-3">
                            <label for="image" class="form-label text-black text-left font-weight-bold ">Image</label>
                            <input type="text" class="form-control" id="image" v-model="image">
                        </div>
                        <button type="submit" class="btn btn-primary">Add Todo</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: '',
            description: '',
            image: ''
        };
    },
    methods: {
        addNewTodo() {
            const newTodo = {
                title: this.title,
                description: this.description,
                image: this.image,
                createdAt: new Date().toLocaleString(),
                status: 'todo'
            };
            this.$store.dispatch('addTodo', newTodo)
                .then(() => {
                    this.title = '';
                    this.description = '';
                    this.image = '';
                    this.closeModal();
                });
        },
        closeModal() {
            const modal = document.getElementById('close_modal_button');
            modal.click();
        }
    }
};
</script>
