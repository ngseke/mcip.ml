<template lang="pug">
nav#nav.navbar.navbar-expand-md(:class='{ shrink: isShrink, "navbar-dark": isDark, "navbar-light": !isDark }' v-cloak)
  .container
    nuxt-link.navbar-brand(to='/')
      img(src='~/assets/img/logo/logo-black.svg' alt='MCIP Logo White')
      .text 樂台計畫
    button.navbar-toggler(type='button' @click.stop='isShow = !isShow')
      fa(icon='bars')
    .navbar-content(:class='{ hide: !isShow }' ref='navbarContent')
      ul.navbar-nav
        li.nav-item(v-for='_ in items')
          nuxt-link.nav-link(:to='_.to' @click='isShow = false' :class='{ active: _.active }') {{ _.name }}
        li.d-flex.align-items-center(v-if="items.length"): .divider
        li.nav-item
          a.nav-link(href='https://www.facebook.com/mcipApp/' target='_blank' title='樂台計畫 Facebook 粉絲專頁')
            fa.facebook-icon(:icon='["fab", "facebook"]')
            span.d-span.d-md-none.ml-3 Facebook 粉絲專頁
</template>

<script lang="coffee">
import { throttle } from 'throttle-debounce'

export default
  name: 'Navbar'
  
  data: ->
    top: null
    isShrink: false
    isShow: false
    
  props:
    items:
      default: => [
        { name: '最新消息', to: '/news' }
        { name: '常見問題', to: '/faq' }
      ]
    
  mounted: ->
    @setShrink()
    @setOnBodyClick()

  methods:
    setShrink: ->
      throttled = throttle 300, =>
        prev = @top
        @top = document.scrollingElement.scrollTop ? document.documentElement.scrollTop
        @isShrink = @top > 250
      
      window.addEventListener('scroll', throttled)
      @$once 'hook:beforeDestroy', => window.removeEventListener 'scroll', throttled
 
    setOnBodyClick: ->
      handler = (e) =>
        { navbarContent } = @$refs
        @isShow = false if !navbarContent.contains e.target
      
      document.addEventListener 'click', handler
      @$once('hook:beforeDestroy', => document.removeEventListener('click', handler))
  
  computed:
    isDark: -> !@isShrink
</script>

<style lang="sass" scoped>
$shrink-bg-color: rgba(#fff, .95)
$shrink-border-color: rgba(#ddd, .8)

$time-function: cubic-bezier(0.47,0,.4,.99)

#nav
  +py(0)
  min-height: 4.5rem
  background-color: transparent
  position: absolute
  left: 0
  right: 0
  z-index: 2000
  top: 4.5rem
  transform: translateY(-100%)
  letter-spacing: 2px
  li.nav-item
    display: flex
    align-items: center
    +px(.5rem)
    font-size: 14px
    font-weight: 500
  .container
    position: relative
  .navbar-brand
    visibility: hidden
    img
      +wh(2rem)
      margin-right: .75rem
    span
      font-weight: 400
  &.shrink
    min-height: 4rem
    position: fixed
    background-color: $shrink-bg-color
    backdrop-filter: blur(5px)
    transition: transform .3s
    transform: none
    top: 0
    .navbar-brand
      visibility: visible
      .text
        display: inline-block
        letter-spacing: 1px
    &.navbar-light
      background-color: $shrink-bg-color
      border-bottom: solid 1px $shrink-border-color
      .divider
        border-color: rgba(#333, .3)
      
  .divider
    height: .8rem
    width: 0
    display: inline-block
    border-left: 1px solid rgba(#eee, .3)
    margin: 0 .75rem
    vertical-align: middle
  .facebook-icon
    font-size: 1rem
    
  a
    cursor: pointer
    display: inline-block
    
  button.navbar-toggler
    +wh(3rem)
    padding: .5rem
    border: none
    border-radius: 100rem
    outline: none
    transition: background-color .2s
    font-size: 1.5rem
    &:active
      background-color: rgba(white, .2)

@media (max-width: 767.98px)
  #nav
    font-size: 1rem
    &.navbar-dark
      .navbar-content
        background-color: rgba(#1e1e1e, .97)
        border: none
    .divider
      height: 0
      width: 100%
      border-bottom: 1px solid rgba(#eee, .3)
      margin: .5rem 0
    .navbar-content
      z-index: 2000
      transition: all .25s $time-function
      transform-origin: right top
      position: absolute
      top: 3rem
      right: 0
      background-color: $shrink-bg-color
      border: solid 1px $shrink-border-color
      padding: .5rem
      overflow: hidden
        
      ul.navbar-nav
        transition: all .2s $time-function .05s
        padding: .5rem
      // 隱藏漢堡選單
      &.hide
        transform: scaleY(0)
        opacity: 0
        ul.navbar-nav
          opacity: 0
          transform: translateY(-25%)
          transform-origin: top center
    button.navbar-toggler
      +flex-center
</style>