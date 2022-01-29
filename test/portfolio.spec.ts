import { shallowMount } from '@vue/test-utils'
import projects from '@/pages/projects.vue'

describe('projects', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(projects, {
      data() {
        return {
          navbar: { resumeUrl: '', externalLinks: [] },
        }
      },
      stubs: ['Icon'],
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
