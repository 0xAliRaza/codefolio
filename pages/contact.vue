<template>
  <section class="contact">
    <div class="contact__heading">
      <h1>Contact</h1>
    </div>
    <div class="contact__box">
      <div class="contact__buttons">
        <Button primaryGlow link="mailto:username@mail.com">Email me</Button>
      </div>
      <div class="contact__links">
        <a
          class="contact__link"
          href="https://twitter.com/username"
          target="_blank"
        >
          <icon class="contact__icon" name="twitter"></icon>
        </a>
        <a
          class="contact__link"
          href="https://github.com/username"
          target="_blank"
        >
          <icon class="contact__icon" name="github"></icon>
        </a>
        <a class="contact__link" href="username@outlook.com" target="_blank">
          <icon class="contact__icon" name="skype"></icon>
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content }) {
    const skills = await $content('skills').fetch()
    return {
      skills,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/scss/abstracts';
.contact {
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  height: 100%;
  &__box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: auto 0;
    padding: pxToRem(32);
    max-width: pxToRem(700);
  }
  &__buttons {
    margin-bottom: pxToRem(24);
  }
  &__icon {
    width: 2em;
    height: 2em;
  }
  &__links {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    grid-gap: pxToRem(8);
  }
  &__link {
    backface-visibility: hidden;
    transform: translateZ(0);
    display: inline-flex;
    color: $gray-6;
    transition: all 0.2s ease;
    @include hocus {
      transform: scale(1.2);
      color: $gray-8;
    }
  }
}
</style>
