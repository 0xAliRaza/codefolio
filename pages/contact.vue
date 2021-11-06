<template>
  <section class="contact">
    <div class="contact__heading">
      <h1>Contact</h1>
    </div>
    <div class="contact__box">
      <a href="https://twitter.com/username" target="__blank">
        <icon class="contact__icon" name="twitter"></icon>
      </a>
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
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: auto 0;
    padding: pxToRem(32);
    max-width: pxToRem(700);
  }
  &__icon {
    width: 2em;
    height: 2em;
  }
}
</style>
