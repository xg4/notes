import qs from 'qs'
import styles from './avatar.module.less'
import Avatar from '../components/avatar'
import { THEME_MAP } from '../config'

export default {
  created() {
    const query = qs.parse(
      'avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'
    )

    this.theme = Object.fromEntries(
      Object.entries(query).map(([key, value]) => [
        key,
        THEME_MAP[key].data.find(item => item.value === value)
      ])
    )
  },
  data() {
    return {
      showPicker: false,
      active: null,
      activeIndex: 0,
      theme: {},
      url:
        'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'
    }
  },
  computed: {
    list() {
      const list = THEME_MAP[this.active]
      return list ? list.data : []
    }
  },
  methods: {
    handleToggle(type) {
      this.active = type
      this.activeIndex = this.list.findIndex(
        ({ value }) => value === this.theme[this.active].value
      )
      console.log(this.activeIndex)
      this.showPicker = !this.showPicker
    },
    handleConfirm(item) {
      this.theme[this.active] = item
      const data = Object.fromEntries(
        Object.entries(this.theme).map(([key, data]) => [key, data.value])
      )
      this.url = 'https://avataaars.io/?' + qs.stringify(data)
      console.log(this.url)
      this.showPicker = false
    },
    handleCancel() {}
  },
  render() {
    return (
      <div class={styles.wrap}>
        <div class={styles.avatar}>
          <Avatar src={this.url} />
        </div>

        <van-cell-group class={styles.form}>
          {Object.entries(THEME_MAP).map(([key, item]) => (
            <van-cell
              onClick={() => {
                this.handleToggle(key)
              }}
              title={item.title}
              value={this.theme[key] && this.theme[key].text}
              isLink
              key={key}
            />
          ))}
        </van-cell-group>

        <van-popup vModel={this.showPicker} position="bottom">
          <van-picker
            showToolbar
            defaultIndex={this.activeIndex}
            columns={this.list}
            onConfirm={this.handleConfirm}
            onCancel={this.handleCancel}
          />
        </van-popup>

        <div class={styles.group}>
          <van-button class={styles.btn} type="info" size="large">
            保存
          </van-button>
          <van-button class={styles.btn} size="large">
            取消
          </van-button>
        </div>
      </div>
    )
  }
}
