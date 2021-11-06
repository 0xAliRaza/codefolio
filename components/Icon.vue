<template>
  <svg-icon :name="name" :title="title" :desc="desc"></svg-icon>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    name: { type: String, required: true },
    title: { type: String, default: null },
    desc: { type: String, default: null },
  },
})
</script>
<style lang="scss" scoped>
.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1em;
  height: 1em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
}
</style>
