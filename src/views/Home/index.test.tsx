import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from '.'

describe('Home', () => {
  it('should render home page with title and button', () => {
    render(<Home />)
    expect(screen.getByText('Development: App Title')).toBeDefined()
    expect(screen.getByText('click')).toBeDefined()
    expect(screen.getByText('click')).toHaveProperty('type', 'submit')
  })
})
