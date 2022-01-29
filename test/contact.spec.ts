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
            location: 'Example, USA.',
            email: 'contact@example.com',
            phone: '+1-555-555-0100',
          },
        }
      },
      stubs: ['Icon'],
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
