import { ReactElement } from 'react'

function App(): ReactElement {
  return <div className='App'>{import.meta.env.VITE_APP_TITLE}</div>
}

export default App
