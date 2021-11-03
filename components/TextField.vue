<template lang="pug">
.form__group
  input.form__field(
    v-if='!multiline'
    :value='value'
    @input="$emit('input', $event.target.value)"
    v-bind='inputBind'
  )
  textarea.form__field(
    v-else
    :value='value'
    @input="$emit('input', $event.target.value)"
    v-bind='textareaBind'
  )
  label.form__label {{ label }}
</template>

<script>
import { computed, defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'TextField',
  props: {
    value: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    required: {
      type: Boolean,
      default: false,
    },
    max: {
      type: Number,
      default: null,
    },
    rows: {
      type: Number,
      default: null,
    },
    multiline: {
      type: Boolean,
      default: false,
    },
  },
  setup (props) {
    const inputBind = computed(() => ({
      placeholder: props.label,
      type: props.type,
      required: props.required,
      maxlength: props.max,
    }))

    const textareaBind = computed(() => ({
      placeholder: props.label,
      required: props.required,
      rows: props.rows,
      maxlength: props.max,
    }))

    return {
      inputBind,
      textareaBind,
    }
  },
})
</script>

<style scoped lang="sass">
// ref. https://codepen.io/lucasyem/pen/ZEEYKdj

$primary: #26e1a5
$gray: #ddd
$font-size: 1.1rem
$font-size-sm: .8rem
$border-width: 3px

.form__group
  position: relative
  padding: 1rem 0 .25rem
  margin-bottom: .25rem
  width: 100%

.form__field
  width: 100%
  border: 0
  border-bottom: solid $gray $border-width
  border-radius: 0
  outline: 0
  font-size: $font-size
  color: #333
  padding: .3rem 0
  background: transparent
  z-index:  10
  font-weight: bold
  appearance: none

  &::placeholder
    color: transparent
  &:placeholder-shown ~ label.form__label
    font-size: $font-size
    cursor: text
    transform: translateY(1.3rem)

label.form__label
  user-select: none
  position: absolute
  top: 0
  display: block
  transition: transform .2s, font-size .2s, color .2s
  font-size: $font-size-sm
  color: darken($gray, 10%)
  z-index: 1
  pointer-events: none
  transform: translateY(0)

.form__field:focus
  font-weight: 700
  border: 0
  border-bottom-width: $border-width
  border-style: solid
  border-image: $btn-gradient
  border-image-slice: 1
  ~ label.form__label
    font-size: $font-size-sm
    color: $primary
    transform: translateY(0)
</style>
