<template>
    <div class="card mb-3 h-100">
        <img v-if="todo.image" class="card-img-top h-50 p-1" :src="todo.image" alt="Card image cap">
        <div v-else></div>
        <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{ todo.title }}</h5>
            <div class="card-text flex-grow-1 d-flex flex-column">
                <p>Task description</p>
                {{ todo.description }}
                <small class="text-muted pt-1">Created At: {{ todo.createdAt }}</small>
            </div>


            <div class="d-flex gap-1"><button v-if="todo.status === 'todo'" class="btn btn-primary"
                    @click="updateStatus('in-progress')">Start</button>
                <button v-else-if="todo.status === 'in-progress'" class="btn btn-success"
                    @click="updateStatus('completed')">Complete</button>
                <button class="btn btn-light" @click="removeTodo">Remove</button>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    props: ['todo'],
    methods: {
        updateStatus(status) {
            this.$emit('updateStatus', { id: this.todo.id, status });
        },
        removeTodo() {
            this.$emit('remove', this.todo.id);
        }
    }
};
</script>