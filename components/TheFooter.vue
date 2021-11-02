<template lang="pug">
- const year = new Date().getFullYear()
footer.py-5
  .container
      .row.justify-content-between
        .col-12.col-sm-auto.block
          ul(v-for='(links, lIndex) in list' :key='lIndex')
            li(v-for='(i, key) in links' :key='key')
              n-link(v-if='i.to' :to='i.to' :target='i.target')
                fa.mr-2(:icon='i.icon' v-if='i.icon')
                | {{ i.name }}
              a(v-else :href='i.href' :target='i.target')
                fa.mr-2(:icon='i.icon' v-if='i.icon')
                | {{ i.name }}
          ul
            li: a(target='_blank' href='https://manage.mcip.ml/') 社團管理後台 #[fa.mx-1(icon='external-link-alt')]

        .col-12.col-lg-auto.text-lg-right
          img.logo(src='~/assets/img/logo/logo_symbol-no-gutter-black.svg')
          div Copyright © 2018 - #[=year]  #[n-link(to='/') 樂台計畫].  All rights reserved
</template>

<script>
export default {
  data () {
    this.list = [
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

    return {}
  },
}
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
    margin-bottom: 1rem
    ul
      vertical-align: top
      list-style: none
      display: inline-block
      padding: 0 1.5rem
      min-width: 7rem
      li
        margin-bottom: .2rem
      &:not(:last-child)
        border-right: $border
      &:first-child
        padding-left: 0
      @media (max-width: 575.98px)
        width: 50%
        padding: 0
        padding-right: 1rem
        &:not(:last-child)
          border: none
        &:first-child

  img.logo
    display: inline-block
    +wh(auto, 2rem)
    margin-bottom: 1rem
    opacity: .45
    +no-select
</style>
