import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <main className="h-screen flex items-center justify-center bg-blue-600 text-white text-3xl font-bold">
        Tailwind 4.1 Working! 🚀
      </main>
    </div>
  )
}

export default App
