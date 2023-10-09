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
        <a v-for="(item,index) in imagesList" :href="item.href">
          <b-carousel-slide
              :key="index" :caption="item.name" :img-src="item.path" :img-alt="item.name">
          </b-carousel-slide>
        </a>

      </b-carousel>
    </div>

    <div id="book-manage">
      <Manage :rows="rows"></Manage>
    </div>
  </div>
</template>

<script>
// 第一种方式导入图片
import bg1 from '@/assets/images/bg1.png';
import _ from 'lodash';
import Manage from '@/components/Manage/Manage.vue';

let fn = null;
export default {
  name: "Home",
  components: {
    Manage
  },
  data() {
    return {
      slide: 0,
      sliding: null,
      imagesList: [
        { name: '樱花动漫', path: bg1, href: 'http://www.yinghuacd.com/' },
          // 第二种方式导入图片
        { name: 'AGE动漫', path: require('@/assets/images/bg2.png'), href: 'https://rentry.org/agefans' },
        { name: 'MX动漫',  path: require('@/assets/images/bg3.jpg'), href: 'http://www.mxdm.tv' },
        { name: '动漫岛',  path: require('@/assets/images/bg3.jpg'), href: 'http://www.dmd8.com/' },
      ],
      rows: [
        { cols: [
            { title: '常规书籍', toPath: '/list/common?titleName=常规书籍', id: 'common'},
            { title: '纯爱书籍', toPath: '/list/love?titleName=纯爱书籍', id: 'love'}
          ]
        },
        { cols: [
            { title: '牛头人书籍', toPath: '/list/ntr?titleName=牛头人书籍', id: 'ntr'},
            { title: '轻小说书籍', toPath: '/list/light-novel?titleName=轻小说书籍', id: 'light-novel'}
          ]
        },
        { cols: [
            { title: '废卢书籍', toPath: '/list/feilu?titleName=废卢书籍', id: 'feilu'},
            { title: '书籍上传', toPath: '/upload', id: 'upload'},
          ]
        }
      ]
    }
  },
  methods: {
    // 这个方法是为了与activated,deactivated里面的方法一起来实现页面切换时记住鼠标的位置
    recordTopHandler() {
      return _.debounce( () => {
        this.$route.meta.top = window.scrollY;
      },50,{ trailing: true });
    },
    async getCity() {
      const { data: res } = await getCityAPI();
      console.log(res.info.city);
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
</style>