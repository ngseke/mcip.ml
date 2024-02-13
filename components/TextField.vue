<script setup lang="ts">
const props = withDefaults(defineProps<{
  modelValue: string
  label: string
  type?: HTMLInputElement['type']
  required?: boolean
  max?: number
  rows?: number
  multiline?: boolean
}>(), {
  modelValue: '',
  label: '',
  type: 'text',
  required: false,
  max: undefined,
  rows: undefined,
  multiline: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const handleInput = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement)?.value)
}

const handlers = {
  input: handleInput,
}

const baseBind = computed(() => ({
  placeholder: props.label,
  required: props.required,
  maxlength: props.max,
  value: props.modelValue,
}))

const inputBind = computed(() => ({
  ...baseBind.value,
  type: props.type,
}))

const textareaBind = computed(() => ({
  ...baseBind.value,
  rows: props.rows,
}))
</script>

<template>
  <div class="form__group">
    <input v-if="!multiline" class="form__field" v-bind="inputBind" v-on="handlers">
    <textarea v-else class="form__field" v-bind="textareaBind" v-on="handlers" />
    <label class="form__label">{{ label }}</label>
  </div>
</template>

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
