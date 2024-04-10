import React from 'react';

const Card = ({ item, handleClick }) => {
    const { title, author, price, img } = item;

    return (
        <div className="cards bg-white p-5 rounded-md shadow-md transition duration-300 hover:shadow-xl cursor-pointer">
            <div className="image_box">
                <img src={img} alt={title} className="w-36 h-48 object-cover object-center mx-auto" />
            </div>
            <div className="details text-center">
                <p className="font-bold mb-1">{title}</p>
                <p className="text-gray-500 text-sm mb-1">{author}</p>
                <p className="font-bold text-gray-500">Price - {price} Rs</p>
                <button
                    className="mt-2 py-1 px-4 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold rounded focus:outline-none focus:ring focus:ring-yellow-300"
                    onClick={() => handleClick(item)}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default Card;
