import { useCallback, useEffect, useRef } from "react"
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router-dom";

const SideBar = ({ sidebar, toggleNav, dark, setdark }) => {

    let navigate = useNavigate()

    const menuRef = useRef();

    const closeOpenMenus = useCallback(
        (e) => {
            if (
                menuRef.current &&
                sidebar &&
                !menuRef.current.contains(e.target)
            ) {
                toggleNav();
            }
        },
        [sidebar]
    );

    useEffect(() => {
        document.addEventListener("mousedown", closeOpenMenus);
    }, [closeOpenMenus]);

    return (
        <>
            <aside ref={menuRef} className={`fixed z-20 top-0 left-0 h-full transition-all duration-1000 ease-in-out ${!sidebar ? "md:w-[25vw] w-[100vw] -translate-x-full" : "md:w-[30vw] w-[100vw] -translate-x-1"}`}>
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-800">
                    <div onClick={toggleNav} className={` cursor-pointer pl-10 w-4 text-xxl fixed top-8 right-[35px] text-gray-50`}>
                        {sidebar && <CloseIcon />}
                    </div>
                    <ul className="space-y-2 font-medium">
                        <li>
                            <div className="flex justify-center items-center">
                                {/* <img onClick={() => navigate('/')} className='h-16 w-10 ml-10 cursor-pointer rounded-xl' src={Logo} alt="Telegram" /> */}
                                <p className='text-white text-lg italic p-2'>Telegram</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    )
}

export default SideBar