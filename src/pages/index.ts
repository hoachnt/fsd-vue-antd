import Routing from "./index.vue";

export const routes = [
    { path: "/", component: () => import("./task-list-page"), name: "Home", },
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
    {
        path: "/task/:id",
        component: () => import("./task-page"),
        name: "Task Details",
        meta: {
            transition: "from-top"
        }
    },
];

export { Routing };
