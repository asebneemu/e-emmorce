import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; 
import { selectTotalItems } from "../../store/cartSlice";  // Selector'u import ediyoruz

export default function SepetimButtonu() {
    const totalItems = useSelector(selectTotalItems);  // Sepetteki toplam ürün sayısını alıyoruz

    return (
        <Link to="/sepetim-page" className="flex items-center space-x-1 gap-2">
            <FiShoppingCart className="w-4 h-4" />
            <p className="text-lg font-medium">{totalItems}</p> {/* Ürün sayısını gösteriyoruz */}
        </Link>
    );
}
