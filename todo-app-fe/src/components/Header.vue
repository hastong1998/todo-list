<template>
    <header class="bg-dark text-white p-3">
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-dark">
                <router-link to="/" class="navbar-brand">Stark</router-link>
                <button class="navbar-toggler" type="button" data-bs-target="#collapseTarget" data-bs-toggle="collapse"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse mt-3 mt-md-0" id="collapseTarget">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link to="/todo" class="nav-link d-flex align-items-center"
                                active-class="active-link">
                                Todo
                                <span v-if="todoCount > 0" class="badge bg-danger ms-2">{{ todoCount }}</span>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/in-progress" class="nav-link d-flex align-items-center"
                                active-class="active-link">
                                In Progress
                                <span v-if="inProgressCount > 0" class="badge bg-danger ms-2">{{ inProgressCount
                                    }}</span>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/completed" class="nav-link" active-class="active-link">Completed <span
                                    v-if="completedCount > 0" class="badge bg-danger ms-2">{{ completedCount
                                    }}</span></router-link>
                        </li>
                    </ul>
                    <div class="d-flex align-items-center">
                        <button class="btn btn-primary me-3" data-bs-toggle="modal" data-bs-target="#addTodoModal">Add
                            Todo</button>
                        <span class="me-3">Tony Stark</span>
                        <button class="btn btn-outline-light">Log Out</button>
                    </div>
                </div>
            </nav>
            <modal-add-todo />
        </div>
    </header>
</template>

<script>
import { mapGetters } from 'vuex';
import ModalAddTodo from './ModalAddTodo.vue';
export default {
    name: 'Header',
    components: {
        ModalAddTodo
    },
    computed: {
        ...mapGetters(['todoCount', 'inProgressCount', 'completedCount'])
    }
};
</script>

<style scoped>
.header {
    background-color: #333;
    color: #fff;
}

.active-link {
    background-color: #000 !important;
}

.badge {
    font-size: 0.8em;
    padding: 0.4em;
}
</style>