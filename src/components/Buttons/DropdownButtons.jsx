import { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function DropdownButtons() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <div className="flex items-center">
                <Link to="/shop-page" className="p-2 text-gray-700 text-xl font-bold rounded">
                    Shop
                </Link>
                <button onClick={toggleDropdown} className="ml-4">
                    <BsChevronDown className="w-6 h-6" />
                </button>
            </div>

            {isOpen && (
                <div className="absolute mt-2 bg-white shadow-lg rounded-lg p-6 z-10 min-w-max">
                    <div className="grid grid-cols-2 gap-x-40">
                        {/* Kadın Sütunu */}
                        <div>
                            <h3 className="text-lg font-bold text-gray-700 mb-2">Kadın</h3>
                            <Link to="/shop-page/kadın/etek" className="block p-1 text-gray-700 text-base">Etek</Link>
                            <Link to="/shop-page/kadın/elbise" className="block p-1 text-gray-700 text-base">Elbise</Link>
                            <Link to="/shop-page/kadın/çanta" className="block p-1 text-gray-700 text-base">Çanta</Link>
                            <Link to="/shop-page/kadın/takı" className="block p-1 text-gray-700 text-base">Takı</Link>
                            <Link to="/shop-page/kadın/iç-giyim" className="block p-1 text-gray-700 text-base">İç Giyim</Link>
                            <Link to="/shop-page/kadın/ayakkabı" className="block p-1 text-gray-700 text-base">Ayakkabı</Link>
                            <Link to="/shop-page/kadın/tişört" className="block p-1 text-gray-700 text-base">Tişört</Link>
                            <Link to="/shop-page/kadın/pantalon" className="block p-1 text-gray-700 text-base">Pantolon</Link>
                        </div>

                        {/* Erkek Sütunu */}
                        <div>
                            <h3 className="text-lg font-bold text-gray-700 mb-2">Erkek</h3>
                            <Link to="/shop-page/erkek/ceket" className="block p-1 text-gray-700 text-base">Ceket</Link>
                            <Link to="/shop-page/erkek/gömlek" className="block p-1 text-gray-700 text-base">Gömlek</Link>
                            <Link to="/shop-page/erkek/takım" className="block p-1 text-gray-700 text-base">Takım</Link>
                            <Link to="/shop-page/erkek/kazak" className="block p-1 text-gray-700 text-base">Kazak</Link>
                            <Link to="/shop-page/erkek/ayakkabı" className="block p-1 text-gray-700 text-base">Ayakkabı</Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
