/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import FavoriteButton from '../../components/Buttons/FavoriteButton';
import AddToCartButton from '../../components/Buttons/AddToCartButton';
import StarRating from '../../components/Buttons/StarRating';

export default function ShopBestsellers({ gender, category, data }) {
    const itemsPerPage = 12;
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortOption, setSortOption] = useState('recommended'); // Sıralama durumu

    const changePage = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Kategori başlıklarını belirlemek için bir nesne kullanıyoruz
    const categoryTitles = {
        icgiyim: "İç Giyim Koleksiyonu",
        etek: "Etek Koleksiyonu",
        elbise: "Elbise Koleksiyonu",
        canta: "Çanta Koleksiyonu",
        taki: "Takı Koleksiyonu",
        tisort: "Tişört Koleksiyonu",
        pantalon: "Pantolon Koleksiyonu",
        erkekAyakkabi: "Ayakkabı Koleksiyonu",
        ceket: "Ceket Koleksiyonu",
        gomlek: "Gömlek Koleksiyonu",
        takim: "Takım Koleksiyonu",
        kazak: "Kazak Koleksiyonu",
    };

    // Sıralama seçeneklerini işleyen fonksiyon
    const sortedData = () => {
        switch (sortOption) {
            case 'rating':
                return [...data].sort((a, b) => b.rating - a.rating);
            case 'priceAsc':
                return [...data].sort((a, b) => parseFloat(a.newPrice.replace('$', '')) - parseFloat(b.newPrice.replace('$', '')));
            case 'priceDesc':
                return [...data].sort((a, b) => parseFloat(b.newPrice.replace('$', '')) - parseFloat(a.newPrice.replace('$', '')));
            default:
                return data; // Önerilen sıralama (varsayılan sıra)
        }
    };

    return (
        <div className="flex justify-center items-center p-4 my-20">
            <div className="w-[95%] rounded-lg p-6">
                <div className="mb-4 flex justify-between items-center w-[70%] mx-auto">
                    {/* Başlığı sola yaslamak için */}
                    <h2 className="text-4xl font-bold text-left">{categoryTitles[category]}</h2>
                    
                    {/* Sıralama seçeneği sağa yaslı */}
                    <div className="text-right">
                        <label htmlFor="sort" className="mr-2 font-semibold">Sırala:</label>
                        <select
                            id="sort"
                            className="border px-4 py-2 rounded"
                            value={sortOption}
                            onChange={(e) => setSortOption(e.target.value)}
                        >
                            <option value="recommended">Önerilen</option>
                            <option value="rating">Puana Göre</option>
                            <option value="priceAsc">Fiyata Göre (Artan)</option>
                            <option value="priceDesc">Fiyata Göre (Azalan)</option>
                        </select>
                    </div>
                </div>

                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {sortedData().slice(startIndex, endIndex).map((product) => (
                        <div key={product.id} className="flex flex-col items-center p-4 bg-white rounded-lg relative">
                            <Link to={`/products/${gender}/${category}/${product.id}`} className="w-full">
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
