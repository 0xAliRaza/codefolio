<template>
  <div class="project">
    <div class="project__image">
      <img :src="image" alt="test image" class="img-fluid" />
      <div v-if="technologies" class="project__technologies">
        <span
          v-for="tech in technologies"
          :key="tech"
          class="project__technology"
          >{{ tech }}</span
        >
      </div>
    </div>
    <div class="project__details">
      <div class="project__title">
        <h3>{{ title }}</h3>
      </div>
      <div class="project__description">
        <p>{{ description }}</p>
      </div>
      <div v-if="links" class="project__links">
        <Button
          v-if="links.sourceCode"
          class=""
          :link="links.sourceCode"
          small
          primary
          >Live Demo</Button
        >
        <Button
          v-if="links.liveDemo"
          class=""
          :link="links.liveDemo"
          small
          github
          >Source Code</Button
        >
        <Button
          v-if="links.videoDemo"
          class=""
          :link="links.videoDemo"
          small
          youtube
          >Video Demo</Button
        >
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    title: { required: true, type: String },
    description: { required: true, type: String },
    image: { required: true, type: String },
    links: { default: null, type: Object },
    technologies: { default: null, type: Array },
  },
})
</script>
<style lang="scss" scoped>
@import '@/scss/abstracts';
.project {
  background: transparent;
  border: 1px solid $gray-300;
  overflow: hidden;
  border-radius: 4px;
  cursor: pointer;
  transition: border 0.2s ease-in-out, box-shadow 0.2s ease-in-out,
    transform 0.2s ease-in-out;
  @include hocus {
    transform: translateY(-2px);
    border: 1px solid $gray-400;
    box-shadow: 0 2px pxToRem(16) rgba($gray-800, 0.3);
  }
  &__details {
    padding: pxToRem(16);
  }
  &__title {
    h3 {
      font-weight: 600;
      color: $gray-7;
      font-size: pxToRem(32);
      // margin: 0 0 pxToRem(12);
    }
  }
  &__description {
    p {
      font-size: pxToRem(15);
      line-height: 1.5em;
      margin: 0;
      color: $gray-7;
    }
  }

  &__links {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: pxToRem(22) 0;
    gap: pxToRem(6);
  }

  &__technologies {
    padding: 0 pxToRem(16);
    margin: pxToRem(8) 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: pxToRem(4);
  }
  &__technology {
    line-height: 1.3;
    text-transform: uppercase;
    background: $gray-300;
    color: $gray-600;
    border-radius: pxToRem(2);
    padding: pxToRem(6);
    font-size: pxToRem(12);
    font-weight: 500;
  }
}
</style>
