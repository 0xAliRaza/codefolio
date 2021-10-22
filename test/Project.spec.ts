import { shallowMount } from '@vue/test-utils'
import Project from '@/components/Project.vue'

const dummyProps: any = {
  title: 'test_title_lkjsadfk;lkjl;jasdf',
  description: 'test_description_ljsdfljk128734',
  image:
    'https://images.unsplash.com/photo-1633000975009-b1ce39994b81?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNDExMzE4Ng&ixlib=rb-1.2.1&q=80&w=800',
  links: {
    liveDemo: 'https://0xali.com',
    videoDemo: 'https://youtube.com/',
    sourceCode: 'https://github.com/',
  },
  technologies: [
    'HTML',
    'CSS',
    'JavaScript',
    'VueJS',
    'NuxtJS',
    'Docker',
    'SCSS',
    'Git',
  ],
}

const factory = (props = {}) => {
  return shallowMount(Project, { propsData: { ...props }, stubs: ['Button'] })
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

  it('renders image tag', () => {
    const wrapper = factory(dummyProps)
    const img = wrapper.get(`img[src="${dummyProps.image}"]`)
    expect(img).toBeTruthy()
  })
  it('renders live demo button', () => {
    const wrapper = factory(dummyProps)
    const a = wrapper.get(`button-stub[link="${dummyProps.links.liveDemo}"]`)
    expect(a).toBeTruthy()
  })
  it('renders source code button', () => {
    const wrapper = factory(dummyProps)
    const a = wrapper.get(`button-stub[link="${dummyProps.links.sourceCode}"]`)
    expect(a).toBeTruthy()
  })
  it('renders video demo button', () => {
    const wrapper = factory(dummyProps)
    const a = wrapper.get(`button-stub[link="${dummyProps.links.videoDemo}"]`)
    expect(a).toBeTruthy()
  })
  it('renders all the technologies', () => {
    const wrapper = factory(dummyProps)
    const text = wrapper.text()
    dummyProps.technologies.forEach((tech: string) => {
      expect(text).toContain(tech)
    })
  })
})
