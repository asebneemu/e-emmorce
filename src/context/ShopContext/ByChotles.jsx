/* eslint-disable react/prop-types */
import resim1 from '../../assets/pictures/bestsellers/elbise.jpg';
import resim2 from '../../assets/pictures/bestsellers/canta.jpg';
import resim3 from '../../assets/pictures/bestsellers/tisort.avif';
import resim4 from '../../assets/pictures/bestsellers/pantalon.jpg';

const ByChotles = ({ 
    setSelectedCategory, 
    elbiseData, 
    cantaData, 
    tisortData, 
    pantalonData 
}) => {
    return (
        <div className="w-full my-16 flex justify-center">
            <div className="w-[80%] mx-auto flex justify-center items-center 3xs:flex-col 3xs:items-center md:flex-row gap-2">
                <div 
                    onClick={() => setSelectedCategory("elbise")}
                    className="cursor-pointer 3xs:w-[70%] md:w-[20%] aspect-square h-[120%] bg-cover bg-center relative" 
                    style={{ backgroundImage: `url(${resim1})` }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-0"></div>
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                        <h2 className="text-2xl font-bold absolute top-8 transform -translate-y-1/2">Elbise</h2>
                        <p className="text-lg absolute bottom-4 right-4">{elbiseData.length} Items</p>
                    </div>
                </div>
                <div 
                    onClick={() => setSelectedCategory("canta")}
                    className="cursor-pointer 3xs:w-[70%] md:w-[20%] aspect-square h-[120%] bg-cover bg-center relative" 
                    style={{ backgroundImage: `url(${resim2})` }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-0"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                        <h2 className="text-2xl font-bold absolute top-8 transform -translate-y-1/2">Çanta</h2>
                        <p className="text-lg absolute bottom-4 right-4">{cantaData.length} Items</p>
                    </div>
                </div>
                <div 
                    onClick={() => setSelectedCategory("tisort")}
                    className="cursor-pointer 3xs:w-[70%] md:w-[20%] aspect-square h-[120%] bg-cover bg-center relative" 
                    style={{ backgroundImage: `url(${resim3})` }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-0"></div>
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                        <h2 className="text-2xl font-bold absolute top-8 transform -translate-y-1/2">Tişört</h2>
                        <p className="text-lg absolute bottom-4 right-4">{tisortData.length} Items</p>
                    </div>
                </div>
                <div 
                    onClick={() => setSelectedCategory("pantalon")}
                    className="cursor-pointer 3xs:w-[70%] md:w-[20%] aspect-square h-[120%] bg-cover bg-center relative" 
                    style={{ backgroundImage: `url(${resim4})` }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-0"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                        <h2 className="text-2xl font-bold absolute top-8 transform -translate-y-1/2">Pantolon</h2>
                        <p className="text-lg absolute bottom-4 right-4">{pantalonData.length} Items</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ByChotles;
