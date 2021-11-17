<template>
  <a v-if="link" :href="link" :class="{ ...classes }">
    <slot></slot>
  </a>
  <nuxt-link v-else-if="nuxtLink" :to="nuxtLink" :class="{ ...classes }">
    <slot></slot>
  </nuxt-link>
  <button v-else :class="{ ...classes }">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    small: Boolean,
    primary: Boolean,
    primaryGlow: Boolean,
    youtube: Boolean,
    github: Boolean,
    outlinePrimary: Boolean,
    outlineGray: Boolean,
    link: {
      default: null,
      type: String,
    },
    nuxtLink: {
      default: null,
      type: String,
    },
  },
  computed: {
    classes(): any {
      return {
        button: true,
        'button--primary': this.primary,
        'button--primary-glow': this.primaryGlow,
        'button--outline-primary': this.outlinePrimary,
        'button--youtube': this.youtube,
        'button--github': this.github,
        'button--outline-gray': this.outlineGray,
        'button--small': this.small,
      }
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/scss/abstracts';
a.button {
  text-decoration: none;
}
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: pxToRem(16);
  font-weight: 400;
  line-height: 1.5;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  padding: pxToRem(8) pxToRem(16);
  border: 1px solid transparent;
  border-radius: 300px;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    transform 0.15s ease-in-out;
  &--small {
    font-size: pxToRem(15);
    padding: pxToRem(6) pxToRem(14);
  }
  &--primary {
    background-color: $primary;
    border-color: $primary;
    color: $light;
    @include hocus {
      background-color: darken($primary, 10);
      border-color: darken($primary, 10);
    }
  }
  &--primary-glow {
    background-color: $primary;
    border-color: $primary;
    color: $light;
    @include glow($primary);
  }
  &--youtube {
    background-color: $youtube;
    border-color: $youtube;
    color: $light;
    @include hocus-active {
      background-color: darken($youtube, 10);
      border-color: darken($youtube, 10);
    }
  }
  &--github {
    background-color: $github;
    border-color: $github;
    color: $light;
    @include hocus-active {
      background-color: darken($github, 10);
      border-color: darken($github, 10);
    }
  }
  &--outline {
    &-primary {
      background-color: transparent;
      border-color: $primary;
      color: $primary;
      @include hocus-active {
        background-color: $primary;
        color: $light;
      }
    }
    &-gray {
      background-color: transparent;
      border-color: $gray-7;
      color: $gray-7;
      @include hocus-active {
        background-color: $gray-7;
        color: $light;
      }
    }
  }
}
</style>
