<template>
    <div>
        <h2>{{ statusLabel }}</h2>

        <div v-if="filteredTodos.length > 0" class="row">
            <div class="col-12 col-md-4 col-lg-3 gy-3 " v-for="todo in filteredTodos" :key="todo.id">
                <TodoItem :todo="todo" @updateStatus="updateStatus" @remove="remove" />
            </div>
        </div>

        <div v-else class="empty-state">
            <p>No tasks available in this category.</p>
        </div>

    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import TodoItem from '../components/TodoItem.vue';

export default {
    components: { TodoItem },
    props: ['status'],
    computed: {
        ...mapGetters(['todos']),
        filteredTodos() {
            return this.todos.filter(todo => todo.status === this.status);
        },
        statusLabel() {
            switch (this.status) {
                case 'todo':
                    return 'Todo';
                case 'in-progress':
                    return 'In Progress';
                case 'completed':
                    return 'Completed';
                default:
                    return '';
            }
        }
    },
    methods: {
        ...mapActions(['updateTodoStatus', 'removeTodo']),
        updateStatus(payload) {
            this.updateTodoStatus(payload);
        },
        remove(id) {
            this.removeTodo(id);
        }
    }
};
</script>

<style scoped>
.empty-state {
    text-align: center;
    margin-top: 2rem;
    color: #999;
    font-size: 1.2rem;
}
</style>