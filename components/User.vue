<template>
  <div class="user">
    <img
      class="user__image"
      :src="user.image"
      :alt="`${user.fullname}'s image`"
    />
    <h1>{{ user.fullname }}</h1>
    <div>
      {{ user.about }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import UserModel from '@/models/User'
export default Vue.extend({
  props: {
    user: {
      required: true,
      type: Object as () => UserModel,
    },
  },
})
</script>
<style lang="scss" scoped>
@import '@/scss/abstracts';
.user {
  display: flex;
  flex-direction: column;
  &__image {
    max-width: pxToRem(200);
    display: block;
    height: auto;
  }
}
</style>
