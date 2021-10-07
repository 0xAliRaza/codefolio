import { get, setupTest } from '@nuxt/test-utils'
import 'setimmediate'
describe('index', () => {
  setupTest({ server: true })

  it('renders the index page', async () => {
    const { body } = await get('/')
    expect(body).toBeTruthy()
  })
})
