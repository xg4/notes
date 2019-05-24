<template>
  <main class="app">
    <van-nav-bar :title="title" left-text="返回" right-text="按钮" left-arrow />
    <router-view class="app-view" />
    <van-tabbar route>
      <van-tabbar-item replace to="/" icon="label-o">
        记录
      </van-tabbar-item>
      <van-tabbar-item replace to="/new" icon="add-o">
        新建
      </van-tabbar-item>
      <van-tabbar-item replace to="/star" icon="star-o">
        收藏
      </van-tabbar-item>
      <van-tabbar-item replace to="/profile" icon="user-circle-o">
        我的
      </van-tabbar-item>
    </van-tabbar>
  </main>
</template>

<script>
export default {
  data() {
    return {
      title: '备忘录'
    }
  }
}
</script>

<style></style>
