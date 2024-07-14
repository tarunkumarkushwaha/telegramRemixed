import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({ data }) => {

    const navigate = useNavigate()

    const fullview = () =>{
        //  navigate(`/chat=${data.title}`)
    }

    return (
        <>
            <div onClick={fullview} className={` m-2 cursor-pointer bg-zinc-300 border-zinc-400 text-zinc-900
             shadow-md hover:shadow-xl hover:scale-105 duration-500 sm:h-[380px] h-[290px]
             sm:w-[300px] w-[250px] border p-2 rounded-md flex flex-col`}>
                <img className='mx-auto rounded-lg sm:h-40 h-32' src={data.urlToImage} alt={data.title} />
                <div className="text-center font-bold sm:text-xl text-base my-2">
                    {data.title}
                </div>
            </div>
        </>
    )
}

export default Card