<template>
  <section class="about">
    <User :user="user" />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content }) {
    const user = await $content('user').fetch()
    return {
      user,
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
  height: calc(100% - #{$navbar-height});
}
</style>
