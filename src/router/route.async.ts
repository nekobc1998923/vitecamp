// 需要鉴权的业务路由
import { RouteRecordRaw } from 'vue-router';

const asyncRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    meta: {},
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    meta: {
      title: '首页',
      icon: '',
    },
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/markdown',
    name: 'markdown',
    meta: {
      title: 'markdown示例',
      icon: '',
    },
    component: () => import('@/views/example/MarkdownPage.vue'),
  },
  {
    path: '/icon',
    name: 'icon',
    meta: {
      title: 'icon示例',
      icon: '',
    },
    component: () => import('@/views/example/IconPage.vue'),
  },
  {
    path: '/windi',
    name: 'windi',
    meta: {
      title: 'Windi CSS示例',
      icon: '',
    },
    component: () => import('@/views/example/WindiPage.vue'),
  },
  {
    path: '/svg',
    name: 'svg',
    meta: {
      title: 'svg示例',
      icon: '',
    },
    component: () => import('@/views/example/SvgPage.vue'),
  },
];

export default asyncRoutes;
