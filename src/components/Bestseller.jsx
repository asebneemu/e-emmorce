// eslint-disable-next-line react/prop-types
export default function Bestseller({ image, title, description, oldPrice, newPrice }) {
    return (
        <div className="flex flex-col items-center p-4 bg-white rounded-lg">
            {/* Ürün resmi */}
            <img src={image} alt="Product" className="w-full h-auto mb-4 rounded" />

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
