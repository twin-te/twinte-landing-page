import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import App from './pages/index.vue';
import Terms from './pages/Terms.vue';
import Policy from './pages/Policy.vue';
// import Sponsor from "./pages/Sponsor.vue";

const history = createWebHistory();

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes: RouteRecordRaw[] = [
  { path: '/', component: App },
  { path: '/terms', component: Terms },
  { path: '/policy', component: Policy },
  // { path: "/sponsor", component: Sponsor },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
export const router = createRouter({
  history,
  routes,
});

export default router;
