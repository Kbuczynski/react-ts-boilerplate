import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Button from '.'

describe('Button', () => {
  it('should render button with passed text and type submit', () => {
    render(<Button text='Submit' />)
    expect(screen.getByText('Submit')).toBeDefined()
    expect(screen.getByText('Submit')).toHaveProperty('type', 'submit')
  })
})
