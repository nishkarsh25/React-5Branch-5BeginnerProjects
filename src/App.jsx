import React from 'react'
import { useState } from 'react'

const App = () => {
  const [input, setInput] = useState('');

  const calculateResult = (input) => {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };


  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <h1 className="text-5xl text-center mb-4 bg-gradient-to-r from-gray-800 via-pink-500 to-gray-800 text-transparent bg-clip-text font-bold">Calculator</h1>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl text-center mb-4 text-white">{input}</h1>
        <div className="grid grid-cols-4 gap-4">
          {['C', '<', '%', '/'].map((value) => (
            <button
              key={value}
              onClick={() => handleButtonClick(value)}
              className="py-3 px-6 rounded-lg bg-gray-600 text-white hover:bg-gray-700 focus:outline-none"
            >
              {value}
            </button>
          ))}
          {['7', '8', '9', '*'].map((value) => (
            <button
              key={value}
              onClick={() => handleButtonClick(value)}
              className="py-3 px-6 rounded-lg bg-gray-600 text-white hover:bg-gray-700 focus:outline-none"
            >
              {value}
            </button>
          ))}
          {['4', '5', '6', '-'].map((value) => (
            <button
              key={value}
              onClick={() => handleButtonClick(value)}
              className="py-3 px-6 rounded-lg bg-gray-600 text-white hover:bg-gray-700 focus:outline-none"
            >
              {value}
            </button>
          ))}
          {['1', '2', '3', '+'].map((value) => (
            <button
              key={value}
              onClick={() => handleButtonClick(value)}
              className="py-3 px-6 rounded-lg bg-gray-600 text-white hover:bg-gray-700 focus:outline-none"
            >
              {value}
            </button>
          ))}
          {['0', '00', '.', '='].map((value) => (
            <button
              key={value}
              onClick={() => handleButtonClick(value)}
              className="py-3 px-6 rounded-lg bg-gray-600 text-white hover:bg-gray-700 focus:outline-none"
            >
              {value}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App
