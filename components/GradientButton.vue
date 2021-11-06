<template lang="pug">
NuxtLink.button(
  v-if='to'
  :target='target'
  :to="to"
  :class='className'
)
  slot
button.button(
  v-else
  :type='type'
  :disabled='disabled'
  :class='className'
  @click='$emit("click", $event)'
)
  slot
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    to: {
      default: null,
      type: String,
    },
    target: {
      default: null,
      type: String,
    },
    type: {
      default: 'button',
      type: String,
    },
    disabled: {
      default: false,
      type: Boolean,
    },
    className: {
      default: null,
      type: String,
    },
  },
})
</script>

<style scoped lang="sass">
.button
  +btn-common
  display: inline-block
  border-radius: 100rem
  background-image: $btn-gradient
  color: white
  padding: .6rem 1.5rem
  font-weight: bold
  letter-spacing: 1px
  text-decoration: none
  text-align: center
  +no-select

  &.secondary
    background-image: $btn-secondary-gradient
  &.line
    $base-color: #5AC363
    background-image: linear-gradient(-225deg, $base-color 0%, darken($base-color, 10%) 100%)
    &, &:hover
      color: darken($base-color, 40%)
      color: white
  &.submit
    background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)
    color: rgba($black, .8)
    &:hover
      color: rgba($black, .8)
    +my(1rem)

  &.block
    display: block
    width: 100%
</style>
