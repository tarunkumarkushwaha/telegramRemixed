import React from 'react'
import Logo from "/Logo.png"

const LoadingPage = ({dark}) => {
    const style = {
        uiMode: dark ?
            " bg-zinc-500/95"
            :
            "bg-zinc-200/95",
        text: dark ? "text-slate-50" : "text-slate-900"
    }
    return (
        <>
            <div className={`h-screen flex flex-col justify-center items-center`}>
                <div className="">
                    <img
                        src={Logo}
                        alt="please wait"
                        className=" w-32 h-32 "
                    />
                    <p className='ml-5'>Please wait...</p>
                </div>
            </div>
        </>
    )
}

export default LoadingPage