import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import Button from './index.vue'

describe('Button', () => {
  it('component renders Hello world properly', () => {
    const wrapper = mount(Button)
    expect(wrapper.text()).toContain('Hello world')
  })
})
