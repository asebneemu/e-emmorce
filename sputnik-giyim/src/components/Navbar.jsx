import { useState } from 'react';
import { FiShoppingCart, FiUser, FiSearch } from 'react-icons/fi';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false); // Menü durumu için state

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Menü açma/kapama fonksiyonu
    };

    return (
        <div className="4xs:min-h-auto 4xs:flex 4xs:flex-col 4xs:items-center p-4 2xs:w-[540px] 2xs:mx-auto md:hidden 2xs:w-full">
            {/* 2xs için genişlik ve yatayda ortalama (mx-auto) */}
            
            <div className="bg-white p-4 rounded-lg shadow-md 4xs:flex 4xs:items-center 4xs:justify-between 4xs:w-full">
                {/* justify-between ile iç divler eşit aralıklarla dağıtıldı */}
                
                {/* H3 içeren div */}
                <div className="mb-4 4xs:mb-0">
                    <h3 className="text-4xl font-bold">Sputnik</h3>
                </div>

                {/* 4 ikon içeren div */}
                <div className="flex space-x-4 mb-4 4xs:mb-0 items-center">
                    <FiUser className="w-8 h-8" />
                    <FiSearch className="w-8 h-8" />
                    <FiShoppingCart className="w-8 h-8" />
                </div>

                {/* Üç çizgiden oluşan menü divi */}
                <div className="cursor-pointer flex flex-col items-end" onClick={toggleMenu}>
                    <div className="w-8 h-[2.5px] bg-black mb-1"></div>
                    <div className="w-6 h-[2.5px] bg-black mb-1"></div>
                    <div className="w-4 h-[2.5px] bg-black"></div>
                </div>
            </div>

            {/* Menü tıklandığında açılacak butonlar */}
            {menuOpen && (
                <div className="mt-4 flex flex-col space-y-2 mt-10 gap-4">
                    <button className="text-gray-400 text-3xl font-bold p-2 rounded">Home</button>
                    <button className="text-gray-400 text-3xl font-bold p-2 rounded">Product</button>
                    <button className="text-gray-400 text-3xl font-bold p-2 rounded">Pricing</button>
                    <button className="text-gray-400 text-3xl font-bold p-2 rounded">Contact</button>
                </div>
            )}
        </div>
    );
}
