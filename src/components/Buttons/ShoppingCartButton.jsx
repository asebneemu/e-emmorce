import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';  // Link kullanarak yönlendirme yapacağız

export default function ShoppingCartButton() {
    return (
        <Link to="/shop-page" className="flex items-center">
            <FiShoppingCart className="w-6 h-6" />
        </Link>
    );
}
