<template>
  <div class="user">
    <div class="user__image-container">
      <img
        class="user__image"
        :src="user.image"
        :alt="`${user.fullname}'s image`"
      />
    </div>
    <div class="user__meta">
      <h4 class="user__title">{{ user.title }}</h4>
      <h1 class="user__name">{{ user.fullname }}</h1>
      <div class="user__about">
        <p>
          {{ user.about }}
        </p>
      </div>
      <div class="user__cta">
        <Button class="me-1" primary-glow nuxt-link="/contact">Contact</Button>
        <Button class="" outline-primary nuxt-link="/portfolio"
          >Portfolio</Button
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import UserModel from '@/models/User'
export default Vue.extend({
  layout: 'home',
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
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @include media-breakpoint-up(md) {
    align-items: start;
    flex-direction: row;
  }
  &__image-container {
    padding: pxToRem(16);
    @include media-breakpoint-down(md) {
      margin-bottom: pxToRem(16);
    }
  }
  &__image {
    max-width: pxToRem(200);
    border: pxToRem(12) solid $gray-1;
    box-shadow: 0 0 pxToRem(25) rgba(#000, 0.1);
    display: block;
    height: auto;
    border-radius: 300px;

    @include media-breakpoint-up(md) {
      max-width: pxToRem(250);
      border: pxToRem(16) solid $gray-1;
    }
    @include media-breakpoint-up(lg) {
      max-width: pxToRem(300);
      border: pxToRem(18) solid $gray-1;
    }
  }
  &__meta {
    padding: pxToRem(10);
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: pxToRem(650);

    @include media-breakpoint-up(md) {
      align-items: start;
    }
  }
  &__title {
    font-size: pxToRem(14);
    font-weight: 300;
    color: $gray-5;
    margin: 0 0 pxToRem(8);
    @include media-breakpoint-up(md) {
      font-size: pxToRem(16);
      margin: 0 0 pxToRem(10);
    }
  }
  &__name {
    margin: 0 0 pxToRem(12);
    font-size: pxToRem(32);
    font-weight: 600;
    @include media-breakpoint-up(md) {
      line-height: pxToRem(50);
      font-size: pxToRem(48);
      margin: 0 0 pxToRem(20);
    }
  }
  &__about {
    margin-bottom: pxToRem(20);
    p {
      font-size: pxToRem(14);
      font-weight: 400;
      color: $gray-7;
      margin: 0;
      line-height: 1.75em;
    }
  }
}
</style>
