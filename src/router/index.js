
import {createRouter,createWebHistory} from 'vue-router'
import layout from '@/layout/index';
//import modules from "./modules/modules";
export const constantRoutes = [
  {
    path: '/',
    component: layout,
    redirect: 'index',
    name: 'zqqt1',
    meta: {
        title: '前台初始化项目',
        icon: 'bigdata'
    },
    children:[
      {
        path: '/index',
        component: () => import('@/views/index/index'),
        name: 'indexf',
        // meta: { title: '数据交换管理', noCache: true }
      },
      {
        path: '/list',
        component: () => import('@/views/list/list'),
        name: 'listf',
        // meta: { title: '数据交换管理', noCache: true }
      },
      {
        path: '/detail',
        component: () => import('@/views/detail/detail'),
        name: 'detailf',
        // meta: { title: '数据交换管理', noCache: true }
      },
    ]
  },
  // modules,
]

const router = new createRouter({
  history:createWebHistory("#"),
  //mode: 'history',
  base: process.env.BASE_URL,
  routes:constantRoutes
})

export default router
