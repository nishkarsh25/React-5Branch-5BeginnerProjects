import React from 'react'

const Cart = ({ cart, setCart, handleChange }) => {
    const [price, setPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    const handleRemove = (id) => {
        const updatedCart = cart.filter((item) => item.id !== id);
        setCart(updatedCart);
    };

    const handlePrice = () => {
        let totalPrice = 0;
        let items = 0;
        cart.forEach((item) => {
            totalPrice += item.amount * item.price;
            items += item.amount;
        });
        setPrice(totalPrice);
        setTotalItems(items);
    };

    useEffect(() => {
        handlePrice();
    }, [cart]);

    return (
        <div>
        
        </div>
    )
}

export default Cart
