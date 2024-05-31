import { createStore } from "vuex";

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

export default createStore({
  state: {
    todos: [],
    news: [],
  },
  mutations: {
    setTodos(state, todos) {
      state.todos = todos;
    },
    addTodo(state, todo) {
      state.todos.push(todo);
    },
    updateTodoStatus(state, { id, status }) {
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.status = status;
      }
    },
    removeTodo(state, id) {
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    setNews(state, news) {
      state.news = news;
    },
  },
  actions: {
    fetchTodos({ commit }) {
      fetch(`${apiBaseUrl}/todos`)
        .then((response) => response.json())
        .then((data) => commit("setTodos", data));
    },
    fetchNews({ commit }) {
      fetch(`${apiBaseUrl}/news`)
        .then((response) => response.json())
        .then((data) => commit("setNews", data));
    },
    addTodo({ commit }, todo) {
      fetch(`${apiBaseUrl}/todos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
      })
        .then((response) => response.json())
        .then((data) => commit("addTodo", data));
    },
    updateTodoStatus({ commit }, payload) {
      fetch(`${apiBaseUrl}/todos/${payload.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: payload.status }),
      })
        .then((response) => response.json())
        .then(() => commit("updateTodoStatus", payload));
    },
    removeTodo({ commit }, id) {
      fetch(`${apiBaseUrl}/todos/${id}`, {
        method: "DELETE",
      }).then(() => commit("removeTodo", id));
    },
  },
  getters: {
    todos: (state) => state.todos,
    news: (state) => state.news,
    todoCount: (state) =>
      state.todos.filter((todo) => todo.status === "todo").length,
    inProgressCount: (state) =>
      state.todos.filter((todo) => todo.status === "in-progress").length,
    completedCount: (state) =>
      state.todos.filter((todo) => todo.status === "completed").length,
  },
});
