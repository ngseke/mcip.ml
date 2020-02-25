<template lang="pug">
- const year = new Date().getFullYear()
footer.py-5
  .container
      .row.justify-content-between
        .col-12.col-sm-auto
          ul: li(v-for='(i, key) in list' :key='key')
            n-link(v-if='i.to' :to='i.to' :target='i.target') {{ i.name }}
            a(v-else :href='i.href' :target='i.target') {{ i.name }}
          ul
            li: a(target='_blank' href='https://manage.mcip.ml/') 社團管理 #[fa.mx-1(icon='external-link-alt')]
            
        .col-12.col-sm-auto.text-md-right
          div Icons made by #[a(href='https://www.flaticon.com/authors/freepik' title='Freepik') Freepik] from #[a(href='https://www.flaticon.com/' title='Flaticon') www.flaticon.com]
          div Copyright © 2018 - #[=year]  #[n-link(to='/') 樂台計畫].  All rights reserved
</template>

<script>
export default {
  data () {
    this.list = [
      { name: '最新消息', to: '/news' },
      { name: '常見問題', to: '/faq' },
      { name: 'Facebook 粉絲專頁', href: 'https://www.facebook.com/mcipApp/', target: '_blank' },
      { name: 'LINE 官方帳號', to: '/line', target: '_blank' }
    ]
    return {}
  }
}
</script>

<style scoped lang="sass">
footer
  color: grey
  font-size: .85rem
  a
    color: lighten(grey, 10%)
    font-weight: bold
    &:hover
      color: lighten(grey, 20%)
  ul
    vertical-align: top
    list-style: none
    display: inline-block
    padding: 0 1.5rem
    li
      margin-bottom: .2rem
    &:not(:last-child)
      border-right: 1px solid lighten(grey, 40%)
    &:first-child
      padding-left: 0
</style>
