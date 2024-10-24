// eslint-disable-next-line react/prop-types
export default function ShopBestseller({ image, title, description, oldPrice, newPrice }) {
    return (
        <div className="flex flex-col items-center p-4 bg-white rounded-lg">
            {/* Sabit boyutlu ürün resmi */}
            <div className="w-full h-64 mb-4 rounded overflow-hidden">
                <img 
                    src={image} 
                    alt="Product ASU" 
                    className="w-full h-full object-cover" 
                />
            </div>

            {/* Ürün bilgileri */}
            <p className="text-xl font-semibold mb-2 text-center">{title}</p>
            <p className="text-sm text-gray-600 mb-4 text-center">{description}</p>

            {/* Fiyat bilgisi */}
            <div className="flex items-center w-full justify-center gap-x-2">
                <p className="text-sm text-gray-500 line-through">{oldPrice}</p>
                <p className="text-lg font-bold text-blue-500">{newPrice}</p>
            </div>
        </div>
    );
}
