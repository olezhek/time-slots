import React, { useEffect } from 'react'
import initializeData from './utils/initializeData'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

function App() {
  useEffect(() => {
    initializeData().then((data) => { console.log(data) })
  }, [])

  return (
    <div>
      <header className="header">
      </header>
    </div>
  )
}

export default App
