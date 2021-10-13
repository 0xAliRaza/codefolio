import { shallowMount } from '@vue/test-utils'
import portfolio from '@/pages/portfolio.vue'

describe('portfolio', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(portfolio, { stubs: ['Project'] })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
