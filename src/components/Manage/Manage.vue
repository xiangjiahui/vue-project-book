<template>
  <div class="manage-container">
    <van-row v-for="(item,index) in rows" :key="index">
      <van-col span="12" v-for="(col,index) in item.cols" :key="col.id">
        <div class="link">
          <router-link :to="col.toPath">{{ col.title }}</router-link>
        </div>
        <div class="total">
          <div>
            <span>书籍总数</span>
            <span>• 9999</span>
          </div>
        </div>
      </van-col>
<!--      <van-col span="12">
        <div class="link">
          <router-link :to="toPath">{{ title }}</router-link>
        </div>
        <div class="total">
          <div>
            <span>书籍总数</span>
            <span>• 9999</span>
          </div>
        </div>
      </van-col>-->
    </van-row>
  </div>
</template>

<script>
export default {
  name: "Manage",
  data() {
    return {}
  },
  props: {
    rows: {
      type: Array,
      default: []
    }
  }
}
</script>

<style scoped>
.link {
  height: 22px;
  padding-right: 60px;
  line-height: 22px;
  text-align: center;
}

.link > a{
  display: block;
  float: right;
  color: #333;
  font-size: 15px;
  /*font-weight: 700;*/
}

.total {
  height: 22px;
  margin-top: 5px;
  padding-right: 60px;
}

.total > div {
  float: right;
}

.van-col {
  border-right: 1px solid #dddddd;
  border-bottom: 1px solid #dddddd;
}

.total span:nth-child(1) {
  color: #999999;
}

.total span:nth-child(2) {

  color: #ff7c2d;
}
</style>