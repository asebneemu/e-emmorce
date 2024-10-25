import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../store/cartSlice';  // removeFromCart action'ını içe aktarıyoruz
import { FaTimes } from 'react-icons/fa';  // Çarpı (X) ikonu için

// eslint-disable-next-line react/prop-types
export default function SepetimCartItem({ id, image, title, description, oldPrice, newPrice }) {
    const dispatch = useDispatch();

    // Ürünü sepetten çıkarma fonksiyonu
    const handleRemove = () => {
        console.log("Removing item with ID:", id);  // `id`'yi kontrol ediyoruz
        dispatch(removeFromCart(id));  // Ürünü id'sine göre sepetten çıkar
    };

    return (
        <div className="relative w-full 3xs:w-[45%] md:w-[22%] flex flex-col items-start p-4 bg-white rounded-lg mb-4">
            <div className="w-full h-64 mb-4 rounded overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>
            <p className="text-xl font-semibold mb-2 text-center">{title}</p>
            <p className="text-sm text-gray-600 mb-4 text-center">{description}</p>

            <div className="flex items-center w-full gap-x-2 mb-4">
                <p className="text-sm text-gray-500 line-through">{oldPrice}</p>
                <p className="text-lg font-bold text-blue-500">{newPrice}</p>
            </div>

            {/* Çarpı (X) ikonu */}
            <button onClick={handleRemove} className="absolute top-2 right-2 text-red-600">
                <FaTimes size={20} />
            </button>
        </div>
    );
}
