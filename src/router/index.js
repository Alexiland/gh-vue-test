import Vue from 'vue'
import Router from 'vue-router'
// 导入刚才编写的组件
import AppIndex from '@/components/home/AppIndex'
import Login from '@/components/Login'
import Home from '@/components/Home'
import LibraryIndex from '../components/library/LibraryIndex'
import AboutMe from '../components/about me/AboutMe'
import Contact from '../components/contact/Contact'
import playground from '../components/playground/playground'
import UserCenter from '../components/user center/UserCenter'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // 下面都是固定的写法
    {
      path: '/home',
      name: 'Home',
      component: Home,
      // home页面并不需要被访问
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'AppIndex',
          component: AppIndex,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/library',
          name: 'Library',
          component: LibraryIndex,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/alex',
          name: 'About me',
          component: AboutMe,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/contactme',
          name: 'Contact me',
          component: Contact,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/playground',
          name: 'Playground',
          component: playground,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/admin',
          name: 'UserCenter',
          component: UserCenter,
          meta: {
            requireAuth: true
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
