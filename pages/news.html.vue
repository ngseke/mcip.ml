<template lang="pug">
main
</template>

<script>
export default {
  // 轉址至新的路由
  async asyncData ({ redirect, query }) {
    const { id } = query
    if (!id) error({ statusCode: 404 })

    redirect(`/news/${id}`)
  },
}
</script>
