import React from 'react';

export default function Header() {
    return (
        <div className="md:hidden flex justify-center items-center h-screen">
            {/* %95 genişlik ve 1000px height ile iç div */}
            <div className="w-[95%] h-auto rounded-lg bg-gradient-to-r from-blue-200 to-green-200 relative">
                {/* İçerideki margin-top alan div */}
                <div className="w-full mt-[20%] mb-[20%] flex flex-col items-center text-center gap-16 px-10">
                    <h3 className="text-3xl font-semibold text-[#2A7CC7]" style={{ fontWeight: 700 }}>SUMMER 2022</h3>
                    <h1 className="text-8xl font-bold">NEW COLLECTION</h1>
                    <p className="text-5xl mt-4 text-gray-700">
                        We know how large objects
                        will act, but things on a
                        small scale.
                    </p>
                    <button className="text-3xl font-bold w-[220px] h-[60px] mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                        SHOP NOW
                    </button>
                </div>
                {/* Yeni eklenen kardeş div */}
                <div className="w-full flex justify-center items-center overflow-hidden">
                    <div className="w-full aspect-square bg-white rounded-full">
                        <img src="pictures/logo.png" alt="Your Image" className="w-full h-full object-cover" /></div> {/* Çember */}
                </div>
            </div>
        </div>
    );
}
