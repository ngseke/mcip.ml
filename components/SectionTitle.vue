<template>
  <h3>
    <slot />
  </h3>
</template>

<style scoped lang="sass">
h3
  display: flex
  font-size: 2.8rem
  font-weight: 700
  line-height: 1.2
  margin-bottom: 1.5rem

  @include media-breakpoint-down(sm)
    font-size: 2.2rem
</style>
