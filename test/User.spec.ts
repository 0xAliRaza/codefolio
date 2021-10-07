import { shallowMount } from '@vue/test-utils'
import User from '@/components/User.vue'

const dummyUser: any = {
  fullname: 'John Doe',
  about:
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
  image: 'source.unsplash.com/random/500x500',
  title: 'some dev',
}
const factory = () => {
  return shallowMount(User, { propsData: { user: dummyUser } })
}

describe('User', () => {
  it('is a Vue instance', () => {
    const wrapper = factory()
    expect(wrapper.vm).toBeTruthy()
  })

  it('renders correctly', () => {
    const wrapper = factory()
    expect(wrapper).toMatchSnapshot()
  })

  it('renders user fullname prop', () => {
    const wrapper = factory()
    expect(wrapper.text()).toContain(dummyUser.fullname)
  })

  it('renders user about prop', () => {
    const wrapper = factory()
    expect(wrapper.text()).toContain(dummyUser.about)
  })

  it('renders user title prop', () => {
    const wrapper = factory()
    expect(wrapper.text()).toContain(dummyUser.title)
  })

  it('renders user image tag', () => {
    const wrapper = factory()
    const img = wrapper.find('img')
    expect(img).toBeTruthy()
    expect(img.attributes('src')).toMatch(dummyUser.image)
  })
})
