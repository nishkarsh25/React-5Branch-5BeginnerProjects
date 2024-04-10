import React from 'react';
import list from '../list';
import Card from './Card';

const Shop = ({ handleClick }) => {
    return (
        <section className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {list.map((item) => (
                <Card item={item} key={item.id} handleClick={handleClick} />
            ))}
        </section>
    );
};

export default Shop;
