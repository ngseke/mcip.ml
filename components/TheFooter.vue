<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebook, faLine } from '@fortawesome/free-brands-svg-icons'
import { type IconDefinition, faEnvelope, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

type Item =
  | { name: string, to: string, icon?: IconDefinition }
  | { name: string, href: string, target: string, icon: IconDefinition }

const list: Item[][] = [
  [
    { name: '首頁', to: '/' },
    { name: '最新消息', to: '/news' },
    { name: '常見問題', to: '/faq' },
  ],
  [
    {
      name: 'Facebook 粉絲專頁',
      href: 'https://www.facebook.com/mcipApp/',
      target: '_blank',
      icon: faFacebook,
    },
    {
      name: 'LINE 官方帳號',
      to: '/line',
      target: '_blank',
      icon: faLine,
    },
    {
      name: 'mcip.app@gmail.com',
      href: 'mailto:mcip.app@gmail.com',
      target: '_blank',
      icon: faEnvelope,
    },
  ],
]

const easterEggCount = ref(0)
const router = useRouter()

watch(easterEggCount, (value) => {
  if (value >= 5) {
    router.push({ query: { capybara: null } })
    easterEggCount.value = 0
  }
})
</script>

<template lang="pug">
footer.py-5
  .container
    .row.justify-content-between.align-items-end
      .col-12.col-sm-auto.block
        ul(v-for='(links, i) in list' :key='i')
          li(v-for='(item, j) in links' :key='j')
            NuxtLink(v-if='"to" in item' :to='item.to')
              FontAwesomeIcon.mr-2(v-if='item.icon' :icon='item.icon')
              | {{ item.name }}
            a(v-else :href='item.href' :target='item.target')
              FontAwesomeIcon.mr-2(v-if='item.icon' :icon='item.icon')
              | {{ item.name }}
        ul
          li
            a(target='_blank' href='https://manage.mcip.app/')
              | 社團管理後台
              FontAwesomeIcon.mx-1(:icon='faExternalLinkAlt')

      .col-12.col-lg-auto.text-lg-right.mt-4
        .logo(
          src='~/assets/img/logo/logo_symbol-no-gutter-black.svg'
          @click='easterEggCount += 1'
        )
        div
          | Copyright © 2018 - {{ new Date().getFullYear() }}
          |
          NuxtLink(to='/') 樂台計畫
          | .  All rights reserved
</template>

<style scoped lang="sass">
footer
  $border: 1px solid lighten(grey, 40%)
  color: grey
  font-size: .85rem
  a
    color: lighten(grey, 10%)
    font-weight: normal
    &:hover
      color: lighten(grey, 20%)
  .block
    display: flex
    flex-wrap: wrap
    justify-content: flex-start
    align-items: stretch
    ul
      vertical-align: top
      list-style: none
      display: inline-block
      padding: 0 1.5rem
      margin-bottom: 0
      min-width: 7rem
      li
        margin-bottom: .2rem
      &:not(:last-child)
        border-right: $border
      &:first-child
        padding-left: 0
      @include media-breakpoint-down(xs)
        width: 50%ott
        padding: 0
        padding-right: 1rem
        &:not(:last-child)
          border: none

.logo
  +wh(3rem, 2rem)
  background: url('~/assets/img/logo/logo_symbol-no-gutter-black.svg') center center / contain no-repeat
  display: inline-block
  opacity: .45
  margin-bottom: .5rem
</style>
