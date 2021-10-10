<template>
  <div class="h-100">
    <Header />
    <main class="main">
      <Nuxt />
    </main>
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/abstracts';
.main {
  padding-top: $navbar-height;
  height: 100%;
}
</style>
