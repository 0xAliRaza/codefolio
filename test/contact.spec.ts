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
          },
        }
      },
      stubs: ['Icon'],
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
