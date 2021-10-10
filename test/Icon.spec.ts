import { shallowMount } from '@vue/test-utils'
import Icon from '@/components/Icon.vue'

const DUMMY_PROPS = {
  title: 'Test title',
  desc: 'Test Desc',
  name: 'test_name',
}
const factory = () => {
  return shallowMount(Icon, {
    propsData: DUMMY_PROPS,
    stubs: ['svg-icon'],
  })
}

describe('Icon', () => {
  it('should render properly', () => {
    const wrapper = factory()
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('should should contain props', () => {
    const wrapper = factory()
    const attrs = wrapper.attributes()
    expect(attrs.title).toMatch(DUMMY_PROPS.title)
    expect(attrs.desc).toMatch(DUMMY_PROPS.desc)
    expect(attrs.name).toMatch(DUMMY_PROPS.name)
  })
})
