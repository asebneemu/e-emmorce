import resim1 from '../../assets/pictures/bestsellers/c19.jpeg';
import resim2 from '../../assets/pictures/bestsellers/c12.jpeg';
import resim3 from '../../assets/pictures/bestsellers/c14.jpeg';
import resim4 from '../../assets/pictures/bestsellers/b49.jpeg';

const ByChotles = ({ setSelectedCategory }) => {
    return (
        <div className="w-full my-16 flex justify-center">
            <div className="w-[80%] mx-auto flex justify-center items-center 3xs:flex-col 3xs:items-center md:flex-row gap-2">
                <div 
                    onClick={() => setSelectedCategory("elbise")}
                    className="cursor-pointer 3xs:w-[70%] md:w-[20%] aspect-square bg-cover bg-center relative" 
                    style={{ backgroundImage: `url(${resim1})` }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-0"></div>
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                        <h2 className="text-2xl font-bold absolute top-8 transform -translate-y-1/2">Elbise</h2>
                        <p className="text-lg absolute bottom-4 right-4">5 Items</p>
                    </div>
                </div>
                <div 
                    onClick={() => setSelectedCategory("canta")}
                    className="cursor-pointer 3xs:w-[70%] md:w-[20%] aspect-square bg-cover bg-center relative" 
                    style={{ backgroundImage: `url(${resim2})` }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                        <h2 className="text-2xl font-bold absolute top-8 transform -translate-y-1/2">Çanta</h2>
                        <p className="text-lg absolute bottom-4 right-4">5 Items</p>
                    </div>
                </div>
                <div 
                    onClick={() => setSelectedCategory("tisort")}
                    className="cursor-pointer 3xs:w-[70%] md:w-[20%] aspect-square bg-cover bg-center relative" 
                    style={{ backgroundImage: `url(${resim3})` }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-0"></div>
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                        <h2 className="text-2xl font-bold absolute top-8 transform -translate-y-1/2">Tişört</h2>
                        <p className="text-lg absolute bottom-4 right-4">5 Items</p>
                    </div>
                </div>
                <div 
                    onClick={() => setSelectedCategory("pantalon")}
                    className="cursor-pointer 3xs:w-[70%] md:w-[20%] aspect-square bg-cover bg-center relative" 
                    style={{ backgroundImage: `url(${resim4})` }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                        <h2 className="text-2xl font-bold absolute top-8 transform -translate-y-1/2">Pantolon</h2>
                        <p className="text-lg absolute bottom-4 right-4">5 Items</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ByChotles;
