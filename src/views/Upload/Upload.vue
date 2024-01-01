<template>
  <div class="upload-container">
    <van-nav-bar
        title="书籍上传"
        fixed
    >
    </van-nav-bar>
    <van-uploader accept=".txt"
                  v-model="fileList">
      <van-button icon="plus" type="primary">上传文件</van-button>
    </van-uploader>
    <div class="upload-btn">
      <van-button type="info" @click="startUpload">开始上传</van-button>
    </div>

  </div>
</template>

<script>
import { uploadBook } from '@/api/default/api';
export default {
  name: "Upload",
  data() {
    return {
      fileList: [],
    }
  },
  methods: {
    startUpload() {
      const book = new FormData();
      this.fileList.forEach((file,index) => {
        book.append('files',file.file);
      })
      uploadBook(book);
    }
  }
}
</script>

<style scoped lang="less">
.upload-container {
  padding: 46px 0 50px 0;

  /deep/ .van-uploader {
    margin-top: 100px;
  }
  .upload-btn {
    margin-top: 50px;
  }
}
</style>