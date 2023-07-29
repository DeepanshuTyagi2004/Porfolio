import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Test from './components/test'
import './App.css'
import { ParallaxProvider } from 'react-scroll-parallax'
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ParallaxProvider>
      <div className="bg-cover bg-black fixed w-full h-full z-[-10]"></div>
      <NavBar />
      <Test />
    </ParallaxProvider>
  )
}

export default App
