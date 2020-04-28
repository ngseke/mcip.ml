<template lang="pug">
.fill-divider
  .row.no-gutters
    template(v-for='i in 10')
      .col-auto: .a: img(src='~/assets/img/logo/logo_symbol-black.svg')
      .col-auto: .c: img(src='~/assets/img/logo/logo_symbol-white.svg')
      .col-auto: .b: img(src='~/assets/img/logo/logo_symbol-blue.svg')
      .col-auto: .d: img(src='~/assets/img/logo/logo_symbol-white.svg')
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
    @media (max-width: 767.98px)
      animation: scroll-small $duration linear infinite
  
  .a, .b, .c, .d
    +flex-center
    +wh($width)
    @media (max-width: 767.98px)
      +wh($width-small)
    img
      +no-select
      +wh($width * .5, auto)
      @media (max-width: 767.98px)
        +wh($width-small * .5)
      
  .c
    background-color: $black
  .d
    background-color: nth($secondary-list, 1)
    animation: hue $duration linear infinite backwards
    
  .c, .d
    img
      +wh($width * .7, auto)
      @media (max-width: 767.98px)
        +wh($width-small * .7)
      
  
</style>