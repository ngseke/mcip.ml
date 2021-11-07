<template lang="pug">
h3
  slot
</template>

<style scoped lang="sass">
h3
  font-size: 2.8rem
  font-weight: 700
  line-height: 1.2
  margin-bottom: 1.5rem

  @include media-breakpoint-down(sm)
    font-size: 2.2rem
</style>
