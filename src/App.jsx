import React, { useState } from 'react'
import NavBar from './Components/NavBar';
import Shop from './Components/Shop'
import Cart from './Components/Cart';


const App = () => {

  const [cart,setCart] = useState([]);
  const [warning,setWarning] = useState(false);
  const[show,setShow] = useState(true);
  
  return (
    <div>
      
    </div>
  )
}

export default App
