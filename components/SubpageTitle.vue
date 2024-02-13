<script setup lang="ts">
defineProps<{
  zh?: string
  en?: string
}>()
</script>

<template>
  <div class="container subpage-title">
    <h1>
      <span class="zh">
        <span>{{ zh }}</span>
      </span>
      <small class="en">
        <span>{{ en }}</span>
      </small>
    </h1>
  </div>
</template>

<style scoped lang="sass">
@keyframes y-move
  from
    transform: translateY(130%)
  to
    transform: none

$delay: .3s

.subpage-title
  h1
    +text-shadow
    color: white
    font-size: 3rem
    display: flex
    flex-wrap: wrap
    span, small
      display: inline-block
      font-weight: 700
    .zh, .en
      overflow: hidden
      width: 100%
      span
        animation: y-move .5s $delay backwards
        animation-fill-mode: backwards
    .zh
      letter-spacing: 1px
      margin-right: 1rem
    .en
      font-size: 60%
      span
        animation-delay: $delay + .15s
</style>
