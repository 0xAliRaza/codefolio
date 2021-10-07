import { mount } from '@vue/test-utils'
import Button from '@/components/Button.vue'
test('renders correctly', () => {
  const wrapper = mount(Button)
  expect(wrapper.html()).toMatchSnapshot()
})
