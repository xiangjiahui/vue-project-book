<template>
  <div id="app">

    <keep-alive include="Home,Search,User">
      <router-view></router-view>
    </keep-alive>


    <!-- 底部导航栏 -->
    <van-tabbar  route>
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/un">未定义</van-tabbar-item>
      <van-tabbar-item icon="search" to="/search">搜索</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/user">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Home from '@/views/Home/Home.vue';
export default {
  name: 'App',
  components: {
    Home
  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
