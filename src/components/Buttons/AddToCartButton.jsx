// AddToCartButton.jsx
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';

export default function AddToCartButton({ product }) {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart({
            id: product.id,
            image: product.image,
            title: product.title,
            description: product.description,
            oldPrice: product.oldPrice,
            newPrice: product.newPrice,
        }));
    };

    return (
        <button 
            onClick={handleAddToCart}
            className="px-4 py-2 border border-black text-black bg-transparent rounded hover:bg-black hover:text-white transition duration-300"
        >
            Sepete Ekle
        </button>
    );
}
