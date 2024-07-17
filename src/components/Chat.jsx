import React, { useContext, useState } from 'react'
import { Context } from '../MyContext';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CallIcon from '@mui/icons-material/Call';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

const Chat = () => {
    const [chat, setchat] = useState("")
    const { dark, currentChat } = useContext(Context);

    let currentChatName = Object.keys(currentChat)[0]
    let messeges = currentChat[currentChatName].map((i) => i.message)

    const dateString = currentChat[currentChatName][0].updated_at
    const date = new Date(dateString);
    const day = date.getDate();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;

    // console.log(currentChat)

    const style = {
        uiMode: dark ?
            " bg-zinc-800/95"
            :
            "bg-zinc-200/95",
        text: dark ? "text-slate-50" : "text-slate-900"
    }

    const ChatBubble = ({ messege }) => {
        return (
            <div className="max-w-xl w-40 p-2 m-5 bg-purple-600 rounded-lg relative">
                <div>{messege}</div>
                <div className="text-xs text-gray-300 text-right">{`${day}-${month}-${year}`}</div>
                <div className="absolute "></div>
            </div>
        )
    }

    return (
        <>
            <div className={`sm:flex hidden flex-col h-screen w-[75%] ${style.text} ${style.uiMode}`}>
                <div className="flex items-center justify-between p-4 ">
                    <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-2xl">
                            MB
                        </div>
                        <div className="ml-4">
                            <div className="font-bold">{currentChatName}</div>
                            <div className="text-sm text-gray-400">{`last seen ${day}-${month}-${year}`}</div>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <SearchIcon className="text-gray-400" />
                        <MoreVertIcon className="text-gray-400" />
                        <CallIcon className="text-gray-400" />
                    </div>
                </div>

                <div className="flex-1 p-2 m-5 overflow-y-auto">
                    {/* <div className="flex justify-center text-gray-400 mb-4">Today</div> */}
                    {messeges.map((messege) => <ChatBubble messege={messege} />)}
                </div>

                <div className="p-4 flex justify-center items-center">
                    <div className="relative mx-2 w-2/3">
                        <InsertEmoticonIcon className='absolute top-3 left-3' />
                        <input
                            type="text"
                            placeholder="Search..."
                            onChange={(e) => setchat(e.target.value)}
                            className="w-full py-3 pl-10 pr-4 bg-zinc-400/25 bg-opacity-50 text-black rounded-2xl border border-transparent focus:border-blue-400 focus:ring-0 focus:outline-none"
                        />
                        <AttachFileIcon className='absolute top-3 right-3' />
                    </div>
                    <div className='border-2 border-slate-900 p-2 rounded-full'><KeyboardVoiceIcon className='' /></div>
                </div>
            </div>
        </>
    )
}

export default Chat