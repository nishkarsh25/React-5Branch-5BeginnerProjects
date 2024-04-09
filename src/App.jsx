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
  
  
  return (
    <div>
      
    </div>
  )
}

export default App
