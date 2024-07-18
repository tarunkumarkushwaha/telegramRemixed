import React, { useContext } from 'react';
import { Context } from '../MyContext';

const Card = ({ name, chatdata }) => {
    const { dark, setcurrentChat } = useContext(Context);

    let chat = chatdata[name]
    // console.log(chat[chat.length-1].message.slice(0, 15))

    const setChatScreen = () => {
        setcurrentChat({ [name]: chat })
    }

    const dateString = chat[0].created_at
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;

    const style = {
        uiMode: dark ?
            " bg-zinc-900/95"
            :
            "bg-zinc-50/95",
        text: dark ? "text-slate-50" : "text-slate-900"
    }

    return (
        <div onClick={setChatScreen} className={`${style.uiMode} ${style.text} m-2 px-2 rounded-lg shadow-md cursor-pointer`}>
            <div className="flex items-center container">
                <div className="bg-blue-500 text-white rounded-full h-12 w-12 flex items-center justify-center">
                    <span className="text-2xl font-bold">{name.split(' ').map(word => word[0].toUpperCase()).join('')}</span>
                </div>
                <div className='flex flex-col p-2 justify-center w-[80%]'>
                    <div className='flex justify-between items-center w-full'>
                        <div className="text-base font-medium">{name}</div>
                        <div className="text-gray-400 text-xs">{`${day}-${month}`}</div>
                    </div>
                    <div className='mt-2'>
                        <p className="  w-64 overflow-hidden text-ellipsis whitespace-nowrap">
                            {chat[chat.length-1].message.slice(0, 15) + "..."}
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Card;
