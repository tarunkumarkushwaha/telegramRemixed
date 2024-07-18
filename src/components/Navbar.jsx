import React, { useEffect, useState, useContext } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Context } from '../MyContext';
import SideBar from './SideBar';
import Card from './Card';

const Navbar = () => {
  const [Showsidebar, setShowSidebar] = useState(false)
  const { dark, setdark, setquery, chatdata } = useContext(Context);

  let chatNamedata = Object.keys(chatdata)

  const style = {
    uiMode: dark ?
      " bg-zinc-900/95"
      :
      "bg-zinc-50/95",
    text: dark ? "text-slate-50" : "text-slate-900"
  }

  const toggleNav = function () {
    setShowSidebar(!Showsidebar)
  }

  const querySetter = (e) => {
    let value = e.target.value.toLowerCase()
    setquery(value)
  }

  return (
    <>
      <header className={`${style.uiMode} ${style.text} min-h-screen smooth-entry md:w-[25%] w-full`}>
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
        {chatdata && chatNamedata.map((name, i) => <Card key={i} name={name} chatdata={chatdata} />)}
      </header>
      <SideBar Showsidebar={Showsidebar} dark={dark} toggleNav={toggleNav} setdark={setdark} />
    </>
  )
}

export default Navbar