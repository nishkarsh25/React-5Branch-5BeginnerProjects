import React from 'react'

const App = () => {
  const [height, setHeight] = useState(180);
  const [weight, setWeight] = useState(70);
  
  function onWeightChange(event) {
    setWeight(event.target.value);
  }

  function onHeightChange(event) {
    setHeight(event.target.value);
  }

  const output = useMemo(() => {
    const calculateHeight = height / 100;
    return (weight / (calculateHeight * calculateHeight)).toFixed(1);
  }, [weight, height]);

  
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">BMI Calculator</h1>
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-2">
            <p className="text-lg font-bold text-gray-900">Weight: {weight} kg</p>
            <input
              className="w-full appearance-none rounded-lg h-2 bg-gradient-to-r from-pink-400 to-purple-400"
              type="range"
              step="1"
              min="40"
              max="200"
              value={weight}
              onChange={onWeightChange}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <p className="text-lg font-bold text-gray-900">Height: {height} cm</p>
            <input
              className="w-full appearance-none rounded-lg h-2 bg-gradient-to-r from-pink-400 to-purple-400"
              type="range"
              step="1"
              min="140"
              max="220"
              value={height}
              onChange={onHeightChange}
            />
          </div>
        </div>
        
      </div>
    </main>
  );
}

export default App
