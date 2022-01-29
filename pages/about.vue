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
              <div class="about__links">
                <a
                  v-for="(icon, i) in contact.socialIcons"
                  :key="icon.name + i"
                  class="about__link"
                  :href="icon.url"
                  target="_blank"
                >
                  <Icon class="about__icon" :name="icon.name" />
                </a>
              </div>
              <div
                class="
                  my-3
                  text-nowrap
                  d-flex
                  align-items-center
                  justify-content-center
                "
              >
                <Button
                  v-if="navbar.resumeUrl"
                  primary-glow
                  :link="navbar.resumeUrl"
                  class="me-1"
                  >Resume <Icon class="ms-1" name="download"
                /></Button>
                <Button outline-primary nuxt-link="/contact">Contact</Button>
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
    const contact = await $content('contact').fetch()
    return {
      about,
      navbar,
      contact,
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

  &__links {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    grid-gap: pxToRem(8);
    padding: pxToRem(20);
    z-index: 200;
  }
  &__link {
    backface-visibility: hidden;
    transform: translateZ(0);
    display: inline-flex;
    color: $gray-6;
    transition: all 0.2s ease;
    @include hoctive {
      transform: scale(1.2);
      color: $gray-8;
    }
  }
  &__icon {
    width: 2em !important;
    height: 2em !important;
  }
}
</style>
