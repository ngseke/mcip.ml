<template lang="pug">
- const year = new Date().getFullYear()
footer.py-5
  .container
      .row.justify-content-between
        .col-12.col-sm-auto
          ul
            li: n-link(to='/news') 最新消息
            li: a(target='_blank' href='https://www.facebook.com/mcipApp/' title='樂台計畫 Facebook 粉絲專頁') Facebook 粉絲專頁
            li: n-link(target='_blank' to='/line') LINE 官方帳號
          ul
            li: a(target='_blank' href='https://manage.mcip.ml/') 社團管理 #[fa.mx-1(icon='external-link-alt')]
            
        .col-12.col-sm-auto.text-md-right
          div Icons made by #[a(href='https://www.flaticon.com/authors/freepik' title='Freepik') Freepik] from #[a(href='https://www.flaticon.com/' title='Flaticon') www.flaticon.com]
          div Copyright © 2018 - #[=year]  #[n-link(to='/') 樂台計畫].  All rights reserved
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
