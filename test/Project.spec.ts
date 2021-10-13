import { shallowMount } from '@vue/test-utils'
import Project from '@/components/Project.vue'

const dummyProps = {
  title: 'test_title_lkjsadfk;lkjl;jasdf',
  description: 'test_description_ljsdfljk128734',
  image:
    'https://images.unsplash.com/photo-1633000975009-b1ce39994b81?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNDExMzE4Ng&ixlib=rb-1.2.1&q=80&w=800',
}

const factory = (props = {}) => {
  return shallowMount(Project, { propsData: { ...props } })
}
describe('Project', () => {
  it('renders correctly', () => {
    const wrapper = factory(dummyProps)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders project title', () => {
    const wrapper = factory(dummyProps)
    expect(wrapper.text()).toContain(dummyProps.title)
  })

  it('renders project description', () => {
    const wrapper = factory(dummyProps)
    expect(wrapper.text()).toContain(dummyProps.description)
  })

  it('renders image tag', async () => {
    const wrapper = await factory(dummyProps)
    const img = wrapper.find('img')
    expect(img).toBeTruthy()
    expect(img.attributes('src')).toMatch(dummyProps.image)
  })
})
