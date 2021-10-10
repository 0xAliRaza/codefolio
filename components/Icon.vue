<template>
  <svg-icon :name="name" :title="title" :desc="desc" class="icon"></svg-icon>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    name: { type: String, required: true },
    title: { type: String, default: 'test title' },
    desc: { type: String, default: 'test desc' },
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
