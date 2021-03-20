import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Start from '../components/Start.vue';
import Explanation from '../components/Explanation.vue';
import Cause from '../components/Cause.vue';
import Consequence from '../components/Consequence.vue';
import Demo from '../components/Demonstration.vue';
import Solution from '../components/Solution.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Start',
    component: Start,
  },
  {
    path: '/explanation',
    name: 'Explanation',
    component: Explanation,

    children: [
      {
        path: '',
        name: 'Cause',
        component: Cause,
      },
      {
        path: 'consequence',
        name: 'Consequence',
        component: Consequence,
      },
    ],
  },
  {
    path: '/demo',
    name: 'Demonstration',
    component: Demo,
  },
  {
    path: '/solution',
    name: 'Solution',
    component: Solution,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
