import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="flex justify-center items-center h-auto min-h-screen mb-10">
            {/* %95 genişlik ve otomatik height ile iç div */}
            <div className="w-[95%] h-auto rounded-lg bg-gradient-to-r from-blue-200 to-green-200 relative overflow-hidden">
                {/* İçerideki margin-top alan div */}
                <div className="w-full mt-[30%] md:mt-10 md:mb-10 mb-[20%] flex md:flex-row flex-col items-center text-center md:text-left gap-16 px-10 relative z-20">
                    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-10">
                        <h3 className="text-xl font-semibold text-[#2A7CC7]" style={{ fontWeight: 700 }}>SUMMER 2022</h3>
                        <h1 className="text-6xl font-bold">NEW COLLECTION</h1>
                        <p className="text-3xl mt-4 text-gray-700">
                            We know how large objects
                            will act, but things on a
                            small scale.
                        </p>
                        <Link to="/shop-page">
                            <button className="text-3xl font-bold w-[220px] h-[60px] mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                                SHOP NOW
                            </button>
                        </Link>
                    </div>

                    {/* Yeni eklenen div */}
                    <div className="w-full md:w-1/2 relative flex justify-center items-center">
                        <div className="w-[95%] aspect-square bg-white rounded-full flex justify-center items-center">
                            {/* Çemberin içinde yer alan içerik buraya eklenebilir */}
                        </div>

                        {/* Resim */}
                        <div className="absolute bottom-0 right-0 w-full h-auto z-30 left-0 transform scale-135 -translate-x-5 md:translate-x-10">
                            <img src="pictures/logo.png" alt="Your Image" className="w-full h-auto object-cover" />
                        </div>

                        {/* ilk Çember */}
                        <div className="absolute bottom-[220px] right-10 w-6 h-6 bg-white rounded-full z-40">
                            {/* 6px yarıçapında beyaz çember */}
                        </div>

                        {/* İkinci çember */}
                        <div className="absolute bottom-[400px] right-5 w-3 h-3 bg-purple-500 rounded-full z-40">
                            {/* 3px yarıçapında mor çember */}
                        </div>

                        {/* Üçüncü çember */}
                        <div className="absolute 4xs:bottom-[400px] bottom-[600px] left-0 w-20 h-20 bg-white rounded-full z-40">
                            {/* 10px yarıçapında beyaz çember */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
