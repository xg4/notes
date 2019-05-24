<template>
  <transition leave-active-class="animated bounceOutLeft">
    <router-link :to="`/note/${id}`" class="x-item">
      <div class="x-item__action">
        <i class="x-icon x-icon-tag" :style="{ color: '#1989fa' }" />
        <a href="javascript:;" @click.stop="handleComplete">
          <transition
            enter-active-class="animated bounceInLeft"
            leave-active-class="animated bounceOutLeft"
            mode="out-in"
            duration="1000"
          >
            <p v-if="is_complete" key="certificate">
              <van-icon name="certificate" />
            </p>

            <p v-else key="circle">
              <van-icon name="circle" />
            </p>
          </transition>
        </a>
      </div>
      <div class="x-item__main">
        <div class="x-item__title ellipsis">
          123123123123123123123123123123123123123123123123123123
        </div>
        <div class="x-item__content ">
          <p class="ellipsis-2">1231233123123123</p>
        </div>
      </div>
      <div class="x-item__control">
        <a href="javascript:;" @click.stop="handleCollect">
          <i v-if="is_collect" key="star">
            <van-icon name="star" />
          </i>
          <i v-else key="star-o">
            <van-icon name="star-o" />
          </i>
        </a>
        <time>36分钟前</time>
      </div>
    </router-link>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      id: '12',
      is_collect: false,
      is_complete: true
    }
  },
  methods: {
    handleComplete() {
      this.is_complete = !this.is_complete
    },
    handleCollect() {
      this.is_collect = !this.is_collect
    }
  }
}
</script>

<style lang="less">
.x-item {
  margin: 15px 10px;
  border-radius: 8px;
  border: 1px solid #ebeef5;
  background-color: #fff;
  // overflow: hidden;
  box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
    0 2px 4px 0 rgba(232, 237, 250, 0.5);
  color: var(--fontColor);
  // position: relative;
  display: flex;
  padding: 0 5px;

  &__action {
    width: 10%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    .x-icon-tag {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate3d(-50%, 0, 0);
    }

    .van-icon {
      font-size: 25px;
    }
  }

  &__main {
    width: 75%;
    padding: 0 5px;
  }

  &__title {
    font-weight: bold;
    font-size: 16px;
    padding: 10px 5px;
    border-bottom: 1px solid #ebeef5;

    min-height: 39px;
  }

  &__content {
    font-size: 12px;
    color: gray(50);
    padding: 10px 5px;
    word-break: break-all;
    line-height: 1.5;

    p {
      min-height: 18px;
      max-height: 36px;
    }
  }

  &__control {
    width: 15%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    time {
      font-size: 12px;
      color: gray(60);
      font-weight: bold;
    }

    a {
      font-size: 20px;
      color: rgb(255, 210, 30);
    }
  }
}
</style>
