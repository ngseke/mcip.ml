<template lang="pug">
div
  nav#nav.navbar.navbar-expand-md(:class='{ shrink: isShrink, "navbar-dark": isDark, "navbar-light": !isDark }' v-cloak)
    .container
      nuxt-link.navbar-brand(to='/')
        img(src='~/assets/img/logo/logo_panel-black.svg' alt='樂台計畫')
      button.navbar-toggler(type='button' @click.stop='isShow = !isShow')
        fa(icon='bars')
      .navbar-content(ref='navbarContent')
        ul.navbar-nav
          li.nav-item(v-for='_ in items')
            nuxt-link.nav-link(:to='_.to' @click='isShow = false' :class='{ active: _.active }') {{ _.name }}
          li.d-flex.align-items-center(v-if="items.length"): .divider
          li.nav-item
            a.nav-link(href='https://www.facebook.com/mcipApp/' target='_blank' title='樂台計畫 Facebook 粉絲專頁')
              fa.facebook-icon(:icon='["fab", "facebook"]')
  .overlay(:class='{ hide: !isShow }')
    a.close(@click.prevent='isShow = false' href='#') ╳
    ul
      li(v-for='(_, key) in items' @click='isShow = false' )
        nuxt-link.link(:to='_.to' :class='{ active: _.active }' :style='getLinkStyle(key)') {{ _.name }}
    .divider
    ul
      li: a.link(href='https://www.facebook.com/mcipApp/' target='_blank' title='樂台計畫 Facebook 粉絲專頁')
        fa.facebook-icon(:icon='["fab", "facebook"]')
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
        { name: 'News', to: '/news' }
        { name: 'FAQs', to: '/faq' }
      ]

  mounted: ->
    @setShrink()
    # @setOnBodyClick()

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

    getLinkStyle: (i) ->
      transitionDelay: "#{i * .15 + .3}s"

  computed:
    isDark: -> !@isShrink
</script>

<style lang="sass" scoped>
$shrink-bg-color: rgba(#fff, .9)
$shrink-border-color: rgba(#ddd, .8)

$time-function: cubic-bezier(0.47,0,.4,.99)

$height: 4.5rem
$height-shrink: $height - .5rem

=shrink-bg
  background-color: $shrink-bg-color
  backdrop-filter: blur(5px)

#nav
  +py(0)
  min-height: $height
  background-color: transparent
  position: absolute
  left: 0
  right: 0
  z-index: 1000
  top: 4.5rem
  transform: translateY(-100%)
  letter-spacing: 2px
  li.nav-item
    display: flex
    align-items: center
    +px(.5rem)
    font-size: 14px
    font-weight: 500
    text-transform: uppercase
  .container
    position: relative
  .navbar-brand
    visibility: hidden
    img
      margin-right: .75rem
      width: auto
      height: 2.25rem
    span
      font-weight: 400
  &.shrink
    min-height: $height-shrink
    position: fixed
    +shrink-bg
    transition: transform .3s $time-function
    transform: none
    top: 0
    .navbar-brand
      visibility: visible

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

.overlay
  display: none

@media (max-width: 767.98px)
  #nav
    .navbar-content
      display: none
    button.navbar-toggler
      +flex-center

  .overlay
    +hide-scroll-bar
    +shrink-bg
    overflow-y: scroll
    overscroll-behavior: contain
    z-index: 2000
    position: fixed
    top: 0
    left: 0
    +wh(100%)
    +flex-center
    transition: transform .4s cubic-bezier(.7,0,.3,1)

    &.hide
      transform: translateX(100%)
      .link
        transform: translateY(100%)

    .link
      display: inline-block
      font-size: 2.5rem
      font-weight: bold
      transition: transform .3s

    ul
      list-style: none
      padding: 0
      margin-bottom: 2.5rem
      li
        padding: .25rem 1rem
        overflow: hidden

    a.close
      position: absolute
      top: 5%
      right: 5%
      display: flex
      align-items: center
      font-size: 2rem
      font-weight: 100
      padding: 1rem
      outline: none
</style>
