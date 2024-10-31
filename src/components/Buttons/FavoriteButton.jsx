// FavoriteButton.jsx
import { FiHeart } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../../store/favoritesSlice';

export default function FavoriteButton({ product }) {
    const dispatch = useDispatch();
    const favoriteItems = useSelector((state) => state.favorites.favoriteItems);
    const isFavorite = favoriteItems.some(item => item.id === product.id);

    const handleFavoriteToggle = () => {
        if (isFavorite) {
            dispatch(removeFromFavorites(product.id));
        } else {
            dispatch(addToFavorites({
                id: product.id,
                image: product.image,
                title: product.title,
                description: product.description,
                oldPrice: product.oldPrice,
                newPrice: product.newPrice,
            }));
        }
    };

    return (
        <button 
            onClick={handleFavoriteToggle}
            className="flex justify-center items-center bg-white rounded-full p-2 shadow-md"
        >
            <FiHeart className={`w-6 h-6 ${isFavorite ? 'text-red-500' : 'text-gray-500'}`} />
        </button>
    );
}
