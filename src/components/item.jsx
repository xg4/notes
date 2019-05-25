import './item.less'

export default ({
  parent: { $store },
  props: { id, is_complete, is_collect, title, content }
}) => {
  const handleComplete = ev => {
    // ev.preventDefault()
    ev.stopPropagation()
    $store.dispatch('PUT_NOTE', { id, is_complete: !is_complete })
  }
  const handleCollect = ev => {
    // ev.preventDefault()
    ev.stopPropagation()
    $store.dispatch('PUT_NOTE', { id, is_collect: !is_collect })
  }
  return (
    <transition leave-active-class="animated bounceOutLeft">
      <router-link to={`/note/${id}`} class="x-item">
        <div class="x-item__action">
          <i class="x-icon x-icon-tag" style={{ color: '#1989fa' }} />
          <a href="javascript:;" onClick={handleComplete}>
            <transition
              mode="out-in"
              enter-active-class="animated bounceInLeft"
            >
              <div key={is_complete}>
                <van-icon name={is_complete ? 'certificate' : 'circle'} />
              </div>
            </transition>
          </a>
        </div>
        <div class="x-item__main">
          <div class="x-item__title ellipsis">{title}</div>
          <div class="x-item__content ">
            <p class="ellipsis-2">{content}</p>
          </div>
        </div>
        <div class="x-item__control">
          <a href="javascript:;" onClick={handleCollect}>
            <transition mode="out-in" enter-active-class="animated zoomIn">
              <div key={is_collect}>
                <van-icon name={is_collect ? 'star' : 'star-o'} />
              </div>
            </transition>
          </a>
          <time>36分钟前</time>
        </div>
      </router-link>
    </transition>
  )
}
