import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home'
import Abouts from './components/abouts'
import HelloWorld from './components/HelloWorld/HelloWorld'

Vue.use(VueRouter);

const routes = [
  {path: '/', name: 'home', component: Home},
  {path: '/abouts', name: 'abouts', component: Abouts},
  {path: '/HelloWorld/:id', name: 'helloworld', component: HelloWorld}
];

const router = new VueRouter({
	routes,
	mode: 'history'
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

