<template>
  <div>
    <Header
      :resume-url="navbar.resumeUrl"
      :external-links="navbar.externalLinks"
    />
    <main class="main">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-10 col-xl-8">
            <section class="about">
              <div class="about__heading my-3 text-center">
                <h1>About</h1>
              </div>
              <div class="py-3">
                <nuxt-content :document="about" />
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content }) {
    const about = await $content('about').fetch()
    const navbar = await $content('navbar').fetch()
    return {
      about,
      navbar,
    }
  },
  head: {
    title: 'About - Codefolio',
  },
})
</script>
<style lang="scss" scoped>
@import '@/scss/abstracts';
.about {
  padding: pxToRem(20) 0;
}
</style>
