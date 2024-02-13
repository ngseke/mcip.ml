<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faClipboardCheck, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { create } from '~/utils/captcha'
import { submitContactUsForm } from '~/utils/contact-us'

const fieldNames = ['name', 'email', 'phone', 'content'] as const

enum Status {
  default,
  submitting,
  success,
  error
}
const contact = reactive({ name: '', email: '', phone: '', content: '' })
const isCaptchaShow = ref(false)
const captchaCode = ref()
const captchaAnswer = ref<string | null>(null)
const status = ref(Status.default)
const errorMessage = ref<string | null>(null)

const isSubmitDisabled = computed(() => {
  return (
    status.value === Status.submitting ||
    captchaCode.value !== captchaAnswer.value
  )
})

const captcha = ref<HTMLCanvasElement | null>(null)
const createCaptcha = () => {
  if (!captcha.value) return
  captchaAnswer.value = create(captcha.value)
}

watch(
  contact,
  async (value) => {
    if (isCaptchaShow.value) return
    if (fieldNames.filter(i => i !== 'phone').every(i => value[i])) {
      isCaptchaShow.value = true
      await nextTick()
      createCaptcha()
    }
  },
  { deep: true }
)

const submit = async () => {
  errorMessage.value = null
  status.value = Status.submitting
  const body = { ...contact, source: 2, type: 2 }
  try {
    await submitContactUsForm(body)
    status.value = Status.success
  } catch (e) {
    errorMessage.value = '發生了一些問題，請稍後再試'
    status.value = Status.error
  }
}
</script>

<template>
  <section>
    <div class="container">
      <div class="row justify-content-center align-items-stretch">
        <div class="col-12 col-lg-9">
          <h3>
            <FontAwesomeIcon class="mr-3" :icon="faPaperPlane" />聯絡我們
          </h3>
        </div>
        <div class="col-12 col-lg-6 offset-lg-1">
          <Transition name="contact" mode="out-in">
            <form v-if="status !== Status.success" @submit.prevent="submit">
              <TextField v-model.trim="contact.name" label="你的大名" required :max="50" />
              <TextField v-model.trim="contact.email" type="email" label="Email" required :max="100" />
              <TextField v-model.trim="contact.phone" type="tel" label="聯絡電話 (可留空)" :max="15" />
              <TextField
                v-model.trim="contact.content"
                label="內容"
                multiline
                required
                :rows="5"
                :max="3000"
              />

              <Transition name="contact">
                <div v-if="isCaptchaShow" class="d-flex align-items-center">
                  <canvas
                    ref="captcha"
                    class="captcha mr-3"
                    width="100"
                    height="36"
                    @click="createCaptcha"
                  />
                  <TextField
                    v-model.trim="captchaCode"
                    class="flex-grow-1 mb-0"
                    label="驗證碼 (請輸入阿拉伯數字)"
                    :max="4"
                  />
                </div>
              </Transition>

              <GradientButton className="submit" :disabled="isSubmitDisabled" type="submit">
                <span v-if="status === Status.submitting">傳送中...</span>
                <span v-else>送出</span>
              </GradientButton>

              <small v-if="errorMessage" class="text-danger">{{ errorMessage }}</small>
            </form>

            <div v-else class="success">
              <FontAwesomeIcon class="icon" :icon="faClipboardCheck" /><span>謝謝您的來信，我們將會盡快與您聯繫!</span>
            </div>
          </Transition>
        </div>
        <div class="col-12 col-lg-auto">
          <div class="peep" />
        </div>
      </div>
    </div>
  </section>
</template>

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
  &-enter-from
    transform: scale(.9)
    opacity: 0
  &-leave-to
    transform: scale(.9)
    opacity: 0
  &-enter-active, &-leave-active
    transition: all .3s
  &-enter-to, &-leave-from
    transform: none
    opacity: 1

.peep
  +wh(14rem, 26rem)
  background: center / contain no-repeat url('~/assets/img/peep/woman-explaining.svg')
  margin-left: 3rem
  @include media-breakpoint-down(md)
    display: none
</style>
