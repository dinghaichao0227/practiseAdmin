<template>
  <div class="home">
    <aside class="home-aside">
      <div class="top">
        <div class="aside-logo">
          <img class="logo" :src="logo" alt="" />
        </div>
        <header class="aside-header">project</header>
      </div>
      <a-menu
        v-model:openKeys="openKeys"
        v-model:selectedKeys="selectedKeys"
        mode="inline"
        @click="handleClick"
        class="menuList"
      >
        <a-menu-item v-for="(item, index) in navigation" :key="item.path">
          <span class="menuTitle">
            <i class="list-icon" :class="iconList(item.mate)"></i>
            <span>{{item.mate.title}}</span>
          </span>
          </a-menu-item>
      </a-menu>
    </aside>
    <div class="home-content">
      <header class="header">
        <div class="left">bread</div>
        <div class="right" @click="onReturn">退出登录</div>
      </header>
      <main class="main">
        <a-card class="main-card">
          <router-view />
        </a-card>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue"
import {useRouter, useRoute} from "vue-router";
import Cookies from "js-cookie";
import logo from "../../assets/vue-logo.png"
import { navigation } from '../../router/routes';
const router = useRouter()
const route = useRoute()
const selectedKeys = ref(['1'])
console.log(navigation, 77);
const img = ref(navigation[4].mate.icon)
const onReturn = () => {
  sessionStorage.removeItem('user')
  sessionStorage.removeItem('pswd')
  Cookies.remove('token')
  router.push("/login")
}
const iconList = (icon) => {
  return icon ? icon.icon : ''
}
const handleClick = (item) => {
  router.push({path: item.key})
};
</script>

<style lang="scss" scoped>
.home {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;

  &-aside {
    flex-shrink: 0;
    width: 260px;
    height: 100vh;
    padding: 16px;
    background-image: url("../../assets/bg.jpg");
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    color: #fff;
    overflow-x: auto;
    overflow-y: auto;

    .top {
      display: flex;
      padding-bottom: 10px;
      border-bottom: 1px solid #616161;
      margin-bottom: 20px;
      margin-top: -8px;
      .aside-logo {
        width: 40px;
        display: inline-block;
        height: 40px;
        line-height: 40px;
        margin-left: 0;
        margin-right: 10px;
        background: #fff;
        border-radius: 40px;
        text-align: center;

        .logo {
          width: 30px;
          height: 30px;
        }
      }
      .aside-header {
        text-transform: uppercase;
        padding: 0;
        display: block;
        font-size: 18px;
        color: #fff;
        text-align: left;
        font-weight: 400;
        line-height: 40px;
      }
    }
    .menuList {
      border-right: none;
      color: #fff;
      .menuTitle {
        display: flex;
        align-items: center;
      }
    }
  }
  &-content {
    display: flex;
    flex-direction: column;
    flex: 1;

    .header {
      padding: 8px;
      height: 60px;
      line-height: 40px;
      display: flex;
      flex-shrink: 0;
      justify-content: space-between;
      background-color: #fff;
      border-bottom: 1px solid rgba(0,0,0,.1)
    }
    .main {
      padding: 20px;
      display: flex;
      flex: 1;
      overflow-x: hidden;
      overflow-y: auto;
      background: #f7f7f8;

      &-card {
        width: 100%;
      }
    }
  }

}
</style>