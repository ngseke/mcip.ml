<template lang="pug">
.switcher
  span.label 我是
  template(v-for='(item, index) in list')
    a(
      href='#'
      :class='{ active: value === item.value }'
      @click.prevent='$emit("input", item.value)'
    ) {{ item.name }}
    .divider(v-if='index !== list.length - 1')
</template>

<script>
const list = [
  { name: '參賽者', value: 1 },
  { name: '學校社團', value: 2 },
]

export default {
  props: {
    value: {
      default: list[0].value,
      type: Number,
    },
  },
  data () {
    return {
      list,
    }
  },
}
</script>

<style scoped lang="sass">
.switcher
  display: flex
  align-items: center
  margin-bottom: 2rem

.label
  color: rgba($black, .7)
  margin-right: .75rem

a
  +floating-link
  color: $black
  font-weight: 700
  font-size: 1.25rem
  &.active
    color: $primary
    color: nth($secondary-list, 3)
    text-decoration: underline

.divider
  color: rgba($black, .5)
  margin: .5rem
  font-size: 1rem
  &:after
    content: ' | '
</style>
