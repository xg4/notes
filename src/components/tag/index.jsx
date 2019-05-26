import classNames from 'classnames'

export default ({ data }) => {
  return (
    <i
      class={classNames('x-icon x-icon-tag', data.class)}
      style={{ color: '#1989fa' }}
    />
  )
}
