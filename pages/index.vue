<template>
  <div class="h-100">
    <Header
      :resume-url="navbar.resumeUrl"
      :external-links="navbar.externalLinks"
    />
    <main class="pt-navbar h-100">
      <section class="about">
        <User :user="user" />
      </section>
    </main>
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
.about {
  padding: pxToRem(10);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
