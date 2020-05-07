<template lang="pug">
section: .container
  .row.justify-content-center.align-items-center
    .col-12.col-lg-9
      h3
        fa.mr-3(icon='paper-plane')
        | 聯絡我們
    .col-12.col-lg-6.offset-lg-1
      transition(name='contact' mode='out-in')
        form(@submit.prevent='submit' v-if='status !== statusEnum.success')
          TextField(label='姓名' :max='50' :required='true' v-model.trim='contact.name')
          TextField(type='email' label='Email' :max='100' :required='true' v-model.trim='contact.email')
          TextField(type='tel' label='聯絡電話 (可留空)' :max='15' v-model.trim='contact.phone')
          TextField(:multiline='true' label='內容' :rows='5' :max='3000' v-model.trim='contact.content')
          transition(name='contact')
            .d-flex.align-items-center(v-if='isCaptchaShow')
              canvas.captcha.mr-3(ref='captcha' width='100' height='36' @click='createCaptcha')
              TextField.flex-grow-1.mb-0(label='驗證碼 (請輸入阿拉伯數字)' :max='4' v-model.trim='captchaCode')
              
          button.gradient-btn.submit(type='submit' :disabled='isSubmitDisabled')
            span(v-if='status === statusEnum.submitting') 傳送中...
            span(v-else) 送出
            
          small.text-danger(v-if='errorMessage') {{ errorMessage }}
        .success(v-else)
          fa.icon(icon='clipboard-check')
          span 謝謝您的來信，我們將會盡快與您聯繫!
    .col-12.col-lg-auto
      img.peep(src='~/assets/img/peep/woman-explaining.svg')
</template>

<script>
import { create } from '~/assets/js/captcha.js'
import TextField from '~/components/TextField.vue'

export default {
  components: {
    TextField
  },
  data () {
    this.fieldNames = [`name`, `email`, `phone`, `content`]
    
    // 枚舉狀態
    this.statusEnum = Object.freeze({
      default: Symbol('default'),
      submitting: Symbol('submitting'),
      success: Symbol('success'),
    })
    
    return {
      contact: { name: '',  email: '', phone: '', content: '' },
      isCaptchaShow: false,
      captchaCode: null,
      captchaAnswer: null,
      status: this.statusEnum.default,
      errorMessage: null,
    }
  },
  methods: {
    createCaptcha () {
      this.captchaAnswer = create(this.$refs.captcha)
    },
    // 送出聯絡我們表單
    async submit () {
      const url = `https://us-central1-mc-integration-platform.cloudfunctions.net/firestoreContact`
      const { statusEnum } = this
      
      this.errorMessage = null
      this.status = statusEnum.submitting
      
      try {
        const res = await this.$axios.$post(url, { ...this.contact, source: 2, type: 2 })
        // await (new Promise(x => setTimeout(x, 5000)))
        this.status = statusEnum.success
      } catch (e) {
        console.log(e)
        this.errorMessage = '發生了一些問題，請稍後再試'
        this.status = statusEnum.error
      }
    },
  },
  computed: {
    isSubmitDisabled () {
      return this.status === this.statusEnum.submitting || this.captchaCode !== this.captchaAnswer
    }
  },
  watch: {
    contact: {
      async handler (value) {
        if (this.isCaptchaShow) return
        if (this.fieldNames.filter(i => i !== 'phone').every(i => value[i])) {
          this.isCaptchaShow = true
          await this.$nextTick()
          this.createCaptcha()
        }
      },
      deep: true,
    },
  },
}
</script>

<style lang="sass" scoped>
h3
  font-size: 2rem
    
form
  display: flex
  flex-direction: column

.captcha
  border: solid #ddd 1px
  border-radius: 5px
  cursor: pointer
  
.success
  +flex-center
  flex-direction: row
  margin-top: 3rem
  padding: 2rem
  border-radius: 15px
  .icon
    font-size: 2.5rem
    margin-right: 1rem
    color: #555
  span
    color: #777

.contact
  &-enter
    transform: scale(.9)
    opacity: 0
  &-leave-to
    transform: scale(.9)
    opacity: 0
  &-enter-active, &-leave-active
    transition: all .3s
  &-enter-to, &-leave
    transform: none
    opacity: 1
    
.peep
  +wh(14rem, auto)
  margin-left: 3rem
  @media (max-width: 991.98px)
    display: none


</style>