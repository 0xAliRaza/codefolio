<template>
  <div>
    <Header
      :resume-url="navbar.resumeUrl"
      :external-links="navbar.externalLinks"
    />
    <main class="main">
      <section class="projects">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 text-center mb-5 mt-3">
              <h1>Projects</h1>
            </div>
            <div
              v-for="project in projects"
              :key="project.id"
              class="col-12 col-md-10 col-lg-6 col-xl-5 mb-4 mb-lg-5"
            >
              <Project
                :title="project.title"
                :description="project.description"
                image="https://source.unsplash.com/random/1920x1080"
                :links="project.links"
                :technologies="project.technologies"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content }) {
    const projects = await $content('projects').fetch()
    const navbar = await $content('navbar').fetch()
    return {
      projects,
      navbar,
    }
  },
  head: {
    title: 'Projects - Codefolio',
  },
})
</script>

<style lang="scss" scoped>
@import '@/scss/abstracts';
.projects {
  padding: pxToRem(10) 0;
}
</style>
