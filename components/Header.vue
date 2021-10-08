<template>
  <div class="container-fluid">
    <nav class="navbar">
      <Button small outline-gray class="me-3">Resume</Button>
      <ul class="navbar__list">
        <li class="navbar__list-item">
          <NuxtLink class="navbar__link" to="/">Contact</NuxtLink>
        </li>
        <li class="navbar__list-item">
          <NuxtLink class="navbar__link" to="/">Skills</NuxtLink>
        </li>
        <li class="navbar__list-item">
          <NuxtLink class="navbar__link" to="/">Portfolio</NuxtLink>
        </li>
        <li class="navbar__list-item">
          <NuxtLink class="navbar__link" to="/">Github</NuxtLink>
        </li>
        <li class="navbar__list-item">
          <NuxtLink class="navbar__link" to="/">Blog</NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/abstracts';
.navbar {
  height: $navbar-height;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: pxToRem(20) pxToRem(10);
  @include media-breakpoint-up(lg) {
    padding: pxToRem(20) pxToRem(40);
  }

  &__list {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  &__link {
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
}
</style>
