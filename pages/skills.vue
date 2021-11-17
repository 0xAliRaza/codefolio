<template>
  <section class="skills">
    <div class="skills__heading my-3">
      <h1>Skills</h1>
    </div>  
    <div class="skills__box">
      <div v-for="skill in skills.skills" :key="skill" class="skills__tag">
        {{ skill }}
      </div>
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
.skills {
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  height: 100%;
  &__box {
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    display: flex;
    margin: auto;
    padding: pxToRem(32);
    max-width: pxToRem(700);
  }
  &__tag {
    display: inline-flex;
    padding: pxToRem(12);
    font-size: pxToRem(18);
    font-weight: 300;
    color: $gray-6;
    cursor: default;
    transition: all 0.2s ease;
    backface-visibility: hidden;
    transform: translateZ(0);
    @include media-breakpoint-up(sm) {
      font-size: pxToRem(20);
      padding: pxToRem(18);
    }
    @include media-breakpoint-up(md) {
      font-size: pxToRem(22);
      padding: pxToRem(20);
    }
    @include hocus {
      transform: scale(1.2);
      color: $gray-7;
    }
    user-select: none;
  }
}
</style>
