import React, { useContext, useState } from 'react'
import { Context } from './MyContext';
import './App.css'
import Navbar from './components/Navbar'
import Chat from './components/Chat'
import LoadingPage from './components/LoadingPage';

function App() {
  const { dark, loading, currentChat } = useContext(Context);
  
  return (
    <>
      {loading ? <LoadingPage dark={dark} /> : <div className='flex'>
        <Navbar />
        {currentChat && <Chat />}
      </div>}
    </>
  )
}

export default App
