<template>
  <div class="container-fluid">
    <div
      tabindex="0"
      :class="{
        navbar__toggler: true,
        'navbar__toggler--crossed': navbarVisible,
      }"
      @click="navbarVisible = !navbarVisible"
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
    <nav class="navbar" :class="{ 'navbar--show': navbarVisible }">
      <Button
        v-if="resumeUrl"
        :link="resumeUrl"
        small
        outline-gray
        class="navbar__resume-button"
        >Resume</Button
      >
      <ul class="navbar__list">
        <li class="navbar__list-item">
          <NuxtLink class="navbar__link" to="/">About</NuxtLink>
        </li>
        <li class="navbar__list-item">
          <NuxtLink class="navbar__link" to="/portfolio">Portfolio</NuxtLink>
        </li>
        <li class="navbar__list-item">
          <NuxtLink class="navbar__link" to="/contact">Contact</NuxtLink>
        </li>
        <!-- <li class="navbar__list-item">
          <NuxtLink class="navbar__link" to="/skills">Skills</NuxtLink>
        </li> -->
        <li
          v-for="link in externalLinks"
          :key="link.url"
          class="navbar__list-item"
        >
          <a class="navbar__link" :href="link.url" target="_blank"
            >{{ link.text }}
            <icon name="external-link" desc="resume icon" class="ms-1"></icon
          ></a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    resumeUrl: { type: String, default: null },
    externalLinks: {
      type: Array,
      default: null,
    },
  },
  data: () => {
    return {
      navbarVisible: false,
    }
  },
})
</script>
<style lang="scss" scoped>
@import '@/scss/abstracts';
.navbar {
  $nav: &;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: transparent;
  padding: pxToRem(20);
  padding: pxToRem(20) pxToRem(10);
  &--show {
    display: flex;
  }
  @include media-breakpoint-up(md) {
    display: flex;
    height: $navbar-height;
    justify-content: flex-end;
    flex-direction: row;
  }

  @include media-breakpoint-up(lg) {
    padding: pxToRem(20) pxToRem(40);
  }

  &__list {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @include media-breakpoint-up(md) {
      flex-direction: row;
    }
  }

  &__link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
    font-size: pxToRem(15);
    font-weight: 500;
    color: $gray-5;
    text-decoration: none;
    padding: pxToRem(12) pxToRem(16);
    transition: color 0.15s ease-in-out;
    @include hocus {
      color: $gray-7;
    }
  }
  &__resume-button {
    margin: 0 0 pxToRem(16) 0;
    @include media-breakpoint-up(md) {
      margin: 0 pxToRem(16) 0 0;
    }
  }

  &__toggler {
    padding: pxToRem(10);
    cursor: pointer;
    position: absolute;
    top: pxToRem(10);
    right: pxToRem(10);
    display: block;
    @include media-breakpoint-up(md) {
      display: none;
    }
    span {
      display: block;
      width: pxToRem(32);
      height: pxToRem(4);
      margin-bottom: pxToRem(5);
      position: relative;
      background: $gray-7;
      border-radius: pxToRem(3);
      z-index: 200;
      transform-origin: pxToRem(4) 0px;
      transition: transform 0.2s cubic-bezier(0.77, 0.2, 0.05, 1),
        background 0.2s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.2s ease;

      &:nth-of-type(1) {
        transform-origin: 0% 0%;
      }

      &:nth-of-type(3) {
        margin-bottom: 0;
        transform-origin: 0% 100%;
      }
    }
    &--crossed {
      padding: 10px;
      span {
        &:nth-child(1) {
          transform: rotate(45deg) translate(-2px, -1px);
        }
        &:nth-child(2) {
          opacity: 0;
          transform: rotate(0deg) scale(0.2, 0.2);
        }
        &:nth-child(3) {
          transform: rotate(-45deg) translate(-2px, -1px);
        }
      }
    }
  }
}
</style>
