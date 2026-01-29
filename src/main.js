import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/main.css";
import "./assets/media.css";
import "@fortawesome/fontawesome-free/css/all.css";
import router from "./routes/routeConfig";

const app = createApp(App);
app.use(router);
app.mount("#app");
