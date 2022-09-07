import { createApp } from 'vue'
import App from './App.vue'
import 'element-plus/theme-chalk/index.css';
import Element from 'element-plus'
import * as Echarts from 'echarts'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import store from './store'
import 'dayjs/locale/zh-cn';
//import 不支持绝对路径即不能写成 import 'lib/css/animate.css'
import './lib/css/fonts.css'
import './lib/css/commons.css'
import './lib/css/animate.css'

import Router from './router'
const app = createApp(App).use(Element, { locale }).use(Router).use(store).mount('#app');
app.$Echarts = Echarts;