import { shallowMount } from '@vue/test-utils'
import about from '@/pages/about.vue'

describe('about', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(about, {
      data() {
        return {
          navbar: { resumeUrl: '', externalLinks: [] },
          about: {},
        }
      },
      stubs: ['Icon', 'nuxt-content'],
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
