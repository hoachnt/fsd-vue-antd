import Routing from "./index.vue";

export const routes = [
  { path: "/", component: () => import("./task-list-page") },
];

export { Routing };
