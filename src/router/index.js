import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import Echarts from '@/components/Echarts'
import BasicLine from '@/plugins/line/BasicLine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
})
