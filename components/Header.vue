<template>
  <div class="container-fluid">
    <div
      tabindex="0"
      :class="{
        navbar__toggler: true,
        'navbar__toggler--crossed': navbarVisible,
      }"
      @click="toggleNavbar"
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
    <nav class="navbar" :class="{ 'navbar--show': navbarVisible }">
      <ul class="navbar__list">
        <li class="navbar__list-item" @click="toggleNavbar">
          <NuxtLink class="navbar__link" to="/">Home</NuxtLink>
        </li>
        <li class="navbar__list-item" @click="toggleNavbar">
          <NuxtLink class="navbar__link" to="/about">About</NuxtLink>
        </li>
        <li class="navbar__list-item" @click="toggleNavbar">
          <NuxtLink class="navbar__link" to="/portfolio">Portfolio</NuxtLink>
        </li>
        <li class="navbar__list-item" @click="toggleNavbar">
          <NuxtLink class="navbar__link" to="/contact">Contact</NuxtLink>
        </li>
      </ul>
      <ul class="navbar__list">
        <li
          v-for="link in externalLinks"
          :key="link.url"
          class="navbar__list-item"
          @click="toggleNavbar"
        >
          <a class="navbar__link" :href="link.url" target="_blank"
            >{{ link.text }}
            <Icon name="external-link" desc="resume icon" class="ms-1"
          /></a>
        </li>
        <li class="navbar__list-item">
          <Button
            v-if="resumeUrl"
            :link="resumeUrl"
            small
            outline-gray
            class="navbar__resume-button"
            @click="toggleNavbar"
            >Resume <Icon class="ms-1" name="resume"
          /></Button>
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
  methods: {
    toggleNavbar: function () {
      this.navbarVisible = !this.navbarVisible
    },
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
  height: 100%;
  width: 100%;
  background-color: $gray-1;
  padding: pxToRem(20) pxToRem(10);
  top: 0;
  left: 0;
  z-index: 999;
  &--show {
    position: fixed;
    display: flex;
  }
  @include media-breakpoint-up(md) {
    position: absolute;
    height: $navbar-height;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: transparent;
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
    @include hoctive {
      color: $gray-7;
    }
  }
  a.nuxt-link-exact-active {
    color: $gray-7;
  }
  &__resume-button {
    margin: pxToRem(16) 0 0 0;
    @include media-breakpoint-up(md) {
      margin: 0 0 0 pxToRem(16);
    }
  }

  &__toggler {
    padding: pxToRem(10);
    cursor: pointer;
    position: fixed;
    top: pxToRem(10);
    right: pxToRem(10);
    display: block;
    z-index: 1000;
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
