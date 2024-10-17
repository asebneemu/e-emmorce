import { FaBookReader } from 'react-icons/fa'; // Font Awesome'dan import
import { Book } from '@carbon/icons-react'; // İkinci ikon için Carbon Icons
import { UilArrowGrowth } from '@iconscout/react-unicons'; // Üçüncü ikon için Unicons

const FeaturedProducts = () => {
    return (
        <div className="w-full py-32 flex flex-col items-center gap-20">
            {/* İlk Div */}
            <div className="flex flex-col items-center justify-center text-center gap-4">
                <h4 className="text-lg font-medium">Featured Products</h4>
                <h3 className="text-4xl font-bold">THE BEST SERVICES</h3>
                <p className="text-base max-w-md">
                    Problems trying to resolve the conflict between
                </p>
            </div>

            {/* İkinci Div */}
            <div className="flex flex-col items-center gap-14 mt-10 md:flex-row md:gap-32 px-10">
                {/* İlk Küçük Div */}
                <div className="flex flex-col items-center text-center">
                    <FaBookReader size={52} className="mb-4 text-blue-500" /> {/* Book Reader ikonu */}
                    <h3 className="text-xl font-semibold">Easy Wins</h3>
                    <p className="text-base">Get your best looking smile now!</p>
                </div>

                {/* İkinci Küçük Div */}
                <div className="flex flex-col items-center text-center">
                    <Book size={52} className="mb-4 text-blue-500" /> {/* İkinci ikon - Carbon Book */}
                    <h3 className="text-xl font-semibold">Concrete</h3>
                    <p className="text-base">Defalcate is most focused in helping you discover your most beautiful smile</p>
                </div>

                {/* Üçüncü Küçük Div */}
                <div className="flex flex-col items-center text-center">
                    <UilArrowGrowth size={52} className="mb-4 text-blue-500" /> {/* Üçüncü ikon - Arrow Growth */}
                    <h3 className="text-xl font-semibold">Hack Growth</h3>
                    <p className="text-base">Overcame any hurdle or any other problem.</p>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProducts;
