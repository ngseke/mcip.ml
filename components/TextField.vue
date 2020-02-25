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
export default {
  name: 'TextField',
  props: {
    value: { default: null },
    label: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    required: {
      type: Boolean,
      default: false
    },
    max: {
      type: Number,
      default: null
    },
    rows: {
      type: Number,
      default: null
    },
    multiline: {
      type: Boolean,
      default: false
    },
  },
  computed: {
    inputBind () {
      const { label, type, required, max } = this
      
      return {
        placeholder: label,
        type,
        required,
        maxlength: max
      }
    },
    textareaBind () {
      const { label, required, max, rows } = this
      
      return {
        placeholder: label,
        required,
        rows,
        maxlength: max
      }
    }
  }
}
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
  outline: 0
  font-size: $font-size
  color: #333
  padding: .3rem 0
  background: transparent
  z-index:  10
  font-weight: bold
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
  transition: transform .2s, font-size .2s
  font-size: $font-size-sm
  color: darken($gray, 10%)
  z-index: -1
  transform: translateY(0)

.form__field:focus
  font-weight: 700
  border-width: $border-width
  border-image: $btn-gradient
  border-image-slice: 1
  ~ label.form__label
    position: absolute
    top: 0
    display: block
    transition: 0.2s
    font-size: $font-size-sm
    color: $primary
    transform: translateY(0)
</style>