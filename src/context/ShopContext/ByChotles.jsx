/* eslint-disable react/prop-types */
import { useState } from 'react';
import resim1 from '../../assets/pictures/bestsellers/elbise.jpg';
import resim2 from '../../assets/pictures/bestsellers/canta.jpg';
import resim3 from '../../assets/pictures/bestsellers/tisort.avif';
import resim4 from '../../assets/pictures/bestsellers/pantalon.jpg';
import resim5 from '../../assets/pictures/bestsellers/etekv.jpg';
import resim6 from '../../assets/pictures/bestsellers/icgiyim.jpg';
import resim7 from '../../assets/pictures/bestsellers/shoev.jpg';
import resim8 from '../../assets/pictures/bestsellers/ceketv.jpg';
import resim9 from '../../assets/pictures/bestsellers/gomlekv.jpg';
import resim10 from '../../assets/pictures/bestsellers/takimv.jpg';
import resim11 from '../../assets/pictures/bestsellers/kazakv.jpg';
import resim12 from '../../assets/pictures/bestsellers/ayakkabiv.jpg';

const ByChotles = ({
    setSelectedCategory,
    setSelectedGender,
    selectedGender,
    elbiseData,
    cantaData,
    tisortData,
    pantalonData,
    etekData,
    takiData,
    icgiyimData,
    ayakkabiData,
    ceketData,
    gomlekData,
    takimData,
    kazakData,
    erkekAyakkabiData,
}) => {
    return (
        <div className="w-full my-16 flex flex-col items-center">
            {/* Başlık Bölümü */}
            <div className="flex justify-center mb-8">
                <h1
                    onClick={() => {
                        setSelectedGender("kadın");
                        setSelectedCategory("rastgele");
                    }}
                    className={`cursor-pointer text-2xl font-bold mx-4 ${selectedGender === "kadın" ? "text-black" : "text-gray-400"}`}
                >
                    Kadın
                </h1>
                <h1
                    onClick={() => {
                        setSelectedGender("erkek");
                        setSelectedCategory("rastgele");
                    }}
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
                        style={{ backgroundImage: `url(${resim5})` }}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-0"></div>
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                            <h2 className="text-2xl font-bold">Etek</h2>
                            <p className="text-lg">{etekData.length} Items</p>
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
                            <p className="text-lg">{elbiseData.length} Items</p>
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
                            <p className="text-lg">{cantaData.length} Items</p>
                        </div>
                    </div>
                    <div
                        onClick={() => setSelectedCategory("taki")}
                        className="cursor-pointer w-[45%] md:w-[20%] aspect-square h-[120%] bg-cover bg-center relative"
                        style={{ backgroundImage: `url(${resim4})` }}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-0"></div>
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                            <h2 className="text-2xl font-bold">Takı</h2>
                            <p className="text-lg">{takiData.length} Items</p>
                        </div>
                    </div>
                    <div
                        onClick={() => setSelectedCategory("icgiyim")}
                        className="cursor-pointer w-[45%] md:w-[20%] aspect-square h-[120%] bg-cover bg-center relative"
                        style={{ backgroundImage: `url(${resim6})` }}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-0"></div>
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                            <h2 className="text-2xl font-bold">İç Giyim</h2>
                            <p className="text-lg">{icgiyimData.length} Items</p>
                        </div>
                    </div>
                    <div
                        onClick={() => setSelectedCategory("ayakkabi")}
                        className="cursor-pointer w-[45%] md:w-[20%] aspect-square h-[120%] bg-cover bg-center relative"
                        style={{ backgroundImage: `url(${resim7})` }}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-0"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                            <h2 className="text-2xl font-bold">Ayakkabı</h2>
                            <p className="text-lg">{ayakkabiData.length} Items</p>
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
                            <p className="text-lg">{tisortData.length} Items</p>
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
                            <p className="text-lg">{pantalonData.length} Items</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Erkek Kategorisi İçerikleri */}
            {selectedGender === "erkek" && (
                <div className="w-[80%] mx-auto flex flex-wrap justify-center items-center gap-2">
                    <div onClick={() => setSelectedCategory("ceket")} className="cursor-pointer w-[45%] md:w-[20%] aspect-square h-[120%] bg-cover bg-center relative" style={{ backgroundImage: `url(${resim8})` }}>
                        <div className="absolute inset-0 bg-black bg-opacity-0"></div>
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                            <h2 className="text-2xl font-bold">Ceket</h2>
                            <p className="text-lg">{ceketData.length} Items</p>
                        </div>
                    </div>
                    <div onClick={() => setSelectedCategory("gomlek")} className="cursor-pointer w-[45%] md:w-[20%] aspect-square h-[120%] bg-cover bg-center relative" style={{ backgroundImage: `url(${resim9})` }}>
                        <div className="absolute inset-0 bg-black bg-opacity-0"></div>
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                            <h2 className="text-2xl font-bold">Gömlek</h2>
                            <p className="text-lg">{gomlekData.length} Items</p>
                        </div>
                    </div>
                    <div onClick={() => setSelectedCategory("takim")} className="cursor-pointer w-[45%] md:w-[20%] aspect-square h-[120%] bg-cover bg-center relative" style={{ backgroundImage: `url(${resim10})` }}>
                        <div className="absolute inset-0 bg-black bg-opacity-0"></div>
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                            <h2 className="text-2xl font-bold">Takım</h2>
                            <p className="text-lg">{takimData.length} Items</p>
                        </div>
                    </div>
                    <div onClick={() => setSelectedCategory("kazak")} className="cursor-pointer w-[45%] md:w-[20%] aspect-square h-[120%] bg-cover bg-center relative" style={{ backgroundImage: `url(${resim11})` }}>
                        <div className="absolute inset-0 bg-black bg-opacity-0"></div>
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                            <h2 className="text-2xl font-bold">Kazak</h2>
                            <p className="text-lg">{kazakData.length} Items</p>
                        </div>
                    </div>
                    <div onClick={() => setSelectedCategory("erkekAyakkabi")} className="cursor-pointer w-[45%] md:w-[20%] aspect-square h-[120%] bg-cover bg-center relative" style={{ backgroundImage: `url(${resim12})` }}>
                        <div className="absolute inset-0 bg-black bg-opacity-0"></div>
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                            <h2 className="text-2xl font-bold">Ayakkabı</h2>
                            <p className="text-lg">{erkekAyakkabiData.length} Items</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ByChotles;
