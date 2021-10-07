<template>
  <button
    class="button"
    :class="{ button__primary: primary, button__outline: outline }"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    primary: Boolean,
    outline: Boolean,
  },
})
</script>

<style lang="scss" scoped>
@import '@/scss/abstracts';
.button {
  display: inline-block;
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
  &__primary {
    background-color: $primary;
    border-color: $primary;
    color: $light;
    @include glow($primary);
  }
  &__outline {
    background-color: $gray-1;
    border-color: $primary;
    color: $primary;
    @include hocus-active {
      background-color: $primary;
      color: $light;
    }
  }
}
</style>
