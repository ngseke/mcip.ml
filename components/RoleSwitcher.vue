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

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import Role from '~/types/Role'

export default defineComponent({
  props: {
    value: {
      default: null,
      type: Number,
    },
    list: {
      default: () => [],
      type: Array as PropType<Role[]>,
    },
  },
})
</script>

<style scoped lang="sass">
.switcher
  display: inline-flex
  flex-wrap: wrap
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
    color: $secondary3
    text-decoration: underline

.divider
  color: rgba($black, .5)
  margin: .5rem
  font-size: 1rem
  &:after
    content: ' | '
</style>
