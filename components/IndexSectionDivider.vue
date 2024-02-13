<template>
  <div class="fill-divider">
    <div class="row no-gutters">
      <template v-for="i in 5" :key="i">
        <div
          v-for="j in ['a', 'c', 'b', 'd']"
          :key="j"
          class="col-auto"
        >
          <div :class="j">
            <div class="img" />
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style lang="sass" scoped>
$width: 240px
$width-small: 120px
$duration: 30s

@keyframes scroll
  from
    transform: translateX(0)
  to
    transform: translateX(-$width * 8)

@keyframes scroll-small
  from
    transform: translateX(0)
  to
    transform: translateX(-$width-small * 8)

@keyframes hue
  to
    filter: hue-rotate(360deg)

.fill-divider
  +no-select
  overflow: hidden
  .row
    flex-wrap: nowrap
    will-change: transform
    animation: scroll $duration linear infinite
    @include media-breakpoint-down(sm)
      animation: scroll-small $duration linear infinite

  .a, .b, .c, .d
    +flex-center
    +wh($width)
    @include media-breakpoint-down(sm)
      +wh($width-small)
    .img
      +wh($width * .5)
      background-size: contain
      background-repeat: no-repeat
      background-position: center center
      @include media-breakpoint-down(sm)
        +wh($width-small * .5)

  .c
    background-color: $black

  .d
    background-color: $secondary1
    animation: hue $duration linear infinite backwards

  .c, .d
    .img
      +wh($width * .7)
      @include media-breakpoint-down(sm)
        +wh($width-small * .7)

.a .img
  background-image: url('~/assets/img/logo/logo_symbol-black.svg')
.b .img
  background-image: url('~/assets/img/logo/logo_symbol-blue.svg')
.c .img
  background-image: url('~/assets/img/logo/logo_symbol-white.svg')
.d .img
  background-image: url('~/assets/img/logo/logo_symbol-white.svg')
</style>
