import { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs'; // Daha kalın aşağıyı gösteren ok ikonu

export default function DropdownButtons() {
    const [isOpen, setIsOpen] = useState(false); // Menü durumu için state

    const toggleDropdown = () => {
        setIsOpen(!isOpen); // Dropdown açma/kapama
    };

    return (
        <div className="relative">
            {/* Shop butonu */}
            <button onClick={toggleDropdown} className="p-2 text-gray-700 text-2xl font-bold rounded flex items-center">
                Shop
                <BsChevronDown className="ml-4 w-6 h-6" /> {/* Kalın ok ikonu */}
            </button>

            {/* Dropdown menü: Butonlar açıldığında görünür olacak */}
            {isOpen && (
                <div className="absolute mt-2 bg-white shadow-lg rounded-lg p-2 z-10 min-w-max">
                    <button className="p-2 text-gray-700 text-2xl font-bold rounded w-full text-left">Option 1</button>
                    <button className="p-2 text-gray-700 text-2xl font-bold rounded w-full text-left">Longer Option 2</button> {/* Daha uzun seçenek */}
                    <button className="p-2 text-gray-700 text-2xl font-bold rounded w-full text-left">Option 3</button>
                </div>
            )}
        </div>
    );
}
