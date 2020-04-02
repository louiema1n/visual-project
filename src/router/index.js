import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import Echarts from '@/components/Echarts'
import BasicLine from '@/plugins/line/BasicLine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Test
    }
  ]
})
