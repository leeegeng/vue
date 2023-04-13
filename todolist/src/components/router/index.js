// 引入Vue和Vue Router
import Vue from 'vue';
import VueRouter from 'vue-router';

// 引入组件
import About from '../views/About.vue';
import Help from '../views/Help.vue';
import Home from '../views/Home.vue'
import PageContent from '../views/PageContent.vue'

// 使用Vue Router插件
Vue.use(VueRouter);

// 定义路由规则
const routes = [
  { path: '/about', component: About },
  { path: '/help', component: Help },
  { path: '/home', component: Home },
  { path: '/content', component: PageContent}
];

// 创建Vue Router实例
const router = new VueRouter({
  routes // 将路由规则传递给Vue Router实例
});

// 导出Vue Router实例，以便在Vue应用程序中使用
export default router;
