import { useCallback, useEffect, useRef, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router-dom";
import Logo from "/Logo.png"
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import BookmarkIcon from '@mui/icons-material/Bookmark';
import PersonIcon from '@mui/icons-material/Person';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AnimationIcon from '@mui/icons-material/Animation';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import BugReportIcon from '@mui/icons-material/BugReport';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const SideBar = ({ Showsidebar, toggleNav, dark, setdark }) => {
    let navigate = useNavigate();
    const menuRef = useRef();
    const [animateEffect, setAnimateEffect] = useState(false);

    const closeOpenMenus = useCallback((e) => {
        if (menuRef.current && Showsidebar && !menuRef.current.contains(e.target)) {
            toggleNav();
        }
    }, [Showsidebar, toggleNav]);

    const toggleTheme = () => {
        setAnimateEffect(true);
        setTimeout(() => {
            setdark(!dark);
            setAnimateEffect(false);
        }, 500);
    };

    useEffect(() => {
        document.addEventListener("mousedown", closeOpenMenus);
        return () => {
            document.removeEventListener("mousedown", closeOpenMenus);
        };
    }, [closeOpenMenus]);

    return (
        <>
            <aside ref={menuRef} className={`fixed z-20 top-0 left-0 sm:h-2/3  h-full transition-all duration-1000 ease-in-out ${!Showsidebar ? "md:w-[25vw] w-[100vw] -translate-x-full" : "md:w-[25vw] w-[50vw] -translate-x-1"}`}>
                {animateEffect && <div className={`animate-wave ${!dark ? "bg-zinc-900/95 text-slate-50" : "bg-zinc-50/95 text-slate-900"}`}></div>}
                <div className={`h-full px-3 py-4 overflow-y-auto rounded-xl ml-2 ${dark ? "bg-zinc-900/95 text-slate-50" : "bg-zinc-50/95 text-slate-900"}`}>
                    <div onClick={toggleNav} className={`cursor-pointer pl-10 w-4 text-xxl fixed top-8 right-[35px] `}>
                        {Showsidebar && <CloseIcon />}
                    </div>
                    <div onClick={toggleTheme} className={`border ${dark ? "border-white" : "border-black"} rounded-full p-1 cursor-pointer text-xxl absolute top-8 right-[75px] `}>
                        {dark ? <DarkModeIcon /> : <WbSunnyIcon />}
                    </div>

                    <div className="w-64 h-full p-4">
                        <ul className="space-y-4">
                            <li className="flex items-center space-x-2">
                                <BookmarkIcon />
                                <span>Saved Messages</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <PersonIcon />
                                <span>Contacts</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <PlayCircleOutlineIcon />
                                <span>My Stories</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <SettingsIcon />
                                <span>Settings</span>
                            </li>

                            <li className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <AnimationIcon />
                                    <span>Animations</span>
                                </div>
                                <label className="switch">
                                    <input type="checkbox" />
                                    <span className="slider round"></span>
                                </label>
                            </li>
                            <li className="flex items-center space-x-2">
                                <HelpOutlineIcon />
                                <span>help</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <BugReportIcon/>
                                <span>Report a Bug</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <AddCircleOutlineIcon/>
                                <span>Install App</span>
                            </li>
                        </ul>
                        <div className="mt-4 text-gray-400 text-sm">
                            T-Telegram Web A 10.9.7
                        </div>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default SideBar;
