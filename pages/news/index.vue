<script setup lang="ts">
import { fetchListBrief } from '~/utils/news'

definePageMeta({
  layout: 'news',
})

const description = '絕不錯過的第一手最新消息、音樂賽事快報，以及你最愛的音樂人不藏私介紹企劃，看樂台計畫就對了！'
useHead({
  title: '最新消息',
  meta: [
    { hid: 'description', name: 'description', content: description },
    { hid: 'og:description', property: 'og:description', content: description },
    { hid: 'og:title', property: 'og:title', content: '最新消息 - 樂台計畫' },
  ],
})

const { data: list } = await useAsyncData(async () => await fetchListBrief(null, 5))

const isEnd = ref(false)
const isLoading = ref(false)

async function loadMore () {
  isLoading.value = true

  if (!list.value) return

  const { id } = list.value[list.value.length - 1]
  const newList = await fetchListBrief(id, 5)

  list.value = [
    ...list.value,
    ...newList,
  ]

  if (!newList.length) isEnd.value = true
  isLoading.value = false
}

</script>

<template>
  <main>
    <Header className="news">
      <SubpageTitle zh="最新消息" en="News" />
    </Header>

    <section>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-10 col-xl-8">
            <Breadcrumb :items="[{ name: `樂台計畫`, url: `/` }, { name: `最新消息` }]" />
            <NewsList :list="list" :isEnd="isEnd" :isLoading="isLoading" @loadMore="loadMore" />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
