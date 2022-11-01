import React from 'react'
import { Content } from './components/Content'
import { Header } from './components/Header'
import { AuthProvider } from './contexts/auth'

function App() {
  return (
    <AuthProvider>
      <div className="sm:container sm:mx-auto px-6 h-screen flex flex-col items-center">
        <Header />
        <Content />
      </div>
    </AuthProvider>
  )
}

export default App
