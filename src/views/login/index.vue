<template>
  <div class="login">
    <div class="login-left">
      <img class="login-left-logo" :src="image" alt="">
    </div>
    <div class="login-right">
    <a-spin class="spin" :spinning="spinning"/>

      <a-card class="login-right-card" title="用户登录">
        <a-form
          :model="formState"
          name="basic"
          :label-col="{ span: 8 }"
          :wrapper-col="{ span: 16 }"
          autocomplete="off"
          @finish="onFinish"
          @finishFailed="onFinishFailed"
          class="formList"
        >
          <a-form-item
            label="用户名："
            name="username"
            placeholder="请输入用户名"
            :rules="[{ required: true, message: '用户名不能为空!' }]"
          >
            <a-input v-model:value="formState.username" class="formItem" />
          </a-form-item>

          <a-form-item
            label="密码："
            name="password"
            placeholder="请输入密码"
            :rules="[{ required: true, message: '密码不能为空！' }]"
          >
            <a-input-password v-model:value="formState.password" class="formItem" />
          </a-form-item>
          <a-form-item
            label="验证码："
            name="verification"
            placeholder="请输入验证码："
            :rules="[{ required: true, message: '验证码不能为空！' }]"
          >
          <a-input v-model:value="formState.verification" class="formItem" />
          <div class="verification" @click="handleRefreshCode()">
            <verification :identifyCode="identifyCode"></verification>
          </div>
          </a-form-item>

          <a-form-item name="remember" :wrapper-col="{ offset: 5, span: 16 }">
            <a-checkbox v-model:checked="formState.remember">记住我</a-checkbox>
          </a-form-item>

          <a-form-item  :wrapper-col="{ offset:4, span: 19 }">
            <a-button class="submit" type="primary" html-type="submit">登录</a-button>
            <a-button class="submit" type="primary" html-type="submit">重置</a-button>
          </a-form-item>
        </a-form>
      </a-card>
    </div>
  </div>

</template>

<script setup lang="ts">
import image from "../../assets/bg.jpg";
import Cookies from "js-cookie";
import { message } from 'ant-design-vue';
import { reactive, ref } from "vue";
import {useRouter} from "vue-router";
import verification from "../../config/Verification.vue";
const router  = useRouter()
const identifyCode = ref('3734')
const identifyCodes = ref('123456789')
const spinning = ref(false)
const formState = reactive({
  username: 'admin',
  password: '123456',
  remember: true,
  verification:''
});
const handleRefreshCode = () => {
  identifyCode.value = ''
  makeCode(identifyCodes.value, 4)
  // 随机生成验证码字符串
};
const randomNum = (min, max) => {
  max = max + 1
  return Math.floor(Math.random() * (max - min) + min)
};
const makeCode = (data, len) => {
  for (let i = 0; i < len; i++) {
    identifyCode.value += data[randomNum(0, data.length - 1)]
    console.log(identifyCode.value, 888)
  }
};
const onFinish = (values) => {
  if (formState.verification === identifyCode.value) {
    console.log(111);
    spinning.value = false
    sessionStorage.setItem('user',values.username)
    sessionStorage.setItem('pswd',values.password)
    Cookies.set('token', 1)
    router.push('/')
    console.log('Success:', values);
  }else {
    spinning.value = true
    message.error('验证码错误');
    handleRefreshCode()
  }

};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
// unMounted(()=> {

// })
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  display: flex;
  &-left {
    flex-shrink: 0;
    width: 500px;
    height: 100vh;
    overflow: hidden;


    &-logo {
      width: 100%;
      height:100vh;

    }
  }
  &-right {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #f7f7f8;
    .spin {
      position: fixed;
      top: 10px;
    }
    &-card {
    width: 500px;
    height:400px;
    display: flex;
    flex-direction: column;
    // align-items: center;
    justify-content: start;
      .formList {
        width: 450px;
        display: flex;
        flex-direction: column;
        // .formItem {
        //   // width: 300px;
        // }
        .verification {
          text-align: right;
          margin-top: 10px;
          margin-bottom:-24px
        }
        .submit {
          width: 80px;
          margin-left: 10px;
          }
      }
    }
  }
}

</style>