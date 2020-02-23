<template lang="pug">
- const year = new Date().getFullYear()
footer.py-5
  .container
      .row.justify-content-between
        .col-12.col-sm-auto
          ul
            li: nuxt-link(to='/news') 最新消息
            li: a(href='https://www.facebook.com/mcipApp/' target='_blank' title='樂台計畫 Facebook 粉絲專頁') Facebook 粉絲專頁
          ul
            li: a(href='https://manage.mcip.ml/') 社團管理
            //- li: a(href='https://mcip.ml/') 隱私權政策
        .col-12.col-sm-auto.text-md-right
          div Icons made by #[a(href='https://www.flaticon.com/authors/freepik' title='Freepik') Freepik] from #[a(href='https://www.flaticon.com/' title='Flaticon') www.flaticon.com]
          div Copyright © 2018 - #[=year]  #[a(href='/') 樂台計畫].  All rights reserved
</template>

<script>
export default {
}
</script>

<style scoped lang="sass">
footer
  color: grey
  font-size: .85rem
  a
    color: lighten(grey, 10%)
    font-weight: bold
    +floating-link
    &:hover
      color: lighten(grey, 20%)
  ul
    vertical-align: top
    list-style: none
    display: inline-block
    padding: 0 1rem
    &:not(:last-child)
      border-right: 1px solid lighten(grey, 40%)
    &:first-child
      padding-left: 0
</style>
