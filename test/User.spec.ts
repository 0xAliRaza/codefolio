import { shallowMount } from '@vue/test-utils'
import User from '@/components/User.vue'

const dummyUser: any = {
  fullname: 'John Doe',
  about:
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
  image: 'source.unsplash.com/random/500x500',
}
const factory = () => {
  return shallowMount(User, { propsData: { user: dummyUser } })
}

describe('User', () => {
  test('is a Vue instance', () => {
    const wrapper = factory()
    expect(wrapper.vm).toBeTruthy()
  })

  test('renders correctly', () => {
    const wrapper = factory()
    expect(wrapper).toMatchSnapshot()
  })

  test('it renders user fullname prop', () => {
    const wrapper = factory()
    expect(wrapper.text()).toContain(dummyUser.fullname)
  })

  test('it renders user about prop', () => {
    const wrapper = factory()
    expect(wrapper.text()).toContain(dummyUser.about)
  })

  test('it renders user image tag', () => {
    const wrapper = factory()
    const img = wrapper.find('img')
    expect(img).toBeTruthy()
    expect(img.attributes('src')).toMatch(dummyUser.image)
  })
})
