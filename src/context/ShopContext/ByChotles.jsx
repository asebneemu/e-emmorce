import { useState } from 'react';
import resim1 from '../../assets/pictures/bestsellers/elbise.jpg';
import resim2 from '../../assets/pictures/bestsellers/canta.jpg';
import resim3 from '../../assets/pictures/bestsellers/tisort.avif';
import resim4 from '../../assets/pictures/bestsellers/pantalon.jpg';

const ByChotles = ({ 
    setSelectedCategory, 
    shopBestsellersEtekData,
    shopBestsellersElbiseData, 
    shopBestsellersCantaData, 
    shopBestsellersTakiData,
    shopBestsellersIcGiyimData,
    shopBestsellersAyakkabiData,
    shopBestsellersTisortData, 
    shopBestsellersPantalonData 
}) => {
    const [selectedGender, setSelectedGender] = useState("kadın");

    return (
        <div className="w-full my-16 flex flex-col items-center">
            {/* Başlık Bölümü */}
            <div className="flex justify-center mb-8">
                <h1 
                    onClick={() => setSelectedGender("kadın")}
                    className={`cursor-pointer text-2xl font-bold mx-4 ${selectedGender === "kadın" ? "text-black" : "text-gray-400"}`}
                >
                    Kadın
                </h1>
                <h1 
                    onClick={() => setSelectedGender("erkek")}
                    className={`cursor-pointer text-2xl font-bold mx-4 ${selectedGender === "erkek" ? "text-black" : "text-gray-400"}`}
                >
                    Erkek
                </h1>
            </div>

            {/* Kadın Kategorisi Kartları */}
            {selectedGender === "kadın" && (
                <div className="w-[80%] mx-auto flex flex-wrap justify-center items-center gap-2">
                    <div 
                        onClick={() => setSelectedCategory("etek")}
                        className="cursor-pointer w-[45%] md:w-[20%] aspect-square h-[120%] bg-cover bg-center relative" 
                        style={{ backgroundImage: `url(${resim1})` }}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-0"></div>
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                            <h2 className="text-2xl font-bold">Etek</h2>
                            <p className="text-lg">{shopBestsellersEtekData.length} Items</p>
                        </div>
                    </div>
                    <div 
                        onClick={() => setSelectedCategory("elbise")}
                        className="cursor-pointer w-[45%] md:w-[20%] aspect-square h-[120%] bg-cover bg-center relative" 
                        style={{ backgroundImage: `url(${resim1})` }}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-0"></div>
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                            <h2 className="text-2xl font-bold">Elbise</h2>
                            <p className="text-lg">{shopBestsellersElbiseData.length} Items</p>
                        </div>
                    </div>
                    <div 
                        onClick={() => setSelectedCategory("canta")}
                        className="cursor-pointer w-[45%] md:w-[20%] aspect-square h-[120%] bg-cover bg-center relative" 
                        style={{ backgroundImage: `url(${resim2})` }}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-0"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                            <h2 className="text-2xl font-bold">Çanta</h2>
                            <p className="text-lg">{shopBestsellersCantaData.length} Items</p>
                        </div>
                    </div>
                    <div 
                        onClick={() => setSelectedCategory("taki")}
                        className="cursor-pointer w-[45%] md:w-[20%] aspect-square h-[120%] bg-cover bg-center relative" 
                        style={{ backgroundImage: `url(${resim3})` }}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-0"></div>
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                            <h2 className="text-2xl font-bold">Takı</h2>
                            <p className="text-lg">{shopBestsellersTakiData.length} Items</p>
                        </div>
                    </div>
                    <div 
                        onClick={() => setSelectedCategory("icgiyim")}
                        className="cursor-pointer w-[45%] md:w-[20%] aspect-square h-[120%] bg-cover bg-center relative" 
                        style={{ backgroundImage: `url(${resim4})` }}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-0"></div>
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                            <h2 className="text-2xl font-bold">İç Giyim</h2>
                            <p className="text-lg">{shopBestsellersIcGiyimData.length} Items</p>
                        </div>
                    </div>
                    <div 
                        onClick={() => setSelectedCategory("ayakkabi")}
                        className="cursor-pointer w-[45%] md:w-[20%] aspect-square h-[120%] bg-cover bg-center relative" 
                        style={{ backgroundImage: `url(${resim4})` }}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-0"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                            <h2 className="text-2xl font-bold">Ayakkabı</h2>
                            <p className="text-lg">{shopBestsellersAyakkabiData.length} Items</p>
                        </div>
                    </div>
                    <div 
                        onClick={() => setSelectedCategory("tisort")}
                        className="cursor-pointer w-[45%] md:w-[20%] aspect-square h-[120%] bg-cover bg-center relative" 
                        style={{ backgroundImage: `url(${resim3})` }}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-0"></div>
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                            <h2 className="text-2xl font-bold">Tişört</h2>
                            <p className="text-lg">{shopBestsellersTisortData.length} Items</p>
                        </div>
                    </div>
                    <div 
                        onClick={() => setSelectedCategory("pantalon")}
                        className="cursor-pointer w-[45%] md:w-[20%] aspect-square h-[120%] bg-cover bg-center relative" 
                        style={{ backgroundImage: `url(${resim4})` }}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-0"></div>
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                            <h2 className="text-2xl font-bold">Pantolon</h2>
                            <p className="text-lg">{shopBestsellersPantalonData.length} Items</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Erkek Kategorisi İçerikleri */}
            {selectedGender === "erkek" && (
                <div className="w-[80%] mx-auto flex justify-center items-center 3xs:flex-col 3xs:items-center md:flex-row gap-2">
                    <p className="text-gray-500">Erkek kategorisi altında gösterilecek içerikler burada olacak.</p>
                </div>
            )}
        </div>
    );
};

export default ByChotles;
