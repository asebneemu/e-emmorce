/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import FavoriteButton from '../../components/Buttons/FavoriteButton';
import AddToCartButton from '../../components/Buttons/AddToCartButton';
import StarRating from '../../components/Buttons/StarRating';

export default function ShopBestseller({ id, image, title, description, oldPrice, newPrice, rating }) {
    const product = { id, image, title, description, oldPrice, newPrice, rating };

    return (
        <div className="flex flex-col items-center p-4 bg-white rounded-lg relative">
            <Link to={`/product-page/${id}`} className="w-full">
                <div className="flex flex-col items-center">
                    <div className="w-full h-64 mb-4 rounded overflow-hidden relative">
                        <img 
                            src={image} 
                            alt={title} 
                            className="w-full h-full object-cover" 
                        />
                    </div>
                    <p className="text-xl font-semibold mb-2 text-center">{title}</p>
                    <p className="text-sm text-gray-600 mb-4 text-center">{description}</p>
                    
                    {/* StarRating bileşeni burada kullanılıyor */}
                    <div className="mb-2">
                        <StarRating rating={rating} />
                    </div>

                    <div className="flex items-center w-full justify-center gap-x-2 mb-4">
                        <p className="text-sm text-gray-500 line-through">{oldPrice}</p>
                        <p className="text-lg font-bold text-blue-500">{newPrice}</p>
                    </div>
                </div>
            </Link>

            {/* Favori ve Sepete Ekle Butonları */}
            <div className="flex items-center justify-center w-full gap-x-4 mt-4">
                <FavoriteButton product={product} />
                <AddToCartButton product={product} />
            </div>
        </div>
    );
}
