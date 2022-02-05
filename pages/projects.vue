<template>
  <div>
    <Header
      :resume-url="navbar.resumeUrl"
      :external-links="navbar.externalLinks"
    />
    <main class="main">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <section class="projects">
              <div class="text-center my-3">
                <h1>Projects</h1>
              </div>
              <div class="row justify-content-center py-4">
                <div
                  v-for="project in projects"
                  :key="project.id"
                  class="col-12 col-md-10 col-lg-6 col-xl-5 mb-4 mb-lg-5"
                >
                  <Project
                    :title="project.title"
                    :description="project.description"
                    :image="project.image"
                    :links="project.links"
                    :technologies="project.technologies"
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content }) {
    const projects = (await $content('projects').fetch()).sort(
      // Sort by projects by id in ascending order
      (a: any, b: any) => {
        if (a.id > b.id) {
          return 1
        }
        if (a.id < b.id) {
          return -1
        }
        return 0
      }
    )
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
