import React, { useState } from 'react';

const CallingScreen = ({ setcalling, Callname }) => {
  const [end, setend] = useState(false)

  return (
    <div className="flex smooth-entry flex-col items-center justify-center h-screen w-full bg-gray-800">
      <div className="bg-white rounded-full p-4 shadow-md">
        <img className="w-24 h-24 rounded-full mx-auto" width="48" height="48" src="https://img.icons8.com/color/48/person-male.png" alt="person-male" />
        <div className="text-center text-xl font-bold mt-2">{Callname}</div>
      </div>
      <div className="flex mt-8 space-x-4">
        {end ? <button onClick={() => { setend(false); setcalling(); }} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full shadow-md">
          End
        </button> : <><button onClick={() => setend(true)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full shadow-md">
          Accept
        </button>
          <button onClick={setcalling} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full shadow-md">
            Decline
          </button></>}
      </div>
    </div>
  );
};

export default CallingScreen;
