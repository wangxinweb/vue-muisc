import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import rank from '@/components/RankingList'
import artist from '@/components/Artist'
import station from '@/components/Station'
import type from '@/components/Type'
import mv from '@/components/AllMv'
import math from '@/components/Math'
import detail from '@/components/Detail'
import mvdetail from '@/components/MvDetail'
import artdetail from '@/components/ArtistDetail'

Vue.use(Router)

export default new Router({
  linkActiveClass: '',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/rank',
      name: 'rank',
      component: rank
    },
    {
      path: '/artist',
      name: 'artist',
      component: artist
    },
    {
      path: '/station',
      name: 'station',
      component: station
    },
    {
      path: '/type',
      name: 'type',
      component: type
    },
    {
      path: '/mv',
      name: 'mv',
      component: mv
    },
    {
      path: '/math',
      name: 'math',
      component: math
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path:'/mvdetail',
      name:'mvdetail',
      component:mvdetail
    },
    {
      path:'/artdetail',
      name:'artdetail',
      component:artdetail
    },
  ]
})
