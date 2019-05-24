import './item.less'

export default {
  data() {
    return {
      is_complete: false,
      is_collect: false
    }
  },
  methods: {
    handleComplete() {
      console.log(1)
      this.is_complete = !this.is_complete
    },
    handleCollect() {
      this.is_collect = !this.is_collect
    }
  },
  render() {
    return (
      <transition leave-active-class="animated bounceOutLeft">
        <router-link to={`/note/${this.id}`} class="x-item">
          <div class="x-item__action">
            <i class="x-icon x-icon-tag" style={{ color: '#1989fa' }} />
            <a href="javascript:;" vOn:click_stop_prevent={this.handleComplete}>
              <transition leave-active-class="animated bounceOutLeft">
                <van-icon key="true" name="certificate" />
                {/* <van-icon vif={!this.is_complete} key="false" name="circle" /> */}
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
            <a href="javascript:;">
              <van-icon
                vOn:click_stop_prevent={this.handleCollect}
                name={this.is_collect ? 'star' : 'star-o'}
              />
            </a>
            <time>36分钟前</time>
          </div>
        </router-link>
      </transition>
    )
  }
}
