// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入element-ui
import {
  Button,
  Select,
  Container,
  Slider,
  Header,
  Footer,
  Aside,
  Main
} from 'element-ui';
Vue.use(Button);
Vue.use(Select);
Vue.use(Container);
Vue.use(Main);
Vue.use(Header);
Vue.use(Footer);
Vue.use(Aside);
Vue.use(Slider);

// 引入vue-drag-resize
import VueDragResize from 'vue-drag-resize'
Vue.component('vue-drag-resize', VueDragResize)

// 引入echarts
import ECharts from 'vue-echarts' // 在 webpack 环境下指向 components/ECharts.vue
// 注册组件后即可使用
Vue.component('v-chart', ECharts)

// 引入自定义css
// import '@/common/styles/index.scss' // 自定义 css

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
