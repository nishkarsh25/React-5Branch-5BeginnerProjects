import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Navbar = ({ size, setShow }) => {
    return (
        <nav className="bg-gray-900 text-white py-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center px-4">
                <span
                    className="text-3xl font-bold cursor-pointer text-yellow-400 hover:text-yellow-300 transition duration-300"
                    onClick={() => setShow(true)}
                >
                    DxO Shop
                </span>
                <div
                    className="flex items-center cursor-pointer"
                    onClick={() => setShow(false)}
                >
                    <span className="mr-2 text-2xl">
                        <i className="fas fa-cart-plus"></i>
                    </span>
                    <span className="bg-red-500 text-white font-semibold text-lg px-2 py-1 rounded-full shadow-md">
                        {size}
                    </span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
