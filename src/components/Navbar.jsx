import React, { useEffect, useState, useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Context } from '../MyContext';
import Logo from "/Logo.png"
import SideBar from './SideBar';
import Card from './Card';

const Navbar = () => {
  const [Showsidebar, setShowSidebar] = useState(false)
  const { dark, setdark, query, setquery, chatdata } = useContext(Context);

  const chatNameData = chatdata && Object.keys(chatdata)

  // console.log(chatdata)

  const style = {
    uiMode: dark ?
      " bg-zinc-900/95"
      :
      "bg-zinc-50/95",
    text: dark ? "text-slate-50" : "text-slate-900"
  }

  let navigate = useNavigate()

  const toggleNav = function () {
    setShowSidebar(!Showsidebar)
  }

  const querySetter = (e) => {
    let value = e.target.value.toLowerCase()
    setquery(value)
  }

  return (
    <>
      <header className={`${style.uiMode} ${style.text} min-h-screen sm:w-[25%] w-full`}>
        <div className="flex items-start p-2 box-border">
          <div onClick={toggleNav} className={`p-1 md:p-3 cursor-pointer`}><MenuIcon /></div>
          <div className="relative mx-2">
            <SearchIcon className='absolute top-3 left-3' />
            <input
              type="text"
              placeholder="Search..."
              onChange={querySetter}
              className="w-full py-3 pl-10 pr-4 bg-zinc-400/25 bg-opacity-50 text-black rounded-2xl border border-transparent focus:border-blue-400 focus:ring-0 focus:outline-none"
            />
          </div>
        </div>
        {chatdata && chatNameData.map((data, i) => <Card key={i} name={data} />)}
      </header>
      <SideBar Showsidebar={Showsidebar} dark={dark} toggleNav={toggleNav} setdark={setdark} />
    </>
  )
}

export default Navbar