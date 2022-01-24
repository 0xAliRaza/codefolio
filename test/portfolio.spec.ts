import { shallowMount } from '@vue/test-utils'
import portfolio from '@/pages/portfolio.vue'

describe('portfolio', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(portfolio, {
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
