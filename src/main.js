import App from "./App.vue";

import { createApp } from "vue";

import store from "./store";

import { registerPlugins } from "@/plugins";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faBars,
  faXmark,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";

library.add(faArrowRight, faArrowLeft, faArrowUp, faBars, faXmark);

const app = createApp(App).component("font-awesome-icon", FontAwesomeIcon);

registerPlugins(app);

app.use(store);

app.mount("#app");
