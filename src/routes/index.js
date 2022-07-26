import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home.vue'
import Gallery from './Gallery.vue'
import Message from './Message.vue'
import Letters from './Letters.vue'

export default createRouter({
  //히스토리모드를 함수로 실행해서 제공
  history: createWebHistory(),
 scrollBehavior: () => ({top: 0}),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/letters',
      component: Letters
    },
    {
      path: '/video',
      component: Gallery
    },
    {
      path: '/msg',
      component: Message
    },
  ]
})
