import React, { useContext, useState, useEffect } from 'react'
import { Context } from './MyContext';
import './App.css'
import Navbar from './components/Navbar'
import Chat from './components/Chat'
import LoadingPage from './components/LoadingPage';

function App() {
  const { dark, loading, currentChat } = useContext(Context);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isSmallScreen = windowWidth <= 768;
  // console.log(isSmallScreen)

  return (
    <>
      {loading ? <LoadingPage dark={dark} /> :
        <div className='flex'>
          {isSmallScreen && currentChat ? <Chat /> : <Navbar />}
          {!isSmallScreen && (currentChat ? <Chat /> : <img src='/bg.jpg' className='h-screen w-full md:w-[75%]'/>) }
        </div>
      }
    </>
  )
}

export default App
