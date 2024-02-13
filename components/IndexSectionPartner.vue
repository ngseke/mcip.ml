<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHandshake } from '@fortawesome/free-solid-svg-icons'
import { type Partner } from '~/types/Partner'

defineProps<{
  partners: Partner[]
}>()
</script>

<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <SectionTitle class="mb-5">
            <FontAwesomeIcon class="mr-3" :icon="faHandshake" />
            合作夥伴
          </SectionTitle>
        </div>
        <div class="col-12">
          <div class="row">
            <div
              v-for="partner in partners"
              :key="partner.name"
              class="col-6 col-md-4 col-lg-3"
            >
              <PartnerItem :value="partner" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="sass">
section
  position: relative
  overflow: visible
  &::after
    content: ''
    position: absolute
    +wh(10rem)
    right: .5rem
    bottom: 1rem
    background: url('~/assets/img/peep/deco2.svg') center center / cover
    @include media-breakpoint-down(xs)
      +wh(8rem)
      right: 0
      bottom: -1rem
</style>
