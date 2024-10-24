import { FiHeart } from 'react-icons/fi';
import { Link } from 'react-router-dom';  // Sayfalar arası yönlendirme için Link kullanıyoruz
import { useSelector } from 'react-redux';  // Redux state'ini okumak için

export default function FavorilerButtonu() {
    // Redux'tan favori öğeleri çekiyoruz
    const favoriteItems = useSelector((state) => state.favorites.favoriteItems);

    return (
        <Link to="/sepetim-page#favoriler" className="flex items-center space-x-1 gap-2">
            <FiHeart className="w-4 h-4" />
            <p className="text-lg font-medium">{favoriteItems.length}</p>  {/* Favori ürün sayısı */}
        </Link>
    );
}
