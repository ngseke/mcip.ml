<template lang="pug">
main
</template>

<script>
export default {
  // 轉址至新的路由
  asyncData ({ redirect, query: { id } }) {
    redirect(id ? `/news/${id}` : '/news')
  },
}
</script>
