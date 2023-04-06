import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import "../../css/iroiro.css";
import "./main.scss";

const app = createApp(App);
app.config.globalProperties.$iroiro = "//github.com/antfu/iroiro";
app.use(router);

app.mount("#app");
