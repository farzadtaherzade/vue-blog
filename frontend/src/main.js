import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios'


axios.defaults.baseURL = 'http://localhost:5000/api';
axios.defaults.headers.common['x-auth-token'] = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjI4MDVmMjNjMTM3MDhkMzMyOGY4YWIyIiwiZW1haWwiOiJpb2hkdWFzZ2Rhc3VpaGRhc2Rhc2pkYWlzZEBnbWFpbC5jb20iLCJpYXQiOjE2NTI1ODAyMDN9.gkx1s42slTDxpPtLwwYq7l2O3V2UXPsTbwG6H-TlCg4";
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const app = createApp(App);

app.use(router);
app.use(store);
app.mount("#app");
