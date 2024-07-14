import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CallIcon from '@mui/icons-material/Call';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

const Chat = () => {
    return (
        <>
            <div className="flex flex-col h-screen w-[75%] bg-gray-900 text-white">
                <div className="flex items-center justify-between p-4 bg-gray-800">
                    <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-2xl">
                            MB
                        </div>
                        <div className="ml-4">
                            <div className="font-bold">tarun</div>
                            <div className="text-sm text-gray-400">last seen 8/22/2023</div>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <SearchIcon className="text-gray-400" />
                        <MoreVertIcon className="text-gray-400" />
                        <CallIcon className="text-gray-400" />
                    </div>
                </div>

                {/* chat  */}
                <div className="flex-1 p-2 m-5 overflow-y-auto">
                    <div className="flex justify-center text-gray-400 mb-4">Today</div>
                    <div className="flex justify-end mb-4">
                        <div className="max-w-xl w-40 p-2 bg-purple-600 rounded-lg relative">
                            <div>hey</div>
                            <div className="text-xs text-gray-300 text-right">04:23 PM</div>
                            <div className="absolute "></div>
                        </div>
                    </div>
                </div>

                <div className="p-4 bg-gray-800 flex items-center">
                    <input
                        type="text"
                        placeholder="Message"
                        className="w-full py-2 px-4 bg-gray-700 text-white rounded-full focus:outline-none"
                    />
                </div>
            </div>
        </>
    )
}

export default Chat