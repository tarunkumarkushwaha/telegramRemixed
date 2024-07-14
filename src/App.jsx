import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Chat from './components/Chat'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex'>
      <Navbar />
      <Chat/>
      </div>
    </>
  )
}

export default App
