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
          contact: {
            formAction: '#',
            socialIcons: [
              { name: 'discord', url: '#' },
              { name: 'twitter', url: '#' },
              { name: 'facebook', url: '#' },
            ],
          },
        }
      },
      stubs: ['Icon'],
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
