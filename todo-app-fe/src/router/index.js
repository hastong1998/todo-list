import { createRouter, createWebHistory } from "vue-router";
import TodoList from "../views/TodoList.vue";

const routes = [
  { path: "/", redirect: "/todo" },
  {
    path: "/todo",
    name: "Todo",
    component: TodoList,
    props: { status: "todo" },
  },
  {
    path: "/in-progress",
    name: "InProgress",
    component: TodoList,
    props: { status: "in-progress" },
  },
  {
    path: "/completed",
    name: "Completed",
    component: TodoList,
    props: { status: "completed" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
