import React, { useContext } from 'react';
import { Context } from '../MyContext';

const Card = ({ name}) => {
    const { dark, query, setquery } = useContext(Context);

    const dateString = '2024-07-15T10:42:27.000000Z';
    const date = new Date(dateString);

    // Extracting date and month
    const day = date.getDate(); // Gets the day of the month
    const month = date.getMonth() + 1;

    // console.log(name)

    const style = {
        uiMode: dark ?
            " bg-zinc-900/95"
            :
            "bg-zinc-50/95",
        text: dark ? "text-slate-50" : "text-slate-900"
    }
    return (
        <div className={`${style.uiMode} ${style.text} m-2 px-2 rounded-lg shadow-md`}>
            <div className="flex items-center container">
                <div className="bg-blue-500 text-white rounded-full h-12 w-12 flex items-center justify-center">
                    <span className="text-2xl font-bold">{name.split(' ').map(word => word[0].toUpperCase()).join('')}</span>
                </div>
                <div className='flex flex-col p-2 justify-center w-[80%]'>
                    <div className='flex justify-between items-center w-full'>
                        <div className="text-lg font-medium">{name}</div>
                        <div className="text-gray-400 text-sm">{`${day}-${month}`}</div>
                    </div>
                    <div className='mt-2'>
                        <p className="  w-64 overflow-hidden text-ellipsis whitespace-nowrap">
                            hey
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Card;
