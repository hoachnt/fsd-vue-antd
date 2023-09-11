import { app } from "./app/index";
import { registerComponents } from "./app/providers";

registerComponents(app)

app.mount("#app");
