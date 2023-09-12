import { defineAsyncComponent } from "vue";
import Routing from "./index.vue";
import { Spin } from "ant-design-vue";

const TaskListPage = defineAsyncComponent({
    loader: () => import("./task-list-page"),
    loadingComponent: Spin,
})
const FinishedTasksPage = defineAsyncComponent({
    loader: () => import("./finished-tasks-page"),
    loadingComponent: Spin
})
const UnFinishedTasksPage = defineAsyncComponent({
    loader: () => import("./unFinished-tasks-page"),
    loadingComponent: Spin
})
const TaskPage = defineAsyncComponent({
    loader: () => import("./task-page"),
    loadingComponent: Spin
})

export const routes = [
    {
        path: "/",
        component: TaskListPage,
        name: "Home",
    },
    {
        path: "/finished",
        component: FinishedTasksPage,
        name: "Finished Tasks",
    },
    {
        path: "/unfinished",
        component: UnFinishedTasksPage,
        name: "Unfinished Tasks",
    },
    {
        path: "/task/:id",
        component: TaskPage,
        name: "Task Details",
        meta: {
            transition: "from-top"
        }
    },
];

export { Routing };
