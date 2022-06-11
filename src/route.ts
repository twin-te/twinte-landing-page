import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { trackRouter } from 'vue-gtag-next';

import App from './pages/index.vue';
import Terms from './pages/Terms.vue';
import Policy from './pages/Policy.vue';
import APITerms from './pages/APITerms.vue';
import Sponsor from './pages/Sponsor.vue';
import Recruit from './pages/Recruit.vue';

const history = createWebHistory();

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes: RouteRecordRaw[] = [
  { path: '/', component: App },
  { path: '/terms', component: Terms },
  { path: '/policy', component: Policy },
  { path: '/api_terms', component: APITerms },
  { path: '/sponsor', component: Sponsor },
  { path: '/recruit', component: Recruit },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
export const router = createRouter({
  history,
  routes,
});

trackRouter(router);

export default router;
