import AddToCartButton from "@/components/Buttons/AddToCartButton";
import FavoriteButton from "@/components/Buttons/FavoriteButton";
import StarRating from "@/components/Buttons/StarRating";

export default function BestsellerProduct({ product }) {
    // Ürün bulunamadığında konsola yazdır
    if (!product) {
        console.error(`Ürün bulunamadı: ${product?.id}`); // Konsolda hatayı kontrol et
        return null; // Eğer ürün yoksa componenti render etme
    }

    return (
        <div className="flex flex-col items-center p-4 gap-10 my-20">
            <h1 className="text-6xl font-bold mb-4">Bestseller Product #{product.id}</h1>
            <div className="flex gap-10 items-start justify-center"> {/* items-start ile yukarı hizala */}
                <div className="w-[40%] flex flex-col items-start gap-5">
                    <h2 className="text-4xl font-semibold">{product.title}</h2>
                    <p className="text-xl text-gray-600 mb-2">{product.description}</p>
                    {/* StarRating Bileşeni */}
                    <div className="mb-2">
                        <StarRating rating={product.rating} starSize="text-3xl" textSize="text-lg" />
                    </div>
                    <div className="flex items-center gap-x-2">
                        <p className="text-lg text-gray-500 line-through">{product.oldPrice}</p>
                        <p className="text-2xl font-bold text-blue-500">{product.newPrice}</p>
                    </div>
                    {/* Favori ve Sepete Ekle Butonları */}
                    <div className="flex items-center gap-x-4 mt-4">
                        <FavoriteButton product={product} />
                        <AddToCartButton product={product} />
                    </div>
                </div>

                <img
                    src={product.image}
                    alt={product.title}
                    className="w-[400px] h-[400px] object-cover rounded-lg"
                />
            </div>
        </div>
    );
}
