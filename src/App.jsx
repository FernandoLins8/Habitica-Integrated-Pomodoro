import React from 'react'
import { Content } from './components/Content'
import { Header } from './components/Header'

function App() {
  return (
      <div className="sm:container sm:mx-auto px-6 h-screen flex flex-col items-center">
        <Header />
        <Content />
      </div>
  )
}

export default App
