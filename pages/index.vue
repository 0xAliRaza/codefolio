<template>
  <div>
    <Header
      :resume-url="navbar.resumeUrl"
      :external-links="navbar.externalLinks"
    />
    <main class="main">
      <section class="home">
        <User :user="user" />
      </section>
    </main>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content }) {
    const user = await $content('user').fetch()
    const navbar = await $content('navbar').fetch()
    return {
      user,
      navbar,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/scss/abstracts';
.home {
  padding: pxToRem(10);
  display: flex;
  align-items: center;
  justify-content: center;
  @include full-height;
}
</style>
