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

    <!-- onLoad方法要想被触发,loading值必须是false -->
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多的数据了"
          @load="onLoad"
      >
        <div class="book">
          <div class="content">
            <div class="book-title">
              <p>
                <router-link to="/null">
                  身为龙骑士的我,目标就是推倒公主?住住住住住护住宅和住
                </router-link>
              </p>
            </div>
            <div class="book-info">
              <van-icon name="clock-o" />&nbsp;2023-09-01
              <van-icon name="eye-o" /> 9999
            </div>
            <div class="book-img">
              <img :src="img" alt="">
            </div>
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
      books: [1,2,3,4,5,6,7,8,9,10,1,1,12,3,1],
      img: require('@/assets/images/bg1.png')
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

.book {
  height: 100px;
  background-color: floralwhite;
  padding: 10px 0;

  .content {
    position: relative;
    height: 80px;

    .book-img {
      width: 80px;
      height: 80px;
      float: right;
      margin-right: 40px;

      img {
        width: 80px;
        height: 80px;
      }
    }

    .book-title {
      width: 200px;
      height: 64px;
      float: left;
      margin-left: 20px;

      p {
        font-size: 15px;
        text-indent: 30px;
        text-align: justify;
        letter-spacing: 1px;
        //超过盒子宽度自动换行
        overflow-wrap: break-word;
        a {
          color: black;
        }
      }
    }

    .book-info {
      position: absolute;
      bottom: -10px;
      left: 20px;
      float: left;
      font-size: 13px;
      color: #999999;
    }
  }
}
</style>