import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      </div>
      <h1>Bondflix</h1>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}> */}
        <button>
          {/* count is {count} */}
          View the gallery
        </button>
        <p>
          {/* Edit <code>src/App.tsx</code> and save to test HMR */}
          Bondflix Collection
        </p>
      </div>
      <p className="read-the-docs">
        Click on the gallery button to view the collection
      </p>
    </>
  )
}

export default App