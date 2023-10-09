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
          搜索
        </div>
      </template>
    </van-search>
  </div>
</template>

<script>
import { getCityAPI } from '@/api/city/city-api.js';
export default {
  name: "Sear",
  data() {
    return {
      searchValue: '',
      isSearch: false
    }
  },
  methods: {
    onSearch(val) {
      this.$toast.loading({
        message: '正在搜索',
        forbidClick: true
      })
    },
    async searchBook() {
      const {data: res} = await getCityAPI();
      console.log(res);
    }
  }

}
</script>

<style scoped lang="less">

/deep/ .van-nav-bar {
  background-color: #0FA5FF;
}
</style>