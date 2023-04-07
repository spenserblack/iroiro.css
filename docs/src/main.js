import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import "../../css/bootstrap5.css";

const app = createApp(App);
app.use(router);

app.mount("#app");
