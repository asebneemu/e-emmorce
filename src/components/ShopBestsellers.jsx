import { useState, useEffect } from 'react';
import ShopBestseller from './ShopBestseller'; // Bestseller componentini içe aktarıyoruz
import { getShopBestsellersData } from '@/data';

export default function ShopBestsellers() {
    const itemsPerPage = 12; // Her sayfada gösterilecek ürün sayısı
    const totalPages = Math.ceil(getShopBestsellersData.length / itemsPerPage); // Toplam sayfa sayısı
    const [currentPage, setCurrentPage] = useState(1); // Mevcut sayfa

    // Ekran boyutuna göre başlangıç item sayısını ayarlayan fonksiyon
    const setInitialVisibleCount = () => {
        if (window.innerWidth >= 1280) { // xl ve üstü
            setCurrentPage(1); 
        } else if (window.innerWidth >= 768) { // md ve lg
            setCurrentPage(1);
        } else { // sm ve altı
            setCurrentPage(1);
        }
    };

    useEffect(() => {
        setInitialVisibleCount();
        window.addEventListener('resize', setInitialVisibleCount);
        return () => window.removeEventListener('resize', setInitialVisibleCount);
    }, []);

    // Sayfa değiştirme fonksiyonu
    const changePage = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    // İlk ve sonraki ürünler için slice aralıklarını hesaplama
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Sayfa numaralarını oluşturma
    const renderPageNumbers = () => {
        let pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(
                <button
                    key={i}
                    className={`border border-gray-400 px-4 py-2 text-lg font-semibold rounded ${currentPage === i ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
                    onClick={() => changePage(i)}
                >
                    {i}
                </button>
            );
        }
        return pages;
    };

    return (
        <div className="flex justify-center items-center p-4 my-20">
            {/* Ana kapsayıcı div */}
            <div className="w-[95%] rounded-lg p-6">
                {/* İlk div: Başlık ve paragraf */}
                <div className="mb-4 flex flex-col gap-10 w-[70%] mx-auto">
                    <h2 className="text-4xl font-bold mb-2 text-center">Shop Sayfasındayız Beyler</h2>
                    <p className="text-2xl text-gray-600 text-center">Problems trying to resolve the conflict between</p>
                </div>

                {/* İkinci div: Bestseller componentlerini içerir */}
                <div className={`grid gap-6 
                    ${window.innerWidth >= 1280 ? 'grid-cols-4 mx-60' : ''} 
                    ${window.innerWidth >= 768 && window.innerWidth < 1280 ? 'grid-cols-2 mx-20' : ''}
                    ${window.innerWidth < 768 ? 'grid-cols-1' : ''}
                `}>
                    {getShopBestsellersData.slice(startIndex, endIndex).map((product) => (
                        <ShopBestseller
                            key={product.id}
                            image={product.image}
                            title={product.title}
                            description={product.description}
                            oldPrice={product.oldPrice}
                            newPrice={product.newPrice}
                        />
                    ))}
                </div>

                {/* Pagination kısmı */}
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

                    {/* Sayfa numaraları */}
                    {renderPageNumbers()}

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
