<script setup lang="ts">
import { marked } from 'marked'
import { throttle } from 'throttle-debounce'
import type { ArticleSidebarItem } from '~/types/ArticleSidebarItem'
import { fetchFaqs } from '~/utils/static-data'

const navbar = [
  { name: 'News', to: '/news' },
  { name: 'FAQ', to: '/faq', active: true },
]

const { data: faqs } = await useAsyncData(fetchFaqs)

useHead({
  title: '常見問題',
  meta: [
    { hid: 'og:title', property: 'og:title', content: '常見問題 - 樂台計畫' },
  ],
})

const list = ref<ArticleSidebarItem[] | null>(null)
const sections = ref<HTMLElement[]>([])

onMounted(() => {
  const throttled = throttle(100, () => {
    list.value = sections.value.map((section) => {
      const el = section.querySelector('h2')
      const children = [...section.querySelectorAll('h3')]
        .map(el => getSidebarItem(el))

      return getSidebarItem(el, children)
    })
  })

  throttled()

  window.addEventListener('scroll', throttled)
  onBeforeUnmount(() => { window.removeEventListener('scroll', throttled) })
})

function getSidebarItem (el: HTMLElement | null, children?: ArticleSidebarItem[]) {
  if (!el) return { id: '', title: '', top: 0 }
  return {
    id: `#${el.getAttribute('id')}`,
    title: el.innerText,
    top: el.getBoundingClientRect().top - 95,
    children,
  } satisfies ArticleSidebarItem
}

function getIdString (_: string) {
  return _.replace(/ +/g, '-').replace(/\/+/g, '-')
}
</script>

<template>
  <div>
    <TheNavbar :items="navbar" />
    <main class="faq" itemscope itemtype="https://schema.org/FAQPage">
      <Header className="faq">
        <SubpageTitle zh="常見問題" en="FAQ" />
      </Header>
      <div class="container">
        <Breadcrumb :items="[ { name: `樂台計畫`, url: `/` }, { name: `常見問題` }]" />
      </div>
      <div class="container">
        <div class="row justify-content-center align-items-start">
          <div class="col-12 col-lg-9 col-xl-8">
            <section v-for="(group, groupIndex) in faqs" ref="sections" :key="groupIndex">
              <h2 :id="getIdString(group.title)">
                {{ group.title }}
              </h2>
              <div
                v-for="(content, contentIndex) in group.content"
                :key="contentIndex"
                class="item"
                itemscope
                itemprop="mainEntity"
                itemtype="https://schema.org/Question"
              >
                <h3 :id="getIdString(content.question)" itemprop="name">
                  {{ content.question }}
                </h3>
                <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                  <div itemprop="text" v-html="marked(content.answer, { breaks: true })" />
                </div>
              </div>
            </section>
          </div>
          <div class="col col-xl-3 d-none d-lg-flex sticky-top">
            <ArticleSidebar class="scroll-spy-navbar" :value="list" />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped lang="sass">
main.faq
  background-color: #f8f8f8
  section
    background-color: #f8f8f8
    +py(2rem)

  h2
    border-bottom: solid 1px #ddd
    padding-bottom: 1rem
    margin-bottom: 3rem
    .anchor
      margin-left: .5rem

  .item
    margin-bottom: 3rem
    h3
      font-size: 1.5rem
      margin-bottom: .75rem
      font-weight: 700
    :deep(li)
      margin-bottom: .5rem

.sticky-top
  position: sticky
  top: 5rem
</style>
