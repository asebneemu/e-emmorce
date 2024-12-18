import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiHeart } from 'react-icons/fi';
import { removeFromFavorites, addToFavorites } from '../../store/favoritesSlice';  // Favorilere ekleme ve çıkarma işlemi
import { addToCart } from '../../store/cartSlice';  // Sepete ekleme işlemi için action

export default function Favori({ id, image, title, description, oldPrice, newPrice }) {
    const dispatch = useDispatch();
    const favoriteItems = useSelector((state) => state.favorites.favoriteItems);
    
    // Ürün favorilerde mi kontrol et
    const isFavorite = favoriteItems.some(item => item.id === id);

    // Favorilere ekleme/çıkarma işlemi
    const handleFavoriteToggle = () => {
        if (isFavorite) {
            dispatch(removeFromFavorites(id));  // Favorilerden çıkar
        } else {
            dispatch(addToFavorites({ id, image, title, description, oldPrice, newPrice }));  // Favorilere ekle
        }
    };

    // Sepete ekleme işlemi
    const handleAddToCart = () => {
        dispatch(addToCart({ id, image, title, description, oldPrice, newPrice }));
    };

    return (
        <div className="flex flex-col items-center p-4 bg-white rounded-lg relative">
            <div className="w-full h-64 mb-4 rounded overflow-hidden relative">
                <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-full object-cover" 
                />

                {/* Favorilere Ekle/Çıkar butonu */}
                <button 
                    onClick={handleFavoriteToggle}
                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center items-center bg-white rounded-full p-2 shadow-md">
                    <FiHeart className={`w-6 h-6 ${isFavorite ? 'text-red-500' : 'text-gray-500'}`} /> {/* Favori ikonu */}
                </button>
            </div>
            <p className="text-xl font-semibold mb-2 text-center">{title}</p>
            <p className="text-sm text-gray-600 mb-4 text-center">{description}</p>
            <div className="flex items-center w-full justify-center gap-x-2 mb-4">
                <p className="text-sm text-gray-500 line-through">{oldPrice}</p>
                <p className="text-lg font-bold text-blue-500">{newPrice}</p>
            </div>

            {/* Sepete Ekle butonu */}
            <button 
                onClick={handleAddToCart}
                className="px-4 py-2 border border-black text-black bg-transparent rounded hover:bg-black hover:text-white transition duration-300">
                Sepete Ekle
            </button>
        </div>
    );
}
