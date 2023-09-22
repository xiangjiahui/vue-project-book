<template>
  <div class="home-container">
    <!-- 头部区域 -->
    <van-nav-bar
        title="山海书阁"
        fixed
    >
    </van-nav-bar>

    <!-- 轮播图区域 -->
    <div>
      <b-carousel
          id="carousel-fade"
          v-model="slide"
          :interval="3000"
      >
        <b-carousel-slide v-for="(item,index) in list"
            :key="index" :caption="item.name" :img-src="item.path" :img-alt="item.name">
        </b-carousel-slide>
      </b-carousel>
    </div>

    <div id="book-manage">
      <van-row>
        <van-col span="12" class="book-common split-right split-bottom">常规</van-col>
        <van-col span="12" class="book-love split-bottom">纯爱</van-col>
      </van-row>
      <van-row>
        <van-col span="12" class="book-ntr split-right split-bottom">牛头人</van-col>
        <van-col span="12" class="book-fl split-bottom">飞卢</van-col>
      </van-row>
      <van-row>
        <van-col span="12" class="book-light split-right split-bottom">轻小说</van-col>
        <van-col span="12" class="book-original split-bottom">原创</van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
// 第一种方式导入图片
import bg1 from '@/assets/images/bg1.png';
import _ from 'lodash';
let fn = null;
export default {
  name: "Home",
  data() {
    return {
      slide: 0,
      sliding: null,
      list: [
        { name: '樱花动漫', path: bg1 },
          // 第二种方式导入图片
        { name: 'AGE动漫', path: require('@/assets/images/bg2.png'), src: 'https://www.yinghuacd.com/' },
        { name: 'MX动漫',  path: require('@/assets/images/bg3.jpg') },
        { name: '动漫岛',  path: require('@/assets/images/bg3.jpg') },
      ]
    }
  },
  methods: {
    // 这个方法是为了与activated,deactivated里面的方法一起来实现页面切换时记住鼠标的位置
    recordTopHandler() {
      return _.debounce( () => {
        this.$route.meta.top = window.scrollY;
      },50,{ trailing: true });
    }
  },
  // 组件被缓存时的激活周期函数
  activated() {
    fn = this.recordTopHandler();
    window.addEventListener('scroll',fn);
  },
  // 组件被缓存时的缓存周期函数
  deactivated() {
    window.removeEventListener('scroll',fn);
  }
}
</script>

<style scoped lang="less">
.home-container {
  padding: 46px 0 50px 0;
}
#book-manage {
  height: 200px;
}
.split-right {
  border-right: 1px solid #dddddd;
}
.split-bottom {
  border-bottom: 1px solid #dddddd;
}
</style>