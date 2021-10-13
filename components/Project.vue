<template>
  <div class="project">
    <div class="project__image">
      <img :src="image" alt="test image" class="img-fluid" />
    </div>
    <div class="project__details">
      <div class="project__title">
        <h3>{{ title }}</h3>
      </div>
      <div class="project__description">
        <p>{{ description }}</p>
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
  },
})
</script>
<style lang="scss" scoped>
@import '@/scss/abstracts';
.project {
  background: transparent;
  border: 1px solid $gray-2;
  border-bottom-right-radius: pxToRem(4);
  border-bottom-left-radius: pxToRem(4);
  cursor: pointer;
  transition: border 0.2s ease-in-out, box-shadow 0.2s ease-in-out,
    transform 0.2s ease-in-out;
  @include hocus {
    transform: translateY(-2px);
    border: 1px solid $gray-3;
    box-shadow: 0 4px pxToRem(16) rgba($dark, 0.4);
  }
  &__details {
    padding: pxToRem(16);
  }
  &__title {
    h3 {
      font-weight: 600;
      color: $gray-8;
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
  &__image {
  }
}
</style>
