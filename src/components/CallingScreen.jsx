import React from 'react';

const CallingScreen = () => {
  // add it later 
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-gray-800">
      <div className="bg-white rounded-full p-4 shadow-md">
        <img
          className="w-24 h-24 rounded-full mx-auto"
          src="https://via.placeholder.com/150"
          alt="Profile picture"
        />
        <div className="text-center text-xl font-bold mt-2">Tarun</div>
      </div>
      <div className="flex mt-8 space-x-4">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full shadow-md">
          Accept
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full shadow-md">
          Decline
        </button>
      </div>
    </div>
  );
};

export default CallingScreen;
