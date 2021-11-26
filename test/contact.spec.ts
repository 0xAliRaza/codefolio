import { shallowMount } from '@vue/test-utils'
import contact from '@/pages/contact.vue'

describe('contact', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(contact, {
      data() {
        return {
          navbar: { resumeUrl: '', externalLinks: [] },
          skills: {
            skills: [
              'HTML',
              'JavaScript',
              'CSS',
              'SCSS',
              'Bootstrap',
              'Angular',
              'Vue.js',
              'Nuxt.js',
              'PHP',
              'Laravel',
              'Bash',
              'Docker',
              'JQuery',
              'Webpack',
            ],
          },
        }
      },
      stubs: ['Icon']
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
