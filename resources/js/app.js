require('./bootstrap');
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import Vue from 'vue';
import App from './Vue/app';
import { createApp } from 'vue'
library.add(faPlusSquare, faTrash)

const eventBus = createApp(App)
eventBus.component("font-awesome-icon", FontAwesomeIcon)

eventBus.mount('#app')