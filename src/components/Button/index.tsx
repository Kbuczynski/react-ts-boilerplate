import { ReactElement } from 'react'

interface ButtonProps {
  text: string
}

function Button({ text }: ButtonProps): ReactElement {
  return <button type='submit'>{text}</button>
}

export default Button
