<script setup lang="ts">
</script>

<template>
  <section>
    <SectionTitle>
      透過樂台計畫
      <br>
      3 分鐘即完成報名
    </SectionTitle>
    <p>不需額外下載 App，用 LINE 就能立刻加入</p>
    <div class="mb-4 d-flex flex-column d-md-block">
      <GradientButton className="line" target="_blank" to="/line">
        加入 LINE 官方帳號
      </GradientButton>
    </div>
    <div class="d-none d-md-inline-block">
      <img class="qrcode" src="~/assets/img/line-app-qrcode-shorthand.png" alt="樂台計畫 LINE App QRCode">
    </div>
  </section>
</template>

<style scoped lang="sass">
.qrcode
  width: 100%
  height: auto
  max-width: 7rem
  margin-right: 2rem
</style>
