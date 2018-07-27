import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/views/Home.vue';
import Receive from '@/views/Receive.vue';
import Scan from '@/views/Scan.vue';
import Send from '@/views/Send.vue';
import Settings from '@/views/Settings.vue';
import InsertPin from '@/views/InsertPin.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/receive',
      name: 'receive',
      component: Receive,
    },
    {
      path: '/scan',
      name: 'scan',
      component: Scan,
    },
    {
      path: '/send',
      name: 'send',
      component: Send,
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings,
    },
    {
      path: '/insert-pin',
      name: 'insert pin',
      component: InsertPin,
    },
  ],
});
