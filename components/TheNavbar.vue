<script setup lang="ts">
import { throttle } from 'throttle-debounce'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { UseFocusTrap } from '@vueuse/integrations/useFocusTrap/component'
import { useScrollLock, syncRef } from '@vueuse/core'
import logoWhite from '~/assets/img/logo/logo_panel-white.svg'
import logoBlack from '~/assets/img/logo/logo_panel-black.svg'

interface Item { name: string, to: string, active?: boolean }

const props = withDefaults(defineProps<{
  items?: Item[]
}>(), {
  items: () => [
    { name: 'News', to: '/news' },
    { name: 'FAQ', to: '/faq' },
  ],
})

const top = ref(0)
const isShow = ref(false)
const isFixed = ref(false)
const isLocked = useScrollLock(process.client ? document.body : null)

syncRef(isShow, isLocked)

const isDark = computed(() => !isFixed.value)
const logoImage = computed(() => (isDark.value ? logoWhite : logoBlack))

const route = useRoute()
const mobileItems = computed(() => [
  {
    name: 'Home',
    to: '/',
    active: route.name === 'index',
  },
  ...props.items,
])

const hide = () => { isShow.value = false }

onMounted(() => {
  watch(() => route.path, hide)

  const throttled = throttle(300, () => {
    const ref = document.scrollingElement?.scrollTop
    top.value = ref ?? document.documentElement.scrollTop
    isFixed.value = top.value > 250
  })

  window.addEventListener('scroll', throttled)
  onBeforeUnmount(() => { window.removeEventListener('scroll', throttled) })
})
</script>

<template>
  <div>
    <nav id="nav" class="navbar navbar-expand-md" :class="{ shrink: isFixed, 'navbar-dark': isDark, 'navbar-light': !isDark }">
      <div class="container">
        <NuxtLink class="navbar-brand" to="/">
          <img :src="logoImage" alt="樂台計畫">
        </NuxtLink>

        <button class="navbar-toggler" type="button" @click.stop="isShow = !isShow">
          <FontAwesomeIcon :icon="faBars" />
        </button>

        <div class="navbar-content">
          <ul class="navbar-nav">
            <li v-for="(item, key) in items" :key="key" class="nav-item">
              <NuxtLink class="nav-link" :to="item.to" :class="{ active: item.active }">
                {{ item.name }}
              </NuxtLink>
            </li>
            <li v-if="items.length" class="d-flex align-items-center">
              <div class="divider" />
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://www.facebook.com/mcipApp/" target="_blank" title="樂台計畫 Facebook 粉絲專頁">
                <FontAwesomeIcon class="facebook-icon" :icon="faFacebook" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <Transition name="hamburger">
      <UseFocusTrap v-if="isShow" :options="{ allowOutsideClick:true }" class="mobile-navbar">
        <a class="close" href="#" @click.prevent="hide">╳</a>
        <ul>
          <li v-for="item in mobileItems" :key="item.name">
            <NuxtLink class="link" :to="item.to" :class="{ active: item.active }">
              {{ item.name }}
            </NuxtLink>
          </li>
        </ul>
        <div class="divider" />
        <ul>
          <li>
            <NuxtLink class="link" to="/line">
              LINE App
            </NuxtLink>
          </li>
          <li>
            <a class="link" href="https://www.facebook.com/mcipApp/" target="_blank" title="樂台計畫 Facebook 粉絲專頁">
              <FontAwesomeIcon class="facebook-icon" :icon="faFacebook" />
            </a>
          </li>
        </ul>
      </UseFocusTrap>
    </Transition>

    <Transition name="fade">
      <div v-if="isShow" class="overlay" @click="hide" />
    </Transition>
  </div>
</template>

<style lang="sass" scoped>
$shrink-bg-color: rgba(#fff, .95)
$shrink-border-color: rgba(#ddd, .8)

$time-function: cubic-bezier(0.47,0,.4,.99)

$height: 4rem

=shrink-bg
  background-color: $shrink-bg-color
  backdrop-filter: blur(5px)
  -webkit-backdrop-filter: blur(5px)

#nav
  +py(0)
  min-height: $height
  background-color: rgba(#fff, 0)
  position: absolute
  left: 0
  right: 0
  top: $height
  z-index: 2000
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
    img
      margin-right: .75rem
      width: auto
      height: 2.25rem
    span
      font-weight: 400
  &.shrink
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
      button.navbar-toggler
        color: $black

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
    color: white
    &:active
      background-color: rgba(white, .2)

.mobile-navbar
  text-align: right
  z-index: 2
  display: none

@include media-breakpoint-down(sm)
  #nav
    .navbar-content
      display: none
    button.navbar-toggler
      +flex-center

  .mobile-navbar
    +hide-scroll-bar
    +shrink-bg
    box-shadow: $big-btn-shadow
    background-color: $black
    overflow-y: scroll
    overscroll-behavior: contain
    z-index: 2000
    padding: .25rem 1.75rem
    position: fixed
    top: 0
    right: 0
    +wh(80% ,100%)
    max-width: 20rem
    +flex-center

    .link
      display: inline-block
      font-size: 2.5rem
      font-weight: bold
      color: white
      &.active
        color: $primary

    ul
      list-style: none
      margin: .75rem 0
      padding: 0
      width: 100%

    a.close
      position: absolute
      top: .5rem
      right: .5rem
      display: flex
      align-items: center
      font-size: 2.5rem
      font-weight: 100
      padding: 1rem
      outline: none
      color: white

    .divider
      width: 100%
      border-bottom: rgba(white, .3) solid 1px

.overlay
  z-index: 1
  position: fixed
  top: 0
  right: 0
  +wh(100% ,100%)
  background: rgba($black, .5)
  backdrop-filter: blur(1px)

.fade
  &-enter-from, &-leave-to
    opacity: 0
  &-leave-from, &-enter-to
    opacity: 1
  &-enter-active, &-leave-active
    transition: all .3s

.hamburger
  &-enter-from, &-leave-to
    transform: translateX(100%)
  &-leave-from, &-enter-to
    transform: none
  &-enter-active, &-leave-active
    transition: all .25s
</style>
