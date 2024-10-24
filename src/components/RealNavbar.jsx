import NavbarButtons from './Buttons/NavbarButtons';
import AuthButton from './Buttons/AuthButton';
import FavorilerButtonu from './Buttons/FavorilerButtonu';
import SepetimButtonu from './Buttons/SepetimButton';
import BulButtonu from './Buttons/BulButtonu';

export default function RealNavbar() {
    return (
        <div className="hidden md:flex justify-between items-center p-4 mt-2 lg:center">
            {/* Ana dış div */}
            <div className="flex justify-between w-full items-center mx-10 md:flex-col lg:justify-center sm:gap-5 1190:flex-row 1190:justify-around">
                {/* İlk div: Başlık ve 6 buton içeren div */}
                <div className="flex md:flex-col 1190:flex-row justify-between items-center md:gap-5">
                    <h1 className="text-2xl font-bold">Sputnik Giyim</h1>

                    <NavbarButtons />
                </div>

                {/* İkinci div: İki alt div içeriyor */}
                <div className="flex sm:flex-col 1190:flex-row justify-end sm:gap-5 1190:space-x-8 w-[40%] items-center">
                    {/* İlk div: İkon ve yazı */}
                    <div className="flex items-center space-x-2 gap-2 text-[#23A6F0]">
                        <AuthButton />
                    </div>

                    {/* İkinci div: 3 ikon içeren div */}
                    <div className="flex lg:space-x-2 1190:gap-16 text-[#23A6F0]">
                        <BulButtonu />
                        <SepetimButtonu />
                        <FavorilerButtonu />
                    </div>
                </div>
            </div>
        </div>
    );
}
