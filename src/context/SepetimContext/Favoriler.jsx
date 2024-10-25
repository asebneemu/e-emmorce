import { useSelector } from 'react-redux';
import Favori from './Favori';  // Favorilerdeki ürünleri göstermek için Favori bileşeni

export default function Favoriler() {
    const favoriteItems = useSelector((state) => state.favorites.favoriteItems);  // Favorilere eklenen ürünleri çek

    return (
        <div className="w-[80%] p-8 mx-auto">
            <h1 className="text-3xl font-bold mb-8">Favoriler</h1>
            <div className="flex flex-wrap gap-8 justify-center">
                {favoriteItems.length > 0 ? (
                    favoriteItems.map(item => (
                        <Favori 
                            key={item.id}
                            id={item.id}
                            image={item.image}
                            title={item.title}
                            description={item.description}
                            oldPrice={item.oldPrice}
                            newPrice={item.newPrice}
                        />
                    ))
                ) : (
                    <p>Henüz favorilere ürün eklenmedi.</p>
                )}
            </div>
        </div>
    );
}
