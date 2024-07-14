import React, { useEffect, useState, useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import SideBar from './SideBar';
import { Context } from '../MyContext';

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false)
  const { dark, setdark, query, setquery } = useContext(Context);

  const style = {
    uiMode: dark ?
      "text-white bg-slate-900"
      :
      "text-black bg-green-300"
  }
  let navigate = useNavigate()

  const toggleNav = function () {
    setSidebar(!sidebar)
  }

  const querySetter = (e) => {
    let value = e.target.value.toLowerCase()
    if (value !== "") {
      setquery(value)
    }
  }
  return (
    <>
      <header className='bg-slate-700 h-20 md:px-10 px-5 flex flex-row justify-between items-center'>
        <div className="flex justify-center items-center">
          <div onClick={toggleNav} className="p-1 md:p-3 cursor-pointer text-white"><MenuIcon /></div>
          <div className="flex justify-center items-center cursor-pointer">
            {/* <img className='sm:h-16 h-8 sm:w-10 w-5 ml-7 md:ml-10 rounded-xl' src={Logo} alt="Telegram" /> */}
            <p className='text-white sm:text-lg text-sm italic p-2'>Telegram</p>
          </div>
        </div>
        <div className="shadow-xl md:block hidden w-full max-w-[350px] rounded-md pl-6 p-4 bg-slate-700">

          <input
            className='bg-slate-700 text-slate-100 outline-none'
            onChange={querySetter}
            type="text"
            placeholder="Search"
          />
        </div>
      </header>
      <SideBar sidebar={sidebar} dark={dark} toggleNav={toggleNav} setdark={setdark} />
    </>
  )
}

export default Navbar