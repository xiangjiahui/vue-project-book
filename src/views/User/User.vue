<template>
  <div class="user-container">
    <van-nav-bar
        title="用户信息"
        fixed
    >
    </van-nav-bar>
    <div class="head">
      <van-image
          round
          lazy-load
          width="7rem"
          height="7rem"
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
      />
      <div class="userInfo">
        <p>{{ username }}</p>
      </div>
    </div>

    <van-nav-bar
        left-text="书币余额"
        :right-text="balances"
        class="list"
    />
    <van-nav-bar
        left-text="下载记录"
        class="list"
    >
      <template #right>
        <van-icon name="arrow" size="18" @click="download">
        </van-icon>
      </template>
    </van-nav-bar>

    <van-nav-bar
        left-text="退出登录"
        class="list"
    >
      <template #right>
        <van-icon name="arrow" size="18" @click="loginout">
        </van-icon>
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
      username: 'admin',
      balances: '9999'
    }
  },
  methods: {
    download() {
      this.$router.push('/home');
    },
    loginout() {
      this.$router.replace('register');
    }
  }
}
</script>

<style scoped lang="less">
.user-container {
  padding-top: 46px;
  /deep/ .van-nav-bar {
    background-color: #0FA5FF;
  }
  .list {
    background-color: white;
    border-bottom: 1px solid #dddddd;
    /deep/ .van-nav-bar__text {
      color: black;
    }
  }
  /deep/ .van-icon {
    color: #999999;
  }
  .head {
    position: relative;
    height: 200px;
    background-color: lightskyblue;

    /deep/ .van-image {
      margin-top: 20px;
    }

    .userInfo {
      height: 30px;
      line-height: 30px;
      text-align: center;

      p {
        margin-bottom: 0;
      }
    }
  }
}
</style>