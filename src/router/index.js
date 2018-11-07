import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Detail from '@/components/Detail'
import Film from '@/components/Film/Film'
import Shop from '@/components/Shop'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Detail/:id',
      name: 'Detail',
      component: Detail,
      props: true
    },
    {
      path: '/Film',
      name: 'Film',
      component: Film,
      props: true
    },
    {
      path: '/Shop',
      name: 'Shop',
      component: Shop,
      props: true
    },
  ]
})
