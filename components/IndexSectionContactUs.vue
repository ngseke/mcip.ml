<template lang="pug">
section: .container
  .row.justify-content-center.align-items-stretch
    .col-12.col-lg-9
      h3
        fa.mr-3(icon='paper-plane')
        | 聯絡我們
    .col-12.col-lg-6.offset-lg-1
      transition(name='contact' mode='out-in')
        form(@submit.prevent='submit' v-if='status !== statusEnum.success')
          TextField(label='你的大名' required :max='50' v-model.trim='contact.name')
          TextField(type='email' label='Email' required :max='100' v-model.trim='contact.email')
          TextField(type='tel' label='聯絡電話 (可留空)' :max='15' v-model.trim='contact.phone')
          TextField(label='內容' multiline required :rows='5' :max='3000' v-model.trim='contact.content')
          transition(name='contact')
            .d-flex.align-items-center(v-if='isCaptchaShow')
              canvas.captcha.mr-3(ref='captcha' width='100' height='36' @click='createCaptcha')
              TextField.flex-grow-1.mb-0(label='驗證碼 (請輸入阿拉伯數字)' :max='4' v-model.trim='captchaCode')

          GradientButton(className='submit' :disabled='isSubmitDisabled')
            span(v-if='status === statusEnum.submitting') 傳送中...
            span(v-else) 送出

          small.text-danger(v-if='errorMessage') {{ errorMessage }}
        .success(v-else)
          fa.icon(icon='clipboard-check')
          span 謝謝您的來信，我們將會盡快與您聯繫!
    .col-12.col-lg-auto
      .peep
</template>

<script>
import { computed, defineComponent, nextTick, reactive, ref, watch, useContext } from '@nuxtjs/composition-api'
import join from 'url-join'

import { create } from '~/modules/captcha'
import { API_URL } from '~/modules/config'

const fieldNames = ['name', 'email', 'phone', 'content']

/** 枚舉狀態 */
const statusEnum = Object.freeze({
  default: Symbol('default'),
  submitting: Symbol('submitting'),
  success: Symbol('success'),
})

export default defineComponent({
  setup () {
    const contact = reactive({ name: '', email: '', phone: '', content: '' })
    const isCaptchaShow = ref(false)
    const captchaCode = ref(null)
    const captchaAnswer = ref(null)
    const status = ref(statusEnum.default)
    const errorMessage = ref(null)

    const isSubmitDisabled = computed(() => {
      return (
        status.value === statusEnum.submitting ||
        captchaCode.value !== captchaAnswer.value
      )
    })

    const captcha = ref()
    const createCaptcha = () => {
      captchaAnswer.value = create(captcha.value)
    }

    watch(
      contact,
      async (value) => {
        if (isCaptchaShow.value) return
        if (fieldNames.filter(i => i !== 'phone').every(i => value[i])) {
          isCaptchaShow.value = true
          await nextTick().value
          createCaptcha()
        }
      },
      { deep: true }
    )

    const { $axios } = useContext()

    /** 送出聯絡我們表單 */
    const submit = async () => {
      const url = join(API_URL, '/firestoreContact')

      errorMessage.value = null
      status.value = statusEnum.submitting

      try {
        await $axios.$post(url, { ...contact, source: 2, type: 2 })
        // await (new Promise(x => setTimeout(x, 5000)))
        status.value = statusEnum.success
      } catch (e) {
        errorMessage.value = '發生了一些問題，請稍後再試'
        status.value = statusEnum.error
      }
    }

    return {
      fieldNames,
      statusEnum,
      contact,
      isCaptchaShow,
      captchaCode,
      captchaAnswer,
      status,
      errorMessage,
      isSubmitDisabled,
      captcha,
      createCaptcha,
      submit,
    }
  },
})
</script>

<style lang="sass" scoped>
h3
  font-size: 2rem
  font-weight: 700
  margin-bottom: 1.5rem

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
  +wh(14rem, 26rem)
  background: center / contain no-repeat url('~assets/img/peep/woman-explaining.svg')
  margin-left: 3rem
  @include media-breakpoint-down(md)
    display: none
</style>
