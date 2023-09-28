<template>
  <div class="list-container">
    <van-nav-bar
        title="山海书阁"
        fixed
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
    >
      <template #right>
        <van-icon name="wap-home-o" size="18" />
      </template>
    </van-nav-bar>

    <div class="bookList">
      <!-- onLoad方法要想被触发,loading值必须是false -->
      <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多的数据了"
          @load="onLoad"
      >
        <van-cell v-for="(item,index) in cityList" :key="index" :title="item.name" />
      </van-list>
    </div>
  </div>
</template>

<script>
import { getCityAPI } from '@/api/city/city-api';

export default {
  name: "BookList",
  created() {
    this.loading = false;
  },
  data() {
    return {
      loading: true,
      finished: false,
      cityList: [
        { id: 1, name: '长沙'},
        { id: 2, name: '怀化'},
        { id: 3, name: '株洲'},
        { id: 4, name: '衡阳'},
        { id: 5, name: '邵阳'},
        { id: 6, name: '湘潭'},
        { id: 7, name: '常德'},
        { id: 8, name: '常德'},
        { id: 9, name: '常德'},
        { id: 10, name: '常德'},
        { id: 11, name: '常德'},
        { id: 12, name: '常德'},
        { id: 13, name: '常德'},
        { id: 14, name: '常德'},
        { id: 15, name: '常德'},
        { id: 16, name: '常德'},
        { id: 17, name: '常德'},
        { id: 18, name: '常德'},
        { id: 19, name: '常德'},
        { id: 20, name: '常德'},
        { id: 21, name: '常德'},
        { id: 22, name: '常德'},
      ]
    }
  },
  methods: {
    async getCity() {
      console.log('开始请求IP地址');
      const {data: res } = await getCityAPI();
      const newCity = [];
      const city = { id: 23, name: res.info.city}
      newCity.push(city);
      this.cityList = [...this.cityList,...newCity];
      this.loading = false;
      if (this.cityList.length > 30) {
        this.finished = true;
      }
    },
    onLoad() {
      this.getCity();
    },
    onClickLeft() {
      this.$router.back();
    },
    onClickRight() {
      this.$router.replace("/home");
    }
  },
  props: {
    id: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="less">
.list-container {
  padding: 46px 0 50px 0;
}

/deep/ .van-nav-bar {
  background-color: #0FA5FF;
}

/deep/ .van-nav-bar__title {
  color: #ffffff;
}

/deep/ .van-nav-bar__text {
  color: #ffffff;
}

/deep/ .van-nav-bar__arrow {
  color: #ffffff;
}

/deep/ .van-icon-wap-home-o {
  color: #ffffff;
  font-size: 20px !important;
}
</style>