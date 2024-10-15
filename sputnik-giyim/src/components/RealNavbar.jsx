import { FaRegUser } from 'react-icons/fa'; // İkonlar için react-icons
import { FiSearch, FiShoppingCart, FiHeart } from 'react-icons/fi'; // Telefon ve mail ikonları için
import DropdownButtons from './DropdownButtons'; // Dropdown componentini ekliyoruz

export default function RealNavbar() {
    return (
        <div className="hidden md:flex justify-between items-center p-4 mt-5">
            {/* Ana dış div */}
            <div className="flex justify-between w-full items-center mx-10">

                {/* İlk div: Başlık ve 6 buton içeren div */}
                <div className="flex justify-between w-[50%] items-center">
                    <h1 className="text-4xl font-bold">Sputnik Giyim</h1>

                    {/* 6 adet buton içeren div */}
                    <div className="flex space-x-4 gap-4">
                        <button className="p-2 text-gray-700 text-2xl font-bold rounded">Home</button>
                        <DropdownButtons /> {/* Shop butonunu yeni component ile değiştirdik */}
                        <button className="p-2 text-gray-700 text-2xl font-bold rounded">About</button>
                        <button className="p-2 text-gray-700 text-2xl font-bold rounded">Blog</button>
                        <button className="p-2 text-gray-700 text-2xl font-bold rounded">Contact</button>
                        <button className="p-2 text-gray-700 text-2xl font-bold rounded">Pages</button>
                    </div>
                </div>

                {/* İkinci div: İki alt div içeriyor */}
                <div className="flex justify-end space-x-8 w-[40%] items-center">
                    {/* İlk div: İkon ve yazı */}
                    <div className="flex items-center space-x-2 gap-2 text-[#23A6F0]">
                        <button className="flex items-center space-x-2 gap-2 p-2 bg-transparent hover:bg-gray-100 rounded">
                            <FaRegUser className="w-7 h-7" />
                            {/* Elbise askısı gibi insan ikonu */}
                            <p className="text-2xl font-medium">Login / Register</p>
                            {/* Yazı */}
                        </button>
                    </div>


                    {/* İkinci div: 3 ikon içeren div */}
                    <div className="flex space-x-2 gap-16 text-[#23A6F0]">
                        {/* Mercek ikonu */}
                        <FiSearch className="w-8 h-8" />
                        {/* Alışveriş sepeti ve sayı */}
                        <div className="flex items-center space-x-1 gap-2">
                            <FiShoppingCart className="w-8 h-8" /> {/* Alışveriş sepeti ikonu */}
                            <p className="text-lg font-medium">1</p> {/* Sepetteki ürün sayısı */}
                        </div>
                        {/* Kalp ikonu ve sayı */}
                        <div className="flex items-center space-x-1 gap-2">
                            <FiHeart className="w-8 h-8" />
                            {/* İçi boş kalp ikonu */}
                            <p className="text-lg font-medium">1</p> {/* Beğenilen ürün sayısı */}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
