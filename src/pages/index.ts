import Routing from "./index.vue";

export const routes = [
  { path: "/", component: () => import("./task-list-page"), name: "Home" },
  {
    path: "/finished",
    component: () => import("./finished-tasks-page"),
    name: "Finished Tasks",
  },
  {
    path: "/unfinished",
    component: () => import("./unFinished-tasks-page"),
    name: "Unfinished Tasks",
  },
];

export { Routing };
