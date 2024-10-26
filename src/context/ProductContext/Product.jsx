// Product.jsx

import React from 'react';

export default function Product({ product }) {
    if (!product) {
        return <p>Ürün bulunamadı.</p>;
    }

    return (
        <div className="flex flex-col items-center p-8">
            <img src={product.image} alt={product.title} className="w-64 h-64 object-cover mb-4" />
            <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
            <p className="text-lg text-gray-600 mb-4">{product.description}</p>
            <p className="text-xl font-bold text-blue-500 mb-2">{product.newPrice}</p>
            <p className="text-sm text-gray-500 line-through">{product.oldPrice}</p>
        </div>
    );
}
