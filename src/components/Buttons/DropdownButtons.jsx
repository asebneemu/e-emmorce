import { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs'; // Daha kalın aşağıyı gösteren ok ikonu
import { Link } from 'react-router-dom';

export default function DropdownButtons() {
    const [isOpen, setIsOpen] = useState(false); // Menü durumu için state

    const toggleDropdown = () => {
        setIsOpen(!isOpen); // Dropdown açma/kapama
    };

    return (
        <div className="relative">
            {/* Shop butonu bir Link olarak */}
            <div className="flex items-center">
                <Link to="/shop-page" className="p-2 text-gray-700 text-xl font-bold rounded">
                    Shop
                </Link>
                <button onClick={toggleDropdown} className="ml-4">
                    <BsChevronDown className="w-6 h-6" /> {/* Kalın ok ikonu */}
                </button>
            </div>

            {/* Dropdown menü: Butonlar açıldığında görünür olacak */}
            {isOpen && (
                <div className="absolute mt-2 bg-white shadow-lg rounded-lg p-2 z-10 min-w-max">
                    <Link to="/sepetim-page" className="block p-2 text-gray-700 text-xl font-bold rounded w-full text-left">Sepetim</Link>
                    <Link to="/sepetim-page#favoriler" className="block p-2 text-gray-700 text-xl font-bold rounded w-full text-left">Favoriler</Link>
                    <button className="p-2 text-gray-700 text-xl font-bold rounded w-full text-left">Siparişlerim</button>
                </div>
            )}
        </div>
    );
}
