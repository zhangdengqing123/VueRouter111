# vue-router

> Vue路由基础

## Build Setup

``` bash
# install dependencies
npm install

install vue-router --save-dev  安装vue路由

# serve with hot reload at localhost:8080
npm run dev
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

ps: Vue路由使用

  1.当你把vue-router引进来，我们需要做的是，将组件（components）映射到路由（routes）,然后告诉vue-router在哪里渲染它们。

  2.下面例子：

  <p><script src="https://unpkg.com/vue/dist/vue.js"></script></p>

   <script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>

  	<div id="vueRouter">
       <h1>hello router</h1>
       <div>
         <!--使用 router-link组件导航-->
         <!--通过传入 to 属性指定链接.-->
         <!--<router-link>默认会渲染a标签-->
         <router-link to="/home">Go to Home</router-link>
         <router-link to="/about">Go to About</router-link>
       </div>
       <!--将路由组件内容渲染到这里-->
       <router-view/>   
   </div>

  javascript里面编写路由入口


  
   *定义一个路由
   *每个路由映射到一个组件。其中"component"可以是通过 Vue.extend() 创建的构造器，或者只是一个组件配置的对象

   const routes = [
      {path: '\home', component: Home},  
      {path: '\about', component: about}
   ]

  *创建 router 实例，然后传入 'routes' 配置，你还可以配置参数，不过先么简单吧。

  const router = new VueRouter({
    routes   //把routes传入进来
  })

 *创建挂载根实例

   new Vue({
     router
  }).$mount('#vueRouter')

 //完成以后可以启动了


 命名路由

 有时候，通过一个名称来标识一个路由显得更方便些，特别是在链接一个路由，或者是执行一些跳转的时候，你可以在创建Router实例的时候，

 在 routes 配置中给某个路由设置名称

 const router = new VueRouter({
   routes: [
     {
       path: 'home/:homeId',
       name: 'home',
       component: Home
     }
   ]
 })

 要链接到一个命名路由，可以给 router-link 的 to 属性传一个对象：

  <router-link :to="{name: 'home', params:{homeId: 123}}">Go to Home</router-link>

  这跟代码调用 router.push() 是一回事：

  router.push({ name: 'home', params: { userId: 123 }})

  这两种方式都会把路由导航到 /home/123 路径。





