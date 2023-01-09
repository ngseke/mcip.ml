<template lang="pug">
footer.py-5
  .container
    .row.justify-content-between.align-items-end
      .col-12.col-sm-auto.block
        ul(v-for='(links, lIndex) in list' :key='lIndex')
          li(v-for='(i, key) in links' :key='key')
            n-link(v-if='"to" in i' :to='i.to') {{ i.name }}
            a(v-else :href='i.href' :target='i.target')
              fa.mr-2(:icon='i.icon' v-if='i.icon')
              | {{ i.name }}
        ul
          li: a(target='_blank' href='https://manage.mcip.app/') 社團管理後台 #[fa.mx-1(icon='external-link-alt')]

      .col-12.col-lg-auto.text-lg-right.mt-4
        .logo(
          src='~assets/img/logo/logo_symbol-no-gutter-black.svg'
          @click='easterEggCount += 1'
        )
        div
          | Copyright © 2018 - {{ new Date().getFullYear() }}
          |
          nuxt-link(to='/') 樂台計畫
          | .  All rights reserved
</template>

<script lang="ts">
import { defineComponent, ref, useRouter, watch } from '@nuxtjs/composition-api'

type Item =
  | { name: string, to: string }
  | { name: string, href: string, target: string, icon: [string, string] }

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
      icon: ['fab', 'facebook'],
    },
    {
      name: 'LINE 官方帳號',
      to: '/line',
      target: '_blank',
      icon: ['fab', 'line'],
    },
    {
      name: 'mcip.app@gmail.com',
      href: 'mailto:mcip.app@gmail.com',
      target: '_blank',
      icon: ['fas', 'envelope'],
    },
  ],
]

export default defineComponent({
  setup () {
    const easterEggCount = ref(0)
    const router = useRouter()

    watch(easterEggCount, (value) => {
      if (value >= 5) {
        router.push({ query: { capybara: null } })
        easterEggCount.value = 0
      }
    })

    return {
      list,
      easterEggCount,
    }
  },
})
</script>

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
  background: url('~assets/img/logo/logo_symbol-no-gutter-black.svg') center center / contain no-repeat
  display: inline-block
  opacity: .45
  margin-bottom: .5rem
</style>
