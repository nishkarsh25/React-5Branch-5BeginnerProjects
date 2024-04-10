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
        <article className="max-w-4xl mx-auto px-4 py-8 shadow-lg rounded-lg bg-white">
            {cart?.map((item) => (
                <div key={item.id} className="flex items-center justify-between border-b border-gray-200 py-4">
                    <div className="flex items-center space-x-4">
                        <div className="cart-img">
                            <img src={item.img} alt={item.title} className="w-16 h-16 rounded-lg" />
                            <p className="text-gray-800">{item.title}</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <span className="text-gray-800 font-bold">Rs - {item.price}</span>
                        <button onClick={() => handleRemove(item.id)} className="bg-gray-200 text-gray-800 px-3 py-1 rounded hover:bg-gray-300 transition duration-300">
                            Remove
                        </button>
                        <div className="flex items-center space-x-2">
                            <button onClick={() => handleChange(item, +1)} className="bg-blue-500 text-white px-3 py-1 rounded">
                                +
                            </button>
                            <span className="text-gray-800">{item.amount}</span>
                            <button onClick={() => handleChange(item, -1)} className="bg-red-500 text-white px-3 py-1 rounded">
                                -
                            </button>
                        </div>
                    </div>
                </div>
            ))}
            <div className="flex items-center justify-between mt-4">
                <div>
                    <span className="text-xl font-semibold text-gray-800">Total Price of your Cart:</span>
                    <span className="text-xl font-bold text-gray-800">Rs - {price}</span>
                </div>
                <div>
                    <span className="text-xl font-semibold text-gray-800">Total Items:</span>
                    <span className="text-xl font-bold text-gray-800">{totalItems}</span>
                </div>
            </div>
        </article>
    );
}

export default Cart
