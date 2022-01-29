import { shallowMount } from '@vue/test-utils'
import contact from '@/pages/contact.vue'

describe('contact', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(contact, {
      data() {
        return {
          navbar: { resumeUrl: '', externalLinks: [] },

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
