import React, { useState } from 'react'
import NavBar from './Components/NavBar';
import Shop from './Components/Shop'
import Cart from './Components/Cart';


const App = () => {

  const [cart,setCart] = useState([]);
  const [warning,setWarning] = useState(false);
  const[show,setShow] = useState(true);


  const handleClick=(item) =>{
    let isPresent = false;
    cart.forEach((product) =>{
      if(item.id === product.id)
      isPresent= true;
    })

    if(isPresent){
      setWarning(true);
      setTimeout(()=>{
        setWarning(false);
      },2000);
      return;
    }
    setCart([...cart,item]);
  }

  const handleChange = (item,d) => {
    let ind = -1;
    cart.forEach((data,index) => {
      if(data.id === item.id)
      ind = index;
    });
    const tempArr = cart;
    tempArr[ind].amount +=d;
    console.log(tempArr);

    if(tempArr[ind].amount === 0){
      tempArr[ind].amount =1;
      const updatedCart = cart.filter((item) => item.id !== tempArr[ind].id);
      setCart(updatedCart);
    }
    else
    {
      setCart([...tempArr])
    }
    
  }

  return (
    <div>
      
    </div>
  )
}

export default App
