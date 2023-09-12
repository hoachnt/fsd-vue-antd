import { createApp } from "vue";
import { registerComponents, router, store } from "./providers";
import App from "./index.vue";

const initializeApp = createApp(App).use(router).use(store);

registerComponents(initializeApp)

export const app = initializeApp