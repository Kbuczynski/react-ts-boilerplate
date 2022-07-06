import Button from '@components/Button/'
import { ReactElement } from 'react'

function Home(): ReactElement {
  return (
    <div className='Home'>
      {import.meta.env.VITE_APP_TITLE || 'Hello World!'}
      <Button text='click' />
    </div>
  )
}

export default Home
