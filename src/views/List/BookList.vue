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

    <van-sticky :offset-top="46">
      <div class="list-area">
        <p style="font-size: 20px;margin-bottom: 0">常规分区</p>
      </div>
    </van-sticky>

    <van-sticky :offset-top="81">
      <div class="head-tag">
        <van-row>
          <van-col span="5">名称</van-col>
          <van-col span="5">用户</van-col>
          <van-col span="5">时间</van-col>
          <van-col span="5">分类</van-col>
          <van-col span="4">下载</van-col>
        </van-row>
      </div>
    </van-sticky>


    <!-- onLoad方法要想被触发,loading值必须是false -->
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多的数据了"
          @load="onLoad"
      >
        <div class="bookList">
          <div class="book" v-for="(item,index) in books" :key="index">
            <van-row>
              <van-col span="5">
                <router-link to="/detail">牧神记</router-link>
              </van-col>
              <van-col span="5">admin</van-col>
              <van-col span="5">20230929</van-col>
              <van-col span="5">
                <van-tag type="success">常规</van-tag>
              </van-col>
              <van-col span="4">
                <van-tag color="#ffe1e1" text-color="#ad0000">999999</van-tag>
              </van-col>
            </van-row>
            <van-divider
                :style="{ color: '#1989fa', borderColor: '#C0C0C0' }"
            >
            </van-divider>
          </div>
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>

export default {
  name: "BookList",
  created() {
    this.loading = false;
  },
  data() {
    return {
      loading: true,
      finished: false,
      isLoading: false,
      cityList: [],
      books: [1,2,3,4,5,6,7,8,9,10,1,1,12,3,1]
    }
  },
  methods: {
    async getCity() {
      this.loading = false;
    },
    onLoad() {
      this.getCity();
    },
    onClickLeft() {
      this.$router.back();
    },
    onClickRight() {
      this.$router.replace("/home");
    },
    onRefresh() {
      console.log('触发了下拉刷新');
      this.isLoading = false;
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

.list-area {
  height: 35px;
  line-height: 35px;
  text-align: center;
  background-color: cadetblue;
}

.head-tag {
  height: 30px;
  background-color: #FFFFF0;
  .van-row {
    height: 30px;
    line-height: 30px;
  }
}

.bookList {
  .book {
    background-color: #FFFAFA;
  }
  .van-col:nth-child(1) a {
    color: #FF8945;
  }

  .van-col:last-child {
    color: #dddddd;
  }
}
</style>