<template>
  <User :user="user" />
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
