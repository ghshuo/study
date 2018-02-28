<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
        <router-link to="/">首页</router-link>
        <router-link to="/Second">hi页面</router-link>
        <router-link :to="{name:'Third',params:{username:'hsgeng',id:'25'}}">第三个页面</router-link>
        <router-link to="/Second/Fourth">第四个页面</router-link>
    </div>
     <!-- 接受参数 -->
    <p>{{$route.name}}</p>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
</style>
