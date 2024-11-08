/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import FavoriteButton from '../../components/Buttons/FavoriteButton';
import AddToCartButton from '../../components/Buttons/AddToCartButton';
import StarRating from '../../components/Buttons/StarRating';

export default function ShopBestsellers({ category, data }) {
    const itemsPerPage = 12;
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const [currentPage, setCurrentPage] = useState(1);

    const changePage = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Kategori başlıklarını belirlemek için bir nesne kullanıyoruz
    const categoryTitles = {
        elbise: "Elbise Koleksiyonu",
        canta: "Çanta Koleksiyonu",
        tisort: "Tişört Koleksiyonu",
        pantalon: "Pantolon Koleksiyonu",
    };

    return (
        <div className="flex justify-center items-center p-4 my-20">
            <div className="w-[95%] rounded-lg p-6">
                <div className="mb-4 flex flex-col gap-10 w-[70%] mx-auto">
                    <h2 className="text-4xl font-bold mb-2 text-center">{categoryTitles[category]}</h2>
                </div>

                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {data.slice(startIndex, endIndex).map((product) => (
                        <div key={product.id} className="flex flex-col items-center p-4 bg-white rounded-lg relative">
                            <Link to={`/products/${category}/${product.id}`} className="w-full">
                                <div className="flex flex-col items-center">
                                    <div className="w-full h-64 mb-4 rounded overflow-hidden relative">
                                        <img 
                                            src={product.image} 
                                            alt={product.title} 
                                            className="w-full h-full object-cover" 
                                        />
                                    </div>
                                    <p className="text-xl font-semibold mb-2 text-center">{product.title}</p>
                                    <p className="text-sm text-gray-600 mb-4 text-center">{product.description}</p>
                                    
                                    <div className="mb-2">
                                        <StarRating rating={product.rating} />
                                    </div>

                                    <div className="flex items-center w-full justify-center gap-x-2 mb-4">
                                        <p className="text-sm text-gray-500 line-through">{product.oldPrice}</p>
                                        <p className="text-lg font-bold text-blue-500">{product.newPrice}</p>
                                    </div>
                                </div>
                            </Link>

                            <div className="flex items-center justify-center w-full gap-x-4 mt-4">
                                <FavoriteButton product={product} />
                                <AddToCartButton product={product} />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-10 space-x-4">
                    <button
                        className="border border-gray-400 px-4 py-2 text-lg font-semibold hover:bg-gray-100 rounded"
                        onClick={() => changePage(1)}
                        disabled={currentPage === 1}
                    >
                        First
                    </button>
                    <button
                        className="border border-gray-400 px-4 py-2 text-lg font-semibold hover:bg-gray-100 rounded"
                        onClick={() => changePage(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>

                    {[...Array(totalPages)].map((_, i) => (
                        <button
                            key={i + 1}
                            className={`border border-gray-400 px-4 py-2 text-lg font-semibold rounded ${currentPage === i + 1 ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
                            onClick={() => changePage(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))}

                    <button
                        className="border border-gray-400 px-4 py-2 text-lg font-semibold hover:bg-gray-100 rounded"
                        onClick={() => changePage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                    <button
                        className="border border-gray-400 px-4 py-2 text-lg font-semibold hover:bg-gray-100 rounded"
                        onClick={() => changePage(totalPages)}
                        disabled={currentPage === totalPages}
                    >
                        Last
                    </button>
                </div>
            </div>
        </div>
    );
}
