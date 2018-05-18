<template>
  <div id="app">
    <h1 style="color: green">{{ msg }}</h1>
    <div class="v-router">
         <p>Current route name: {{ $route.name }}</p>
         <ul class="navbar">
           <li>
             <router-link :to="{ name: 'home' }">首页</router-link>
           </li>
           <li>
             <router-link :to="{ name: 'abouts' }">关于我们</router-link>
           </li>
           <li>
             <router-link :to="{ name: 'helloworld', params: {id: obj.name}}">你好</router-link>
           </li>
         </ul>
       <div class="container">
          <router-view/>
       </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'vue-router基础学习',
      obj: {
       name:'vue-router' 
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.v-router li{
  display: inline-block;
}
</style>
