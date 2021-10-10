import { shallowMount } from '@vue/test-utils'
import Header from '@/components/Header.vue'
const DUMMY_PROPS = {
  resumeUrl: 'https://test.com',
  externalLinks: [
    { text: 'Test one', url: 'https://test.com/#testlink1' },
    { text: 'Test two', url: 'https://test.com/#testlink2' },
  ],
}
const factory = (props = {}) =>
  shallowMount(Header, {
    stubs: ['NuxtLink', 'Icon', 'Button'],
    propsData: props,
  })

describe('Header', () => {
  it('renders correctly', () => {
    const wrapper = factory()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('does not contain resume button or external links', () => {
    const wrapper = factory()
    expect(wrapper.find(`button-stub`).exists()).toBeFalsy()
    expect(wrapper.find(`a`).exists()).toBeFalsy()
  })

  it('contains resume button', () => {
    const wrapper = factory(DUMMY_PROPS)
    expect(
      wrapper.find(`button-stub[link="${DUMMY_PROPS.resumeUrl}"]`).exists()
    ).toBeTruthy()
  })
  it('contains external links', () => {
    const wrapper = factory(DUMMY_PROPS)
    DUMMY_PROPS.externalLinks.forEach((val) => {
      const el = wrapper.find(`a[href="${val.url}"]`)
      expect(el.exists()).toBeTruthy()
      expect(el.text()).toMatch(val.text)
    })
  })
})
