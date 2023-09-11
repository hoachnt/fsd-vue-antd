import { App, defineAsyncComponent } from "vue";


export function registerComponents(app: App) {
    app
        .component("LazyModal", defineAsyncComponent(() => import('../../shared/ui/modal/ui/index.vue')))
        .component("LazyTaskCardDetails", defineAsyncComponent(() => import('../../entities/tasks/ui/task-card-details/index.vue')))

}