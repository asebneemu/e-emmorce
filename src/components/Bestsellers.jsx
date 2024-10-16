import React, { useState } from 'react';
import Bestseller from './Bestseller'; // Bestseller componentini içe aktarıyoruz
import bestsellersData from '../data'; // Data dosyasını içe aktarıyoruz

export default function Bestsellers() {
    const [visibleCount, setVisibleCount] = useState(5);
    const [itemsPerPage, setItemsPerPage] = useState(5);

    // Ekran boyutuna göre başlangıç item sayısını ayarlayan fonksiyon
    const setInitialVisibleCount = () => {
        if (window.innerWidth >= 1280) { // xl ve üstü
            setVisibleCount(10);
            setItemsPerPage(10);
        } else if (window.innerWidth >= 768) { // md ve lg
            setVisibleCount(6);
            setItemsPerPage(6);
        } else { // sm ve altı
            setVisibleCount(5);
            setItemsPerPage(5);
        }
    };

    React.useEffect(() => {
        setInitialVisibleCount();
        window.addEventListener('resize', setInitialVisibleCount);
        return () => window.removeEventListener('resize', setInitialVisibleCount);
    }, []);

    const loadMore = () => {
        setVisibleCount((prevCount) => prevCount + itemsPerPage);
    };

    const showLess = () => {
        setInitialVisibleCount();
    };

    return (
        <div className="flex justify-center items-center p-4 my-20">
            {/* Ana kapsayıcı div */}
            <div className="w-[95%] rounded-lg p-6">
                {/* İlk div: Başlık ve paragraf */}
                <div className="mb-4 flex flex-col gap-10 w-[70%] mx-auto">
                    <h2 className="text-4xl font-bold mb-2 text-center">BESTSELLER PRODUCTS</h2>
                    <p className="text-2xl text-gray-600 text-center">Problems trying to resolve the conflict between</p>
                </div>

                {/* İkinci div: Bestseller componentlerini içerir */}
                <div className={`grid gap-6 
                    ${window.innerWidth >= 1280 ? 'grid-cols-5 mx-40' : ''} 
                    ${window.innerWidth >= 768 && window.innerWidth < 1280 ? 'grid-cols-2 mx-20' : ''}
                    ${window.innerWidth < 768 ? 'grid-cols-1' : ''}
                `}>
                    {bestsellersData.slice(0, visibleCount).map((product) => (
                        <Bestseller
                            key={product.id}
                            image={product.image}
                            title={product.title}
                            description={product.description}
                            oldPrice={product.oldPrice}
                            newPrice={product.newPrice}
                        />
                    ))}
                </div>

                {/* Load More Products butonu */}
                {visibleCount < bestsellersData.length && (
                    <div className="flex justify-center mt-10">
                        <button
                            className="border border-gray-400 px-6 py-2 text-lg font-semibold hover:bg-gray-100 rounded"
                            onClick={loadMore}
                        >
                            Load More Products
                        </button>
                    </div>
                )}

                {/* Show Less butonu */}
                {visibleCount >= bestsellersData.length && (
                    <div className="flex justify-center mt-4">
                        <button
                            className="border border-gray-400 px-6 py-2 text-lg font-semibold hover:bg-gray-100 rounded"
                            onClick={showLess}
                        >
                            Show Less
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
