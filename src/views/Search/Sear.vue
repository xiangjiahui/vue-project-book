<template>
  <div class="sear-container">
    <van-nav-bar
        title="书籍搜索"
    />
    <van-search
        v-model="searchValue"
        show-action
        placeholder="请输入要搜索的书籍名称或作者名称"
        @search="onSearch"
    >
      <template #action>
        <div @click="searchBook">
          <van-button type="info" size="small"
                      icon="search">搜索</van-button>
        </div>
      </template>
    </van-search>

<!--    <div class="book-list" v-for="(item,index) in books" :key="index">-->
<!--      <router-link to="/">-->
<!--        牧神记&nbsp;&nbsp;作者:宅猪-->
<!--      </router-link>-->
<!--    </div>-->
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

export default {
  name: "Sear",
  data() {
    return {
      searchValue: '',
      isSearch: false,
      books: [1,2,3,4,5,6,7,8,9,10,1,1],
      currentPage: 1,
    }
  },
  methods: {
    onSearch() {

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
</style>