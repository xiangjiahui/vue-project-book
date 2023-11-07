<template>
  <div class="register-container">
    <van-form @submit="onSubmit" @failed="onFailed">
      <van-field
          v-model="username"
          name="username"
          label="用户名"
          placeholder="用户名"
          :rules="[{ pattern ,message: '用户名为1-9位的大小写英文字母' }]"
      />
      <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          :rules="[{ validator, message: '密码错误' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit" @click="register">注册</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      username: '',
      password: '',
      pattern : /^[a-zA-Z]{1,9}$/
    }
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values);
    },
    onFailed(values) {
      console.log('failed', values);
    },
    validator(val) {
      return /^[a-zA-Z0-9]{6,16}$/.test(val);
    },
    register() {
      this.$router.replace('/home');
    }
  }
}
</script>

<style scoped>

</style>