<template>
  <div class="container-md h-100">
    <section class="about">
      <User :user="user" />
    </section>
  </div>
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
.about {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
