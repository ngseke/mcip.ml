<template lang="pug">
section.attention-section: .container
  .row.justify-content-center
    .col-12.col-lg-10.col-xl-8
      .row.align-items-center
        .col-12.col-md-auto.text-center
          fa.primary-icon(icon='shield-virus')
        .col
          h3 有關新型冠狀病毒 (COVID-19) 造成相關影響之通知
          p 受疫情影響，今年部分賽事已決議延期或停止舉辦，更多相關訊息請參考各賽事之 Facebook 粉絲專頁公告
</template>

<style lang="sass" scoped>
.attention-section
  position: relative
  color: white
  background-color: nth($secondary-list, 3)
  .primary-icon
    font-size: 3rem
    display: inline-block
    margin-bottom: 1rem
  h3
    font-size: 1.5rem
    margin-bottom: .75rem
  p
    margin: 0
  .no-wrap
    flex-wrap: nowrap
</style>