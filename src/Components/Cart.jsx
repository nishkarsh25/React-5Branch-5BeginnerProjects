import React from 'react'

const Cart = ({ cart, setCart, handleChange }) => {
    const [price, setPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    const handleRemove = (id) => {
        const updatedCart = cart.filter((item) => item.id !== id);
        setCart(updatedCart);
    };
    
    return (
        <div>
        
        </div>
    )
}

export default Cart
