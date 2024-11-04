import { Link } from "react-router-dom";

export default function Bestseller({ id, image, title, description, oldPrice, newPrice }) {
    return (
        <Link to={`/bestseller-product-page/${id}`}> {/* Resme tıklanabilirlik ekledik */}
            <div className="flex flex-col items-center p-4 bg-white rounded-lg">
                <img 
                    src={image} 
                    alt="Product" 
                    className="w-full h-[230px] object-cover mb-4 rounded" 
                />
                <p className="text-xl font-semibold mb-2 text-center">{title}</p>
                <p className="text-sm text-gray-600 mb-4 text-center">{description}</p>
                <div className="flex items-center w-full justify-center gap-x-2">
                    <p className="text-sm text-gray-500 line-through">{oldPrice}</p>
                    <p className="text-lg font-bold text-blue-500">{newPrice}</p>
                </div>
            </div>
        </Link>
    );
}
