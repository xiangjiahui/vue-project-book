<template>
  <div class="sear-container">
    <van-nav-bar
        title="书籍搜索"
    />
    <van-search
        v-model.trim="name"
        show-action
        placeholder="请输入要搜索的书籍名称或作者名称"
        @search="onSearch"
        @keyup.enter="enter"
    >
      <template #action>
        <div @click="searchBook">
          <van-button type="info" size="small"
                      icon="search">搜索</van-button>
        </div>
      </template>
    </van-search>

    <div class="search-result" v-if="isSearch">
      <div class="sub">
        结果: 找到"{{ name }}"相关内容{{ resultNum }}个
      </div>
    </div>

    <div class="book-list" v-for="(item,index) in books" :key="item.userOID">
      <router-link to="/">
        {{ item.name }}
      </router-link>
    </div>
    <van-pagination v-model="currentPage" :total-items="125" :show-page-size="5">
      <template #prev-text>
        <van-icon name="arrow-left" />
      </template>
      <template #next-text>
        <van-icon name="arrow" />
      </template>
<!--      <template #page="{ text }">{{ text }}</template>-->
    </van-pagination>
  </div>
</template>

<script>
import { searchBook } from '@/api/default/api';
export default {
  name: "Search",
  data() {
    return {
      searchValue: '',
      isSearch: false,
      books: [],
      currentPage: 1,
      name: '',
      resultNum: 0,
    }
  },
  methods: {
    onSearch() {
      this.searchBook();
    },
    async searchBook() {
      if (this.name === ''){
        this.$toast.fail({
          message: '搜索内容不能为空'
        })
        return;
      }
      const { data: res} = await searchBook(this.name);
      let code = res.code;
      if (code !== 200){
        this.name = '未知错误';
        return;
      }
      this.books = res.data;
      this.resultNum = res.data.length;
      this.isSearch = true;
    }
  }

}
</script>

<style scoped lang="less">

/deep/ .van-nav-bar {
  background-color: #0FA5FF;
}

.book-list {
  width: 360px;
  height: 39px;
  margin-left: 14px;
  padding-top: 6px;
  border-bottom: 1px solid #dddddd;

  a {
    float: left;
    color: #333333;
  }
}

/deep/ .van-pagination {
  padding-left: 0;
}

/deep/ .van-pagination {
  position: absolute;
  top: 625px;
  left: 67px;
}
.search-result {
  display: flex;
  height: 40px;
  line-height: 40px;
  overflow: hidden;
  background-color: #F1F1F1;
  color: #006EDD;
  text-align: center;

  .sub {
    font-size: 14px;
    /* 让盒子的长度跟随文字的内容变化 */
    width: 2ch; /* 假设每个字符宽度大约是1ch */
    min-width: 320px; /* 设置最小宽度 */
    white-space: nowrap; /* 防止文字换行 */
    overflow: hidden; /* 超出部分隐藏 */
    text-overflow: ellipsis; /* 超出部分显示省略号 */
    height: 40px;
    padding: 0 0 0 10px;
  }
}

* {
  margin: 0;
  padding: 0;
}
</style>